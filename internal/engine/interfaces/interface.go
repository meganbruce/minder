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
// Package rule provides the CLI subcommand for managing rules

// Package interfaces provides necessary interfaces and implementations for
// implementing engine plugins
package interfaces

import (
	"context"

	billy "github.com/go-git/go-billy/v5"
	"google.golang.org/protobuf/reflect/protoreflect"
)

// Ingester is the interface for a rule type ingester
type Ingester interface {
	// Ingest does the actual data ingestion for a rule type
	Ingest(ctx context.Context, ent protoreflect.ProtoMessage, params map[string]any) (*Result, error)
}

// Evaluator is the interface for a rule type evaluator
type Evaluator interface {
	Eval(ctx context.Context, policy map[string]any, res *Result) error
}

// Result is the result of an ingester
type Result struct {
	// Object is the object that was ingested. Normally comes from an external
	// system like an HTTP server.
	Object any
	// Fs is the filesystem that was created as a result of the ingestion. This
	// is normally used by the evaluator to do rule evaluation. The filesystem
	// may be a git repo, or a memory filesystem.
	Fs billy.Filesystem
}

// RemediateActionOpt is the type that defines what action to take when remediating
type RemediateActionOpt int

const (
	// ActionOptOn means perform the remediation
	ActionOptOn RemediateActionOpt = iota
	// ActionOptOff means do not perform the remediation
	ActionOptOff
	// ActionOptDryRun means perform a dry run of the remediation
	ActionOptDryRun
	// ActionOptUnknown means the action is unknown. This is a sentinel value.
	ActionOptUnknown
)

const defaultAction = ActionOptOff

// RemediationActionOptFromString returns the RemediateActionOpt from a string representation
func RemediationActionOptFromString(s *string) RemediateActionOpt {
	var actionOptMap = map[string]RemediateActionOpt{
		"on":      ActionOptOn,
		"off":     ActionOptOff,
		"dry_run": ActionOptDryRun,
	}

	if s == nil {
		return defaultAction
	}

	if v, ok := actionOptMap[*s]; ok {
		return v
	}

	return ActionOptUnknown
}

// Remediator is the interface for a rule type remediator
type Remediator interface {
	Remediate(ctx context.Context, remAction RemediateActionOpt, ent protoreflect.ProtoMessage, pol map[string]any) error
}