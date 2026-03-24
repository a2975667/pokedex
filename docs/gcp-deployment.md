# GCP Deployment Guide

This guide is for the final tutorial stage, when the Pokedex is deployed to Google Cloud Platform. The recommended target is Cloud Run for the app and Cloud SQL for MySQL.

## Architecture

- Cloud Run runs the Next.js application in a container.
- Cloud SQL for MySQL stores the Pokemon data.
- Secret Manager stores database credentials.
- Artifact Registry stores the container image.

## Deployment Assumptions

This repository is prepared for container deployment with:

- a production Dockerfile
- Next.js standalone output
- support for either TCP database connections or a Cloud SQL Unix socket

## 1. Required GCP Services

Enable these APIs in the target project:

- Cloud Run Admin API
- Cloud Build API
- Artifact Registry API
- Secret Manager API
- Cloud SQL Admin API

Example:

```bash
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com \
  secretmanager.googleapis.com \
  sqladmin.googleapis.com
```

## 2. Create a Cloud SQL MySQL Instance

Create a MySQL instance and a database for the app:

```bash
gcloud sql instances create pokedex-db \
  --database-version=MYSQL_8_0 \
  --region=us-central1 \
  --tier=db-f1-micro

gcloud sql databases create pokemon_db --instance=pokedex-db
```

Create an application database user, then load your schema and seed data using your normal course workflow.

## 3. Store Secrets

Create secrets for the database user and password:

```bash
printf 'app_user' | gcloud secrets create pokedex-db-user --data-file=-
printf 'replace-me' | gcloud secrets create pokedex-db-password --data-file=-
```

If the secrets already exist, add a new version instead:

```bash
printf 'app_user' | gcloud secrets versions add pokedex-db-user --data-file=-
printf 'replace-me' | gcloud secrets versions add pokedex-db-password --data-file=-
```

## 4. Create an Artifact Registry Repository

```bash
gcloud artifacts repositories create pokedex \
  --repository-format=docker \
  --location=us-central1
```

## 5. Grant Runtime Access

The Cloud Run service identity needs permission to connect to Cloud SQL and read secrets.

```bash
export PROJECT_ID="your-gcp-project"
export PROJECT_NUMBER="$(gcloud projects describe "$PROJECT_ID" --format='value(projectNumber)')"
export SERVICE_ACCOUNT="$PROJECT_NUMBER-compute@developer.gserviceaccount.com"

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:$SERVICE_ACCOUNT" \
  --role="roles/cloudsql.client"

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:$SERVICE_ACCOUNT" \
  --role="roles/secretmanager.secretAccessor"
```

If you deploy Cloud Run with a custom service account, grant the roles to that service account instead.

## 6. Build the Container Image

Set your project variables:

```bash
export PROJECT_ID="your-gcp-project"
export REGION="us-central1"
export IMAGE="$REGION-docker.pkg.dev/$PROJECT_ID/pokedex/pokedex:latest"
```

Build and push the image:

```bash
gcloud builds submit --tag "$IMAGE"
```

## 7. Deploy to Cloud Run

Look up the Cloud SQL connection name:

```bash
export INSTANCE_CONNECTION_NAME="$(gcloud sql instances describe pokedex-db \
  --format='value(connectionName)')"
```

Deploy the service:

```bash
gcloud run deploy pokedex \
  --image "$IMAGE" \
  --region "$REGION" \
  --platform managed \
  --allow-unauthenticated \
  --add-cloudsql-instances "$INSTANCE_CONNECTION_NAME" \
  --set-env-vars "DB_NAME=pokemon_db,DB_SOCKET_PATH=/cloudsql/$INSTANCE_CONNECTION_NAME,NODE_ENV=production" \
  --set-secrets "DB_USER=pokedex-db-user:latest,DB_PASSWORD=pokedex-db-password:latest"
```

## 8. Verify the Deployment

After deployment:

- open the Cloud Run service URL
- confirm the home page loads
- search for a Pokemon
- load a detail page
- call `/api/pokemon`
- check Cloud Run logs for database connection errors

## Environment Variables

The app supports two database connection styles.

### Local TCP connection

```bash
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=pokemon_db
DB_USER=...
DB_PASSWORD=...
```

### Cloud SQL Unix socket

```bash
DB_SOCKET_PATH=/cloudsql/PROJECT_ID:REGION:INSTANCE_NAME
DB_NAME=pokemon_db
DB_USER=...
DB_PASSWORD=...
```

Optional SSL variables:

```bash
DB_SSL=true
DB_SERVER_CA=...
DB_CLIENT_CERT=...
DB_CLIENT_KEY=...
DB_SSL_REJECT_UNAUTHORIZED=true
```

## Student Deployment Checklist

- `npm run lint` passes
- `npm run build` passes
- database schema is loaded in Cloud SQL
- database credentials are stored in Secret Manager
- Cloud Run has access to the Cloud SQL instance
- the deployed app can read from `/api/pokemon`

## Maintenance Notes

When the tutorial changes, revisit this document and update:

- environment variables
- schema-loading instructions
- service names
- region choices
- any new infrastructure dependencies
