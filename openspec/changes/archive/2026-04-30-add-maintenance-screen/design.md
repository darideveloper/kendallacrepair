# Design: Maintenance Screen Page

## Architecture Overview
The application will provide a dedicated `/maintenance` page. All logic concerning when to display this page (e.g., domain validation, maintenance mode toggles, redirects) will be handled at the server/infrastructure level. The frontend's sole responsibility is to render the visual UI for the maintenance screen without any global navigation elements.

## Page Design: `src/pages/maintenance.astro`
- **Location:** `src/pages/maintenance.astro`
- **Layout:** It will use a stripped-down `BlankLayout.astro` to ensure no global components (Header, Footer, floating buttons) are loaded, providing a true full-screen experience.
- **Structure:**
  - Full viewport height (`min-h-screen`), flex-centered layout.
  - Background image with dark overlay (reusing the `hero-bg` pattern from `Hero.astro`).
  - Centered content box containing:
    - `<Badge>`: "Maintenance / Mantenimiento"
    - `<h1>`: "On Maintenance"
    - `<p>` or `<span class="text-sm">`: "Sitio en mantenimiento" (in Spanish, smaller font).


## Styling
- The page will utilize standard Tailwind utility classes (`min-h-screen`, `w-full`, `flex`, `items-center`, `justify-center`, `relative`) to achieve the full-screen layout.
- We will reuse the background image pattern from `Hero.astro` to maintain brand consistency.
