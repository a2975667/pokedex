# Pokédex Stage 011: Links

This stage turns each Pokémon card into a link, introducing navigation as the next layer of the app.

## Learning Goals

- Use `next/link` for client-side navigation
- Make list items interactive without changing the data flow
- Prepare the UI for detail pages

## What Exists In This Stage

- All work from stage `010`
- Clickable Pokémon cards on the homepage
- Links pointing to `/pokemon/[id]`

## Running This Stage

Configure the database credentials in `.env.local`, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Suggested Teaching Focus

This branch is intentionally small. It shows that a meaningful UX improvement can come from a focused change instead of a large refactor.

## Important Note

This branch adds the links, but it does not yet include a finished detail page component. That work happens later on `main`, not in the numbered stage sequence.

## Next Stage

Stage `012` adds the advanced filter panel so students can connect richer UI controls to the API they built earlier.
