# Pokédex Stage 001: First API Route

This stage introduces the first Next.js route handler. The response is still a stub, but students can now see how the app exposes server-side JSON.

## Learning Goals

- Create a route handler with `GET`
- Return JSON with `NextResponse`
- Separate page code from API code

## What Exists In This Stage

- The original homepage is still in place
- `app/api/pokemon/route.ts` returns a placeholder response
- `mysql2` is installed, but the database is not used yet

## Running This Stage

```bash
npm install
npm run dev
```

Open `http://localhost:3000/api/pokemon` to test the route.

## Suggested Teaching Focus

Students should understand that this branch is about the shape of an API endpoint, not about real data yet.

## Next Stage

Stage `002` replaces the stub response with a real MySQL query and adds pagination.
