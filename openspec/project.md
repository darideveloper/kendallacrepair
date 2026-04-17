# Project Context

## Purpose
Kendall AC Repair is a professional service website for an HVAC company based in Kendall. The project's goal is to provide a high-performance, SEO-optimized platform for customer acquisition, featuring service details, appointment booking, and local service area information.

## Tech Stack
- **Framework**: Astro (v6+)
- **UI Library**: React (v19+)
- **Styling**: Tailwind CSS (v4+) via Vite plugin
- **Type Safety**: TypeScript (Strict mode)
- **Integrations**: 
  - `@astrojs/sitemap` for SEO
  - `@astrojs/react` for interactive components
  - `astro-show-tailwindcss-breakpoint` for development aids

## Project Conventions

### Code Style
- **Components**: Functional components with TypeScript.
- **Styling**: Utility-first CSS using Tailwind 4.0. Avoid custom CSS unless necessary for complex animations or third-party integrations.
- **Naming**: 
  - PascalCase for components (`Navbar.astro`, `Button.tsx`).
  - kebab-case for assets and non-component files.
- **Astro/React**: Use Astro for static layouts and content; use React for client-side interactivity (`client:load`, `client:visible`).

### Architecture Patterns
- **Atomic Design**: Components are organized into `atoms`, `molecules`, and `organisms` within `src/components/`.
- **Layouts**: Centralized layouts in `src/layouts/` to ensure consistent metadata and styling across pages.
- **Localized Routing**: Single catch-all router (`src/pages/[...path].astro`) driven by `src/lib/i18n/routes.ts` for clean, SEO-friendly localized URLs.
- **Global Styles**: Base styles and Tailwind directives are managed in `src/styles/global.css`.

## Mandatory Development Standards (DRY & Performance)

### 1. DRY (Don't Repeat Yourself)
- **Shared Logic**: If a visual or functional pattern is repeated, it MUST be refactored into a reusable atom or molecule.
- **Centralized Constants**: Site-wide configuration (phone numbers, addresses, social links) MUST be stored in `src/constants/site.ts`.
- **Loop Rendering**: Lists of elements MUST be rendered via array mapping to maintain a single source of truth.

### 2. Styling & Dynamic Classes
- **clsx**: The `clsx` library MUST be used for all conditional styling or variant-based class management. Avoid template literals or Astro's `class:list` for complex logic.

### 3. Image Optimization
- **Assets Directory**: All project images (JPG, PNG, WebP) MUST be stored in `src/assets/images/`.
- **Astro Image Component**: All optimized images MUST be rendered using Astro's native `<Image />` component. SVGs and purely static icons can remain in `public/`.

### Testing Strategy
[To be defined - Currently no testing framework detected in package.json]

### Git Workflow
- **Commit Pattern**: Follow Conventional Commits (e.g., `feat:`, `fix:`, `chore:`, `docs:`).
- **Branching**: Use feature branches and pull requests for any significant changes.

## Domain Context
- **Service Area**: Kendall, FL and surrounding areas.
- **Niche**: HVAC Repair, Maintenance, and Installation.
- **Business Goal**: High conversion rate for service calls and inquiries.

## Important Constraints
- **Performance**: High Core Web Vitals scores are critical for SEO.
- **Accessibility**: Ensure WCAG compliance for service-based accessibility.

## External Dependencies
- **Domain**: kendallacrepair.com
- **Sitemap**: /sitemap-index.xml
