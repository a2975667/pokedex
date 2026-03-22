# Pokédex Stage 010: Loading And Empty States

This stage improves the interface so it feels more like a real application instead of a raw data demo.

## Learning Goals

- Represent loading state explicitly
- Handle empty result sets gracefully
- Improve presentation with reusable display helpers

## What Exists In This Stage

- All work from stage `009`
- A loading indicator while fetches are in progress
- Type badge styling
- A no-results message when searches return nothing

## Running This Stage

Configure the database credentials in `.env.local`, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Suggested Teaching Focus

Students should see that polish is part of building websites. Good applications explain what is happening, especially while data is loading.

## Next Stage

Stage `011` makes each card clickable so the list can lead into detail navigation.
