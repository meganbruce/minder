//
// Copyright 2023 Stacklok, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Package mock provides a no-op implementation of the minder the authorization client
package mock

import (
	"context"
	"slices"

	"github.com/google/uuid"

	"github.com/stacklok/minder/internal/authz"
)

// SimpleClient maintains a list of authorized projects, suitable for use in tests.
type SimpleClient struct {
	Allowed []uuid.UUID
}

var _ authz.Client = &SimpleClient{}

// Check implements authz.Client
func (n *SimpleClient) Check(_ context.Context, _ string, project uuid.UUID) error {
	if slices.Contains(n.Allowed, project) {
		return nil
	}
	return authz.ErrNotAuthorized
}

// Write implements authz.Client
func (n *SimpleClient) Write(_ context.Context, _ string, _ authz.Role, project uuid.UUID) error {
	n.Allowed = append(n.Allowed, project)
	return nil
}

// Delete implements authz.Client
func (n *SimpleClient) Delete(_ context.Context, _ string, _ authz.Role, project uuid.UUID) error {
	index := slices.Index(n.Allowed, project)
	if index != -1 {
		n.Allowed[index] = n.Allowed[len(n.Allowed)-1]
		n.Allowed = n.Allowed[:len(n.Allowed)-1]
	}
	return nil
}
