# Personal Portfolio — Dewapichet Sittipon

A single-page portfolio website built with React 19, TypeScript, Vite, and Tailwind CSS. Supports bilingual content (English / Thai) and is deployed to Firebase Hosting.

## Tech Stack

- **React 19** — UI framework
- **TypeScript** — type safety
- **Vite** — build tool with HMR
- **Tailwind CSS** — utility-first styling with custom design tokens
- **Firebase Hosting** — production deployment

## Features

- Bilingual toggle (EN / TH) powered by per-component translation objects
- Scroll-spy navigation that highlights the active section
- Glass-card UI with a dark color palette and cyan accent (`#7bd0ff`)
- Sections: Hero, Skills, Experience, Education, Footer
- Fully responsive layout

## Getting Started

```bash
npm install
npm run dev       # Start dev server with HMR → http://localhost:5173
```

## Available Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Type-check + production build → dist/
npm run lint      # ESLint
npm run preview   # Serve the dist/ build locally
npm run deploy    # Build + deploy to Firebase Hosting
```

## Project Structure

```
src/
├── components/       # Presentational section components
│   ├── Navbar.tsx    # Navigation with scroll-spy
│   ├── Hero.tsx      # Landing / intro section
│   ├── Skills.tsx    # Skills & technologies
│   ├── Experience.tsx
│   ├── Education.tsx
│   └── Footer.tsx
├── data/             # Static content data
├── i18n/             # Translation helpers
├── pages/            # Page-level wrappers
├── types/            # Shared TypeScript types
├── App.tsx           # Root — owns language state ("EN" | "TH")
└── index.css         # Global styles & reusable CSS classes
```

## Design System

Custom tokens are defined in `tailwind.config.js`:

| Token | Description |
|---|---|
| `bg-surface` | Primary page background |
| `bg-surface-container` | Card / section background |
| `text-on-surface` | Primary text |
| `text-secondary` | Muted / secondary text |
| `px-margin-x` | 32px horizontal margin |
| `max-w-container-max` | 1200px max content width |
| `gap-gutter` | 24px column gutter |

Reusable CSS classes (defined in `src/index.css`):
- `.glass-card` — translucent dark backdrop-blur card
- `.skill-pill` — dark pill badge with cyan border on hover

**Fonts** (Google Fonts): Hanken Grotesk · Inter · JetBrains Mono

## Deployment

```bash
npm run deploy    # Equivalent to: npm run build && firebase deploy --only hosting
```

Firebase is configured in `firebase.json`. All routes rewrite to `/index.html` (SPA mode). The linked project is defined in `.firebaserc`.
