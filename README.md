# Pokédex Stage 008: Search Results Grid

This stage fetches Pokémon from the API and displays them in a grid of cards.

## Learning Goals

- Fetch data from a client component
- Use `useEffect` for initial load and debounced search
- Render lists from fetched JSON
- Display remote images with `next/image`

## What Exists In This Stage

- All backend routes from stage `006`
- A homepage that fetches `/api/pokemon`
- Search-driven updates
- A grid showing image, ID, name, and key stats

## Running This Stage

Configure the database credentials in `.env.local`, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Suggested Teaching Focus

Students can now see the full request loop: typing in the UI changes the request, which changes the rendered results.

## Next Stage

Stage `009` adds pagination controls so the list scales beyond the first page of data.
