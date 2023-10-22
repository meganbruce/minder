// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.19.1
// source: providers.sql

package db

import (
	"context"
	"encoding/json"

	"github.com/google/uuid"
	"github.com/lib/pq"
)

const createProvider = `-- name: CreateProvider :one
INSERT INTO providers (
    name,
    project_id,
    implements,
    definition) VALUES ($1, $2, $3, $4::jsonb) RETURNING id, name, version, project_id, implements, definition, created_at, updated_at
`

type CreateProviderParams struct {
	Name       string          `json:"name"`
	ProjectID  uuid.UUID       `json:"project_id"`
	Implements []ProviderType  `json:"implements"`
	Definition json.RawMessage `json:"definition"`
}

func (q *Queries) CreateProvider(ctx context.Context, arg CreateProviderParams) (Provider, error) {
	row := q.db.QueryRowContext(ctx, createProvider,
		arg.Name,
		arg.ProjectID,
		pq.Array(arg.Implements),
		arg.Definition,
	)
	var i Provider
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Version,
		&i.ProjectID,
		pq.Array(&i.Implements),
		&i.Definition,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}

const deleteProvider = `-- name: DeleteProvider :exec
DELETE FROM providers WHERE id = $1 AND project_id = $2
`

type DeleteProviderParams struct {
	ID        uuid.UUID `json:"id"`
	ProjectID uuid.UUID `json:"project_id"`
}

func (q *Queries) DeleteProvider(ctx context.Context, arg DeleteProviderParams) error {
	_, err := q.db.ExecContext(ctx, deleteProvider, arg.ID, arg.ProjectID)
	return err
}

const getProviderByID = `-- name: GetProviderByID :one
SELECT id, name, version, project_id, implements, definition, created_at, updated_at FROM providers WHERE id = $1 AND project_id = $2
`

type GetProviderByIDParams struct {
	ID        uuid.UUID `json:"id"`
	ProjectID uuid.UUID `json:"project_id"`
}

func (q *Queries) GetProviderByID(ctx context.Context, arg GetProviderByIDParams) (Provider, error) {
	row := q.db.QueryRowContext(ctx, getProviderByID, arg.ID, arg.ProjectID)
	var i Provider
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Version,
		&i.ProjectID,
		pq.Array(&i.Implements),
		&i.Definition,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}

const getProviderByName = `-- name: GetProviderByName :one
SELECT id, name, version, project_id, implements, definition, created_at, updated_at FROM providers WHERE name = $1 AND project_id = $2
`

type GetProviderByNameParams struct {
	Name      string    `json:"name"`
	ProjectID uuid.UUID `json:"project_id"`
}

func (q *Queries) GetProviderByName(ctx context.Context, arg GetProviderByNameParams) (Provider, error) {
	row := q.db.QueryRowContext(ctx, getProviderByName, arg.Name, arg.ProjectID)
	var i Provider
	err := row.Scan(
		&i.ID,
		&i.Name,
		&i.Version,
		&i.ProjectID,
		pq.Array(&i.Implements),
		&i.Definition,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}

const globalListProviders = `-- name: GlobalListProviders :many
SELECT id, name, version, project_id, implements, definition, created_at, updated_at FROM providers
`

func (q *Queries) GlobalListProviders(ctx context.Context) ([]Provider, error) {
	rows, err := q.db.QueryContext(ctx, globalListProviders)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []Provider{}
	for rows.Next() {
		var i Provider
		if err := rows.Scan(
			&i.ID,
			&i.Name,
			&i.Version,
			&i.ProjectID,
			pq.Array(&i.Implements),
			&i.Definition,
			&i.CreatedAt,
			&i.UpdatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const listProvidersByProjectID = `-- name: ListProvidersByProjectID :many
SELECT id, name, version, project_id, implements, definition, created_at, updated_at FROM providers WHERE project_id = $1
`

func (q *Queries) ListProvidersByProjectID(ctx context.Context, projectID uuid.UUID) ([]Provider, error) {
	rows, err := q.db.QueryContext(ctx, listProvidersByProjectID, projectID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []Provider{}
	for rows.Next() {
		var i Provider
		if err := rows.Scan(
			&i.ID,
			&i.Name,
			&i.Version,
			&i.ProjectID,
			pq.Array(&i.Implements),
			&i.Definition,
			&i.CreatedAt,
			&i.UpdatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}