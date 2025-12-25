# Holiday Lost & Found Dashboard Spec

## Overview
A web-based dashboard built with Svelte and Bun to track lost and found items from "Day 1 Data: Opening Day Chaos". The app features a cozy Hygge/Winter Holiday theme with interactive elements and data visualizations.

## Tech Stack
- **Runtime:** Bun
- **Framework:** SvelteKit (or Svelte)
- **Styling:** Tailwind CSS (optional but recommended for Hygge vibe)
- **Icons:** Lucide-Svelte
- **Charts:** LayerChart or Chart.js/Pancake
- **Effects:** Canvas-based snow effects

## Project Structure
```
/holiday-lost-found
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Snow.svelte (Canvas snow effect)
│   │   │   ├── StatCard.svelte (Metric cards)
│   │   │   ├── ItemChart.svelte (Visualizations)
│   │   │   └── ItemList.svelte (The detailed list)
│   │   ├── data/
│   │   │   └── processor.js (NLP/Data cleaning logic)
│   │   └── stores/
│   │       └── items.js (Svelte store for data)
│   ├── routes/
│   │   └── +page.svelte (Main Dashboard)
│   └── app.html
├── static/
├── package.json
├── bun.lockb
└── svelte.config.js
```

## Data Understanding & Logic
- **Total Raw Items:** 20
- **Uniques vs Duplicates:** The data contains 10 unique item clusters, each with 2 variations (e.g., "blue scarf" and "BLUE SCARF").
- **Classification Logic:**
    - **Urgent:** Electronics (iPhone, AirPods) and Keys.
    - **Lost:** Items with only one entry (none in this sample, but logic should exist).
    - **Found:** Items with a match (Duplicate found).
- **Processing:** Normalize text (lowercase, remove punctuation), cluster similar items using basic string matching.

## Dashboard Features
1. **Hygge Vibe:**
    - Palette: Deep evergreen, warm gold, cream, and soft burgundy.
    - Typography: Serif fonts for headers, clean sans-serif for stats.
    - Effects: Gentle snow falling overlay, soft glow on hover, warm transitions.
2. **Visualizations:**
    - **Donut Chart:** Unique vs Duplicates.
    - **Bar Chart:** Items by Location (Ice Rink, Storytelling Tent, etc.).
    - **Urgency Meter:** Percentage of urgent items.
3. **Interactive List:**
    - Filter by "Urgent" or "Location".
    - Hover effects to show the raw data variations.

## Deployment
- Port: 3000
- Command: `bun run dev` or `bun preview`
