# Pokédex Stage 002: Database Query

This stage connects the app to MySQL and returns real Pokémon data from the database. It also introduces pagination parameters.

## Learning Goals

- Create a reusable database helper
- Read environment variables for server-side code
- Query a database from a route handler
- Return paginated API results

## What Exists In This Stage

- `lib/db.ts` creates a MySQL connection pool
- `app/api/pokemon/route.ts` reads `page` and `limit`
- The API now returns real rows from the `pokemon` table

## Running This Stage

Create `.env.local` with:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=pokemon_db
DB_USER=your_user
DB_PASSWORD=your_password
```

Then run:

```bash
npm install
npm run dev
```

Test `http://localhost:3000/api/pokemon?page=1&limit=20`.

## Suggested Teaching Focus

This is the first full-stack stage. Students should trace the flow from request, to SQL query, to JSON response.

## Next Stage

Stage `003` adds type filtering so students can build dynamic SQL conditions from query parameters.
