export interface BranchChange {
  file: string;
  description: string;
}

export interface BranchEntry {
  id: string;
  previous: string | null;
  summary: string;
  changes: BranchChange[];
}

export const branchHistory: BranchEntry[] = [
  {
    id: '000',
    previous: null,
    summary: 'Starting fresh — base Next.js project with Pokémon CSV data, no API yet.',
    changes: [
      { file: 'app/page.tsx', description: 'Default Next.js welcome page' },
      { file: 'data/Pokemon.csv', description: 'Pokémon dataset (720 entries)' },
      { file: 'data/pokemon-spawns.csv', description: 'Pokémon spawn-location dataset' },
    ],
  },
  {
    id: '001',
    previous: '000',
    summary: 'Scaffold the API: add .gitignore, install mysql2, and create a stub GET /api/pokemon route.',
    changes: [
      { file: '.gitignore', description: 'Added standard Next.js .gitignore (node_modules, .next, env files, etc.)' },
      { file: 'package.json / package-lock.json', description: 'Added mysql2 dependency' },
      {
        file: 'app/api/pokemon/route.ts',
        description: 'Created initial GET /api/pokemon stub — returns { message: "Hello, World!" }',
      },
    ],
  },
  {
    id: '002',
    previous: '001',
    summary: 'Connect to the database and serve real paginated Pokémon data from MySQL.',
    changes: [
      {
        file: 'lib/db.ts',
        description: 'Added MySQL connection pool (mysql2/promise) with SSL support and a generic query() helper',
      },
      {
        file: 'app/api/pokemon/route.ts',
        description:
          'Replaced Hello World stub with a real DB-backed handler: reads page & limit query params, runs SELECT with LIMIT/OFFSET, returns data + pagination metadata',
      },
    ],
  },
  {
    id: '003',
    previous: '002',
    summary: 'Add type filtering to the Pokémon list endpoint.',
    changes: [
      {
        file: 'app/api/pokemon/route.ts',
        description:
          'Added types query parameter (comma-separated). Builds an OR condition for type1/type2 columns so results can be filtered by one or more Pokémon types',
      },
    ],
  },
  {
    id: '004',
    previous: '003',
    summary: 'Add name search to the Pokémon list endpoint.',
    changes: [
      {
        file: 'app/api/pokemon/route.ts',
        description:
          'Added name query parameter. Appends a LIKE %name% condition so the API can search Pokémon by name substring',
      },
    ],
  },
  {
    id: '005',
    previous: '004',
    summary: 'Add stat-range filters (HP, Attack, Defense, Speed) to the Pokémon list endpoint.',
    changes: [
      {
        file: 'app/api/pokemon/route.ts',
        description:
          'Added minHp, maxHp, minAttack, maxAttack, minDefense, maxDefense, minSpeed, maxSpeed query parameters. Each appends a >= / <= condition on the corresponding stat column',
      },
    ],
  },
  {
    id: '006',
    previous: '005',
    summary: 'Add a single-Pokémon detail endpoint.',
    changes: [
      {
        file: 'app/api/pokemon/[id]/route.ts',
        description:
          'New GET /api/pokemon/[id] route. Validates the id param, queries by primary key, and returns the Pokémon object or a 404 error',
      },
    ],
  },
  {
    id: '007',
    previous: '006',
    summary: 'Replace the default homepage with a Pokédex search bar.',
    changes: [
      {
        file: 'app/page.tsx',
        description:
          'Replaced the default Next.js welcome page with a "client" component that renders a styled search bar with a text input and Search button',
      },
    ],
  },
  {
    id: '008',
    previous: '007',
    summary: 'Fetch and display a live grid of Pokémon cards with images and stats.',
    changes: [
      {
        file: 'app/page.tsx',
        description:
          'Added Pokemon interface, fetchPokemon function, and two useEffect hooks (initial load + debounced search). Renders a responsive 4-column grid of cards showing the Pokémon image (pokemon.com), name, dex number, and base stats (HP, Attack, Defense, Speed)',
      },
    ],
  },
  {
    id: '009',
    previous: '008',
    summary: 'Add pagination controls to the Pokémon grid.',
    changes: [
      {
        file: 'app/page.tsx',
        description:
          'Added PaginationData interface and pagination state. Stores total / totalPages from the API response. Renders Previous / Next buttons below the grid; buttons are disabled at the first and last page',
      },
    ],
  },
  {
    id: '010',
    previous: '009',
    summary: 'Add loading state, type badges, and a "no results" message.',
    changes: [
      {
        file: 'app/page.tsx',
        description:
          'Added loading boolean state — shows a "Loading…" message while fetching and hides the grid. Added getTypeColor helper and coloured type badge chips on each card. Added a "No Pokémon found" message when the filtered list is empty. Removed unused use import',
      },
    ],
  },
  {
    id: '011',
    previous: '010',
    summary: 'Make Pokémon cards clickable links to the detail page.',
    changes: [
      {
        file: 'app/page.tsx',
        description:
          'Wrapped each grid card in a next/link <Link> pointing to /pokemon/[id]. Added card styling: white/dark background, rounded corners, drop shadow, and a hover scale + shadow-xl transition',
      },
    ],
  },
  {
    id: '012',
    previous: '011',
    summary: 'Add an advanced filter panel with type toggles and stat-range sliders.',
    changes: [
      {
        file: 'app/page.tsx',
        description:
          'Added Filters interface and POKEMON_TYPES constant. Added showFilters toggle button next to the search bar. When open, the filter panel shows: (1) colored type-toggle buttons for all 18 types, (2) dual range sliders for HP, Attack, Defense, and Speed. A "Clear All" button resets both the search query and all active filters. fetchPokemon now receives and forwards all active filters as query params',
      },
    ],
  },
];
