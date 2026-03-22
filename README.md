# Pokédex Stage 009: Pagination

This stage adds paging controls to the Pokédex so students can navigate through the full dataset without loading everything at once.

## Learning Goals

- Track pagination metadata in component state
- Send page information to the API
- Update UI controls based on the current page

## What Exists In This Stage

- All work from stage `008`
- Pagination state on the client
- Previous and Next buttons
- Current page and total pages display

## Running This Stage

Configure the database credentials in `.env.local`, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Suggested Teaching Focus

This is a good stage for discussing how backend pagination design affects frontend state management.

## Next Stage

Stage `010` improves the user experience with loading feedback, type badges, and a no-results state.
