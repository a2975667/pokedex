# Pokédex

A full-stack Pokédex web application built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, and **MySQL**. Browse, search, and filter all 720 Pokémon with real-time search, type filters, stat-range sliders, and individual detail pages.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS 4 |
| Language | TypeScript 5 |
| Database | MySQL 2 (via `mysql2/promise`) |

---

## Getting Started

### 1. Prerequisites

- Node.js 18+
- A running MySQL instance with the Pokémon table loaded from `data/Pokemon.csv`

### 2. Environment variables

Create a `.env.local` file in the project root:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=pokemon_db
DB_USER=your_user
DB_PASSWORD=your_password

# Optional SSL (for managed cloud databases)
# DB_SSL=true
# DB_SERVER_CA=<ca-cert>
# DB_CLIENT_CERT=<client-cert>
# DB_CLIENT_KEY=<client-key>
```

### 3. Install dependencies & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Main Pokédex listing page
│   ├── branches/
│   │   ├── page.tsx              # Interactive branch-history timeline
│   │   └── data.ts               # Typed data for every branch entry
│   ├── pokemon/[id]/
│   │   └── page.tsx              # Individual Pokémon detail page
│   └── api/
│       ├── pokemon/
│       │   ├── route.ts          # GET /api/pokemon  (list + filter)
│       │   └── [id]/route.ts     # GET /api/pokemon/:id
│       └── branches/
│           └── route.ts          # GET /api/branches
├── lib/
│   └── db.ts                     # MySQL connection pool + query helper
data/
├── Pokemon.csv                   # 720 Pokémon records
└── pokemon-spawns.csv            # Spawn location data
examples/
├── README.md                     # curl / JS usage examples
├── api-demo.js                   # Node.js demo script
└── route-example.ts              # POST / PUT / PATCH / DELETE patterns
```

---

## Features

- 🔍 **Real-time name search** — debounced, no submit button required
- 🏷️ **Type filter** — toggle one or more of the 18 Pokémon types
- 📊 **Stat-range sliders** — filter by HP, Attack, Defense, and Speed
- 📄 **Pagination** — 20 Pokémon per page with Previous / Next controls
- 🖼️ **Detail pages** — full stat breakdown with colour-coded progress bars
- 🌙 **Dark mode** — follows the system preference automatically
- 📜 **Branch history page** — visit `/branches` to see how the project was built step by step

---

## API Reference

### `GET /api/pokemon`

Returns a paginated list of Pokémon with optional filters.

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | number | Page number (default: 1) |
| `limit` | number | Results per page (default: 20) |
| `name` | string | Substring match on name |
| `types` | string | Comma-separated list of types (e.g. `fire,water`) |
| `minHp` / `maxHp` | number | HP range |
| `minAttack` / `maxAttack` | number | Attack range |
| `minDefense` / `maxDefense` | number | Defense range |
| `minSpeed` / `maxSpeed` | number | Speed range |

**Example**
```bash
curl "http://localhost:3000/api/pokemon?name=char&types=fire&minAttack=80"
```

### `GET /api/pokemon/:id`

Returns a single Pokémon by its Pokédex ID.

```bash
curl "http://localhost:3000/api/pokemon/6"
```

### `GET /api/branches`

Returns the full branch-progression history as JSON.

```bash
curl "http://localhost:3000/api/branches"
```

---

## Branch Progression

The repository is structured as a series of numbered branches (`000`–`012`), each adding one focused capability on top of the previous. This makes it easy to follow the build-up of the application step by step.

Visit **`/branches`** in the running app for an interactive timeline, or read the summary below.

| Branch | What changed |
|--------|-------------|
| **000** | Base state — Next.js scaffold + Pokémon CSV data, no API |
| **001** | Added `.gitignore`, `mysql2` dependency, and a stub `GET /api/pokemon` route |
| **002** | Added `lib/db.ts` MySQL connection pool; replaced stub with real paginated DB query |
| **003** | Added `types` query parameter to filter by Pokémon type |
| **004** | Added `name` query parameter for substring name search |
| **005** | Added stat-range query parameters (minHp, maxHp, minAttack, maxAttack, minDefense, maxDefense, minSpeed, maxSpeed) |
| **006** | Added `GET /api/pokemon/[id]` endpoint for single-Pokémon lookup |
| **007** | Replaced default Next.js homepage with a Pokédex search bar UI |
| **008** | Added live Pokémon grid with images, names, dex numbers, and base stats |
| **009** | Added pagination controls (Previous / Next) with page count display |
| **010** | Added loading state, colored type badge chips, and a "no results" message |
| **011** | Made Pokémon cards clickable `<Link>` elements that navigate to detail pages |
| **012** | Added advanced filter panel with type-toggle buttons and stat-range sliders |

To check out a specific stage:

```bash
git checkout 005   # API complete with all filters
git checkout 012   # Fully featured UI
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
