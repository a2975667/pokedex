# CS 411 Pokedex Tutorial

This repository is the course Pokedex application built with Next.js, React, TypeScript, and MySQL. Students use it to practice building a small full-stack web app with a real database, API routes, filtering, and detail pages.

The final deployment target for the tutorial is Google Cloud Platform. The deployment runbook lives in [docs/gcp-deployment.md](/home/tcheng/teaching/cs411/pokedex/docs/gcp-deployment.md), and it should be updated as the tutorial evolves so the last stage can be shipped without reworking the app.

For a branch-by-branch visual walkthrough of stages `000` through `012`, see [docs/branch-visual-guide.md](/home/tcheng/teaching/cs411/pokedex/docs/branch-visual-guide.md).

## What Students Build

- A searchable Pokedex UI
- A paginated Pokemon API
- Filter controls for type and stats
- A Pokemon detail page
- A MySQL-backed data layer

## Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create environment variables

Create a local `.env.local` file:

```bash
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=pokemon_db
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
```

If you are connecting through a Unix socket instead of TCP, use `DB_SOCKET_PATH` and omit `DB_HOST`/`DB_PORT`.

### 3. Start the development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Useful Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Project Map

- [src/app/page.tsx](/home/tcheng/teaching/cs411/pokedex/src/app/page.tsx): main Pokedex UI
- [src/app/pokemon/[id]/page.tsx](/home/tcheng/teaching/cs411/pokedex/src/app/pokemon/[id]/page.tsx): Pokemon detail page
- [src/app/api/pokemon/route.ts](/home/tcheng/teaching/cs411/pokedex/src/app/api/pokemon/route.ts): list/search/filter API
- [src/app/api/pokemon/[id]/route.ts](/home/tcheng/teaching/cs411/pokedex/src/app/api/pokemon/[id]/route.ts): single Pokemon API
- [src/app/api/pokemon/stats/route.ts](/home/tcheng/teaching/cs411/pokedex/src/app/api/pokemon/stats/route.ts): stat range API
- [src/lib/db.ts](/home/tcheng/teaching/cs411/pokedex/src/lib/db.ts): MySQL connection pool
- [examples/README.md](/home/tcheng/teaching/cs411/pokedex/examples/README.md): example API usage and write-operation extensions

## Tutorial Note For Instructors

As new stages are added, keep two things synchronized:

1. The code students are expected to produce.
2. The deployment assumptions in [docs/gcp-deployment.md](/home/tcheng/teaching/cs411/pokedex/docs/gcp-deployment.md).

In practice that means documenting:

- New environment variables
- New Google Cloud services the app depends on
- Required schema or seed steps
- Any runtime assumptions that differ between local development and Cloud Run
