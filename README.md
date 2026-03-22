# Pokédex Stage 006: Individual Pokémon API

This stage adds a second API route for fetching one Pokémon by ID. The project now has both a collection endpoint and a detail endpoint.

## Learning Goals

- Create a dynamic route with `[id]`
- Validate route parameters
- Return `400`, `404`, and `500` responses appropriately

## What Exists In This Stage

- All list and filter work from stage `005`
- `app/api/pokemon/[id]/route.ts`
- Error handling for invalid IDs and missing records

## Running This Stage

Configure the database credentials in `.env.local`, then run:

```bash
npm install
npm run dev
```

Test `http://localhost:3000/api/pokemon/25`.

## Suggested Teaching Focus

Students should now see the shape of a small but usable backend API that a frontend can consume.

## Next Stage

Stage `007` begins the frontend work by replacing the default homepage with a custom Pokédex interface.
