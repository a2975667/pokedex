# Pokédex Stage 003: Type Filter

This stage extends the list API so clients can filter Pokémon by one or more types.

## Learning Goals

- Read multi-value query parameters
- Build SQL `WHERE` clauses incrementally
- Reuse the same conditions for count and data queries

## What Exists In This Stage

- All of stage `002`
- A `types` query parameter in `app/api/pokemon/route.ts`
- SQL conditions that match against `type1` and `type2`

## Running This Stage

Configure the database credentials in `.env.local`, then run:

```bash
npm install
npm run dev
```

Test `http://localhost:3000/api/pokemon?types=fire,water`.

## Suggested Teaching Focus

This branch is useful for discussing how an API grows without changing its basic structure.

## Next Stage

Stage `004` adds name search so students can combine exact-style filters with text search.
