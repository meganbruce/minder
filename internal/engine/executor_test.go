// Copyright 2023 Stacklok, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package engine_test

import (
	"encoding/base64"
	"encoding/json"
	"os"
	"testing"
	"time"

	"github.com/golang/mock/gomock"
	"github.com/google/uuid"
	"github.com/stretchr/testify/require"
	"golang.org/x/oauth2"
	"google.golang.org/protobuf/types/known/structpb"

	mockdb "github.com/stacklok/mediator/database/mock"
	"github.com/stacklok/mediator/internal/config"
	"github.com/stacklok/mediator/internal/crypto"
	"github.com/stacklok/mediator/internal/db"
	"github.com/stacklok/mediator/internal/engine"
	mediatorv1 "github.com/stacklok/mediator/pkg/api/protobuf/go/mediator/v1"
)

const (
	fakeTokenKey = "foo-bar"
)

func generateFakeAccessToken(t *testing.T) string {
	t.Helper()

	ftoken := &oauth2.Token{
		AccessToken:  "foo-bar",
		TokenType:    "bar-baz",
		RefreshToken: "",
		// Expires in 10 mins
		Expiry: time.Now().Add(10 * time.Minute),
	}

	// Convert token to JSON
	jsonData, err := json.Marshal(ftoken)
	require.NoError(t, err, "expected no error")

	// encode token
	encryptedToken, err := crypto.EncryptBytes(fakeTokenKey, jsonData)
	require.NoError(t, err, "expected no error")

	return base64.StdEncoding.EncodeToString(encryptedToken)
}

func TestExecutor_handleEntityEvent(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockStore := mockdb.NewMockStore(ctrl)

	// declarations
	groupID := int32(1)
	providerName := "github"
	providerID := uuid.New()
	passthroughRuleType := "passthrough"
	policyID := uuid.New()
	ruleTypeID := uuid.New()
	repositoryID := uuid.New()

	authtoken := generateFakeAccessToken(t)

	// -- start expectations

	// get group information
	mockStore.EXPECT().
		GetGroupByID(gomock.Any(), groupID).
		Return(db.Group{
			ID:   groupID,
			Name: "test",
		}, nil)

	mockStore.EXPECT().
		GetProviderByName(gomock.Any(), db.GetProviderByNameParams{
			Name:    providerName,
			GroupID: groupID,
		}).
		Return(db.Provider{
			ID:      providerID,
			Name:    providerName,
			GroupID: groupID,
		}, nil)

	// get access token
	mockStore.EXPECT().
		GetAccessTokenByGroupID(gomock.Any(),
			db.GetAccessTokenByGroupIDParams{
				Provider: providerName,
				GroupID:  groupID,
			}).
		Return(db.ProviderAccessToken{
			EncryptedToken: authtoken,
		}, nil)

	// list one policy
	crs := []*mediatorv1.Policy_Rule{
		{
			Type: passthroughRuleType,
			Def:  &structpb.Struct{},
		},
	}

	marshalledCRS, err := json.Marshal(crs)
	require.NoError(t, err, "expected no error")

	mockStore.EXPECT().
		ListPoliciesByGroupID(gomock.Any(), groupID).
		Return([]db.ListPoliciesByGroupIDRow{
			{
				ID:              policyID,
				Name:            "test-policy",
				Entity:          db.EntitiesRepository,
				Provider:        providerName,
				GroupID:         groupID,
				CreatedAt:       time.Now(),
				UpdatedAt:       time.Now(),
				ContextualRules: json.RawMessage(marshalledCRS),
			},
		}, nil)

	// get relevant rule
	ruleTypeDef := &mediatorv1.RuleType_Definition{
		InEntity:   mediatorv1.RepositoryEntity.String(),
		RuleSchema: &structpb.Struct{},
		Ingest: &mediatorv1.RuleType_Definition_Ingest{
			Type: "builtin",
			Builtin: &mediatorv1.BuiltinType{
				Method: "Passthrough",
			},
		},
		Eval: &mediatorv1.RuleType_Definition_Eval{
			Type: "rego",
			Rego: &mediatorv1.RuleType_Definition_Eval_Rego{
				Type: "deny-by-default",
				Def: `package mediator
default allow = true`,
			},
		},
	}

	marshalledRTD, err := json.Marshal(ruleTypeDef)
	require.NoError(t, err, "expected no error")

	mockStore.EXPECT().
		GetRuleTypeByName(gomock.Any(), db.GetRuleTypeByNameParams{
			Provider: providerName,
			GroupID:  groupID,
			Name:     passthroughRuleType,
		}).Return(db.RuleType{
		ID:         ruleTypeID,
		Name:       passthroughRuleType,
		Provider:   providerName,
		GroupID:    groupID,
		Definition: json.RawMessage(marshalledRTD),
	}, nil)

	// Upload passing status
	mockStore.EXPECT().
		UpsertRuleEvaluationStatus(gomock.Any(), db.UpsertRuleEvaluationStatusParams{
			PolicyID: policyID,
			RepositoryID: uuid.NullUUID{
				UUID:  repositoryID,
				Valid: true,
			},
			ArtifactID: uuid.NullUUID{},
			RuleTypeID: ruleTypeID,
			Entity:     db.EntitiesRepository,
			EvalStatus: db.EvalStatusTypesSuccess,
		}).Return(nil)

	// -- end expectations

	tmpdir := t.TempDir()
	// write token key to file
	tokenKeyPath := tmpdir + "/token_key"

	// write key to file
	err = os.WriteFile(tokenKeyPath, []byte(fakeTokenKey), 0600)
	require.NoError(t, err, "expected no error")

	e, err := engine.NewExecutor(mockStore, &config.AuthConfig{
		TokenKey: tokenKeyPath,
	})
	require.NoError(t, err, "expected no error")

	eiw := engine.NewEntityInfoWrapper().
		WithProvider(providerName).
		WithGroupID(groupID).
		WithRepository(&mediatorv1.RepositoryResult{
			Repository: "test",
			RepoId:     123,
			CloneUrl:   "github.com/foo/bar.git",
		}).WithRepositoryID(repositoryID)

	msg, err := eiw.BuildMessage()
	require.NoError(t, err, "expected no error")

	require.NoError(t, e.HandleEntityEvent(msg), "expected no error")
}