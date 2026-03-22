# Pokédex Stage 005: Stat Filters

This stage adds numeric filters for HP, Attack, Defense, and Speed so the API can support more realistic search controls.

## Learning Goals

- Parse numeric query parameters
- Apply minimum and maximum constraints in SQL
- Keep filter-building logic readable as the endpoint grows

## What Exists In This Stage

- All of stage `004`
- `minHp`, `maxHp`, `minAttack`, `maxAttack`, `minDefense`, `maxDefense`, `minSpeed`, and `maxSpeed`
- A richer list endpoint in `app/api/pokemon/route.ts`

## Running This Stage

Configure the database credentials in `.env.local`, then run:

```bash
npm install
npm run dev
```

Try a request such as:

```bash
curl "http://localhost:3000/api/pokemon?types=fire&minAttack=80&maxSpeed=120"
```

## Suggested Teaching Focus

This branch is a good point to discuss API design and how a frontend will eventually map UI controls to query parameters.

## Next Stage

Stage `006` adds a single-Pokémon endpoint for detail views.
