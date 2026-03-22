# Pokédex Stage 012: Advanced Filters

This is the last numbered curriculum branch. It adds a richer filter interface on top of the API features built earlier.

## Learning Goals

- Coordinate multiple pieces of client state
- Map UI controls to query parameters
- Build a filter panel with toggle buttons and range inputs

## What Exists In This Stage

- All work from stage `011`
- A show/hide advanced filter panel
- Type toggle buttons
- Range controls for HP, Attack, Defense, and Speed
- Clear and reset behaviors for filters

## Running This Stage

Configure the database credentials in `.env.local`, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Suggested Teaching Focus

This stage brings the frontend and backend halves of the project together. Students can see how earlier API decisions make the filter UI straightforward to implement.

## Important Note

The numbered stages stop here. The current `main` branch goes further by reorganizing into `src/`, adding example write operations, and implementing the actual Pokémon detail page.

## Next Step

After students understand this branch, move to `main` for the post-curriculum additions and cleanup work.
