# Resume Project Design Details

This document summarizes the UI structure, core components, typography, and color tokens of the **Resume** project (ID: `projects/12381642581151532084`).

---

## 1. UI Structure

The Resume project is designed as a single-page modern developer portfolio with a top navigation bar and multiple scroll-spy-enabled sections.

- **Navigation Bar (`TopNavBar`)**: Fixed at the top of the viewport. Features a glassmorphic background with a blur filter, local language toggles (EN/TH), and links linking to the page sections: Home, Skills, Experience, and Education.
- **Main Layout**: Uses a centered layout limited to a maximum width of `1200px` (`max-w-container-max`), with responsive horizontal margins (`px-margin-x`).
  - **Hero Section (`#home`)**: 
    - A 12-column grid layout.
    - Left side (6 columns on large screens): Availability status pill, main name (`Apichet Sittipon`) as `display-lg`, subtitle (`Full Stack Developer`) as `headline-md`, bio paragraph, "Download CV" action button, and a visual tech stack list (icons for React, .NET, PostgreSQL).
    - Right side (4 columns on large screens, centered): A professional photo container using glassmorphic border styling with rotating background accent shapes.
  - **Technical Skills Section (`#skills`)**:
    - A 3-column grid displaying skills grouped into category cards:
      1. **Frontend**: Vue.js, Nuxt.js, React.js, Next.js, Flutter/Dart, HTML/CSS, Tailwind CSS.
      2. **Backend**: .NET Core API, C#, Node.js, Express.js, PostgreSQL, MySQL, Firebase.
      3. **Tools**: Git, Docker, Azure.
  - **Professional Experience Section (`#experience`)**:
    - Vertical timeline layout with a vertical track indicator.
    - Glassmorphic experience cards containing job title, company name, dates, summary, and bulleted responsibility lists marked with checkmark icons.
    - Featured companies: **PTTDigital** (Middle Developer, 2025–Present), **Code (Hard)** (Middle Developer, 2022–2025), and **Softsquare Group** (Junior Developer, 2022).
  - **Education Section (`#education`)**:
    - A 2-column grid displaying education credentials.
    - Features card layout with school logos (University of Phayao, Thepnaree School), degree details, and GPA highlights.
- **Footer**:
  - Two-column horizontal layout containing copyright notice (`Apichet.dev`) and contact links (Email, Phone, LinkedIn) with icon indicators.

---

## 2. Core Components

- **Glassmorphic Cards (`glass-card`)**: 
  - Backdrop blur filter (`blur(12px)`) combined with a dark translucent background (`rgba(30, 41, 59, 0.4)`) and a subtle white border (`rgba(255, 255, 255, 0.08)`).
- **Skill Pills (`skill-pill`)**: 
  - Standard pill shapes for skills with a dark background (`#122131`), a thin cyan border, and hover state transitions (border shifts to active blue accent `#7bd0ff` and background becomes semi-transparent).
- **Interactive Experience Cards**:
  - Include hover states that transition the border outline to the active accent color (`#7bd0ff`).
- **Main Action Button**:
  - High-contrast button using the secondary accent color (`#7bd0ff`) and dark text, with an scale-up hover micro-animation (`hover:scale-105`).

---

## 3. Typography

The design system uses three main Google Fonts:
1. **Hanken Grotesk** (Headings & Titles)
2. **Inter** (Body text & secondary content)
3. **JetBrains Mono** (Technical tags, labels & language indicators)

### Typography Scale & Details:

| Token | Font Family | Size | Line Height | Weight | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **display-lg** | Hanken Grotesk | `64px` | `72px` | `800` | `-0.02em` |
| **headline-lg** | Hanken Grotesk | `48px` | `56px` | `700` | `-0.01em` |
| **headline-lg-mobile** | Hanken Grotesk | `36px` | `44px` | `700` | — |
| **headline-md** | Hanken Grotesk | `32px` | `40px` | `600` | — |
| **headline-sm** | Hanken Grotesk | `24px` | `32px` | `600` | — |
| **body-lg** | Inter | `18px` | `28px` | `400` | — |
| **body-md** | Inter | `16px` | `24px` | `400` | — |
| **label-md** | JetBrains Mono | `14px` | `20px` | `500` | `0.05em` |

---

## 4. Color Tokens

The project utilizes a dark, navy-charcoal corporate palette designed to reduce eye strain and showcase technical credentials cleanly.

### Custom Palette Tokens:

- **Background & Surfaces**:
  - `background` / `surface` / `surface-dim`: `#051424` (Deep Midnight Blue)
  - `surface-bright`: `#2c3a4c` (Slate Gray-Blue)
  - `surface-container-lowest`: `#010f1f`
  - `surface-container-low`: `#0d1c2d`
  - `surface-container`: `#122131`
  - `surface-container-high`: `#1c2b3c`
  - `surface-container-highest`: `#273647`
- **Branding & Accent Colors**:
  - `primary`: `#bec6e0` (Light Lavender-Gray)
  - `secondary` (Accent): `#7bd0ff` (Vibrant Sky Blue)
  - `tertiary`: `#bcc7de` (Cool Slate-Gray)
  - `outline`: `#909097` (Cool Gray)
  - `outline-variant`: `#45464d` (Dark Gray border)
- **Text & Foreground**:
  - `on-background` / `on-surface`: `#d4e4fa` (Soft light blue-gray)
  - `on-surface-variant`: `#c6c6cd` (Muted gray)
  - `on-primary`: `#283044` (Dark Navy)
  - `on-secondary`: `#00354a` (Dark Teal-Blue)
- **Status Colors**:
  - `error`: `#ffb4ab` (Light Salmon-Red)
  - `error-container`: `#93000a` (Deep Crimson)

---

## 5. Spacing & Borders

- **Container Max-Width**: `1200px` (`max-w-container-max`)
- **Gutter Width**: `24px`
- **Page Margin (X)**: `32px`
- **Vertical Rhythm (Stacking)**:
  - Small gaps (`stack-sm`): `8px`
  - Medium gaps (`stack-md`): `16px`
  - Large gaps (`stack-lg`): `48px`
- **Border Radii**:
  - Standard (`DEFAULT`): `0.25rem` (4px)
  - Large (`lg`): `0.5rem` (8px)
  - Extra Large (`xl`): `0.75rem` (12px)
  - Full (`full`): `9999px` (pills, badges, etc.)
