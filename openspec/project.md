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
- **Global Styles**: Base styles and Tailwind directives are managed in `src/styles/global.css`.

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
