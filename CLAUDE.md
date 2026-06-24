# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Type-check + production build → dist/
npm run lint      # ESLint
npm run preview   # Serve the dist/ build locally

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

## Architecture

Single-page portfolio site: React 19 + TypeScript + Vite + Tailwind CSS, deployed to Firebase Hosting.

**Language toggle** (`"EN" | "TH"`) is the only shared state. It lives in `App.tsx` and flows down as a `language` prop to every section component. Each component owns its own `translations` object keyed by `"EN" | "TH"`.

**Section components** (`src/components/`): `Navbar`, `Hero`, `Skills`, `Experience`, `Education`, `Footer`. All are pure presentational components; no routing, no data fetching.

**Scroll-spy** is implemented manually in `Navbar.tsx` via a `scroll` event listener that tracks which section's `id` is within the viewport threshold.

## Design System

All custom tokens are defined in `tailwind.config.js` and used directly as Tailwind utility classes.

- **Colors**: `bg-surface`, `text-on-surface`, `text-secondary` (cyan accent `#7bd0ff`), `bg-surface-container`, etc.
- **Spacing**: `px-margin-x` (32px), `max-w-container-max` (1200px), `gap-gutter` (24px), `stack-sm/md/lg`.
- **Reusable CSS classes** (defined in `src/index.css`):
  - `.glass-card` — translucent dark backdrop-blur card
  - `.skill-pill` — dark pill badge with cyan border on hover
- **Fonts** (loaded via Google Fonts in `index.html`): Hanken Grotesk (headings), Inter (body), JetBrains Mono (labels/tags).

## Deployment

The `dist/` directory is published to Firebase Hosting (`firebase.json` points `public: "dist"`). All routes rewrite to `/index.html` (SPA mode). The `.firebaserc` file contains the linked Firebase project ID.
