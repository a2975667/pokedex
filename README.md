# Pokédex Stage 004: Name Search

This stage adds a text-based search filter to the API so clients can search Pokémon by name.

## Learning Goals

- Read optional string parameters from the URL
- Use SQL `LIKE` safely with prepared statements
- Combine search with pagination and existing filters

## What Exists In This Stage

- All of stage `003`
- A `name` query parameter in `app/api/pokemon/route.ts`
- Combined filtering logic for both types and names

## Running This Stage

Configure the database credentials in `.env.local`, then run:

```bash
npm install
npm run dev
```

Test `http://localhost:3000/api/pokemon?name=char`.

## Suggested Teaching Focus

Students can compare this stage with `003` and see how each new filter adds one small piece of logic instead of rewriting the route.

## Next Stage

Stage `005` adds numeric stat-range filters and turns the route into a more complete search API.
