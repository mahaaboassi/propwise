## 🔗 Live Demo  
https://propwise-ebon.vercel.app/

## 💻 Source Code  
https://github.com/mahaaboassi/propwise/

## 📁 Project Structure
src/
├── app/
│   ├── dashboard/
│   │   ├── page.tsx        → Renders the dashboard feature entry (index.tsx)
│   │   └── layout.tsx      → Dashboard-specific layout using semantic HTML (aside, main)
│   ├── page.tsx            → Welcome / landing page
│   └── layout.tsx          → Global application layout
│
├── components/
│   ├── ui/                 → Reusable design system primitives (shadcn-based)
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── counter.tsx     → Animated number counter for KPI values
│   │   ├── field.tsx
│   │   ├── header.tsx      → Typography wrapper (h1, h2, h3 styles)
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── progress.tsx
│   │   ├── separator.tsx
│   │   ├── skeleton.tsx
│   │   ├── sonner.tsx
│   │   └── toast.tsx           → Custom toast component supporting multiple actions (undo, retry)
│   │
│   ├── layout/
│   │   └── sidebar.tsx         → Main sidebar container (layout + state control)
│   │   └── sidebar-group.tsx   → Top section (user info, search, actions)
│   │   └── sidebar-header.tsx  → Grouped navigation (collapsible sections)
│   │   └── sidebar-item.tsx    → Individual navigation link (single item)
│   ├── pages/
│   │   └── dashboard/                 → Dashboard feature components
│   │       ├── index.tsx              → Feature entry point (data orchestration + composition)
│   │       ├── dashboard-header.tsx
│   │       ├── date-filter-tabs.tsx
│   │       ├── kpi-cards.tsx
│   │       ├── kpi-card.tsx
│   │       ├── revenue-forecast.tsx
│   │       ├── pipeline-summary.tsx
│   │       ├── activity-feed.tsx
│   │       ├── activity-entry.tsx
│   │       ├── tasks-panel.tsx
│   │       ├── task-item.tsx
│   │       ├── sparkline-chart.tsx
│   │       └── dashboard-skeleton.tsx → Loading state UI
│   │
│   └── icons/
│       ├── custom/         → Custom icons exported from Figma
│       │   ├── calender-icon.tsx
│       │   ├── contacts-icon.tsx
│       │   └── ...
│       ├── dashboard-icons.tsx
│       ├── sidebar-icons.tsx
│       └── icon-map.tsx    → Centralized mapping for all icons (custom + lucide)
│
├── lib/
│   ├── mock-api.ts         → Simulated API layer with latency
│   ├── mock-data.ts        → Static mock data matching design values
│   ├── toast.ts            → Toast trigger helpers
│   └── utils.ts
│
├── store/
│   ├── dashboard.ts        → Jotai atoms for dashboard state (period, data, loading)
│   └── index.ts
│
├── types/
│   └── dashboard.ts        → TypeScript interfaces for dashboard data
│
└── hooks/
    └── use-dashboard.ts    → Custom hook to manage period state and fetch dashboard data

## 🎨 Design System Notes

- All colors, typography, spacing, and shadows were implemented based on the Figma design system.

- In cases where certain colors were provided in the design without clear semantic naming (e.g., not mapped to explicit tokens such as "primary", "success", etc.), I extracted the exact values from Figma and mapped them to internal semantic tokens.

- These tokens were then used consistently across the application to maintain design consistency and avoid hardcoded values.

- No arbitrary or approximate colors were introduced; all values originate directly from the Figma design.

### Toast Management
Toast behavior is limited to a maximum of 3 visible items.
When a new toast is triggered, the oldest one is dismissed.
This follows the default behavior of the notification system to maintain UI clarity.