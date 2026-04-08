# Proposal: Apply Global Project Branding

## Problem
The project currently lacks a consistent global branding setup. Colors, typography, and logo assets are available in the `ui-design/` folder but have not been integrated into the Astro/Tailwind configuration.

## Proposed Change
This proposal implements a centralized branding configuration:
1.  **Colors**: Define the brand's primary and secondary colors as CSS variables in `src/styles/global.css` and map them to Tailwind's theme.
2.  **Typography**: Integrate `Plus Jakarta Sans` and `DM Sans` fonts using Fontsource variable packages.
3.  **Assets**: Organize the logo SVGs into the project's `public/images/` directory and update the site favicon.
4.  **Design System Page**: Create a `/design-system` page to visualize all branding elements and serve as a living document for future components.

## Goals
- Establish a single source of truth for brand colors.
- Enable high-performance typography via local font hosting (Fontsource).
- Ensure all logo variants are accessible to the application.
- Align with Tailwind 4.0 configuration patterns.
- Provide a visual reference for the branding setup via a dedicated design system page.

## Non-Goals
- Creation of UI components (atoms, molecules, etc.).
- Modification of existing page content beyond the global layout.
- Implementation of specific sections (Hero, Services, etc.).
