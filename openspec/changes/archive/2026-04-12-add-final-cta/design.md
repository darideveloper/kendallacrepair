# Design: Final CTA Section

## Overview
The "Final CTA" section is an organism that serves as the last conversion point on the landing page. It features a dark, image-overlay background with centered content.

## Architecture

### Components
- **FinalCTA (Organism)**: The main container that handles the layout, background image, and overlay.
  - **Heading (H2)**: Large, high-impact text using `clamp()` for responsive font sizing.
  - **Phone Link (A)**: Even larger, prominent phone link for direct calling.
  - **Value Proposition (P)**: A short summary of the service highlights.
  - **Buttons (Molecules/Atoms)**: 
    - `Button` (Primary): Llama Ahora (Phone Link).
    - `Button` (Secondary): Solicita Cotización (Anchor link to `#formulario`).

### Imagery
- **Source**: `src/assets/images/hero/foto-trane-single.jpg`.
- **Optimization**: Use `astro:assets` `<Image />` component with `opacity-40` and a dark overlay (`bg-hero-overlay`) to ensure text readability.

### Typography
- **Heading**: `text-[clamp(28px,4vw,42px)]`
- **Phone Link**: `text-[clamp(32px,5vw,56px)]`
- **Font Family**: `font-heading` (Plus Jakarta Sans).

### Interactivity
- All call-to-action buttons must link to centralized data in `src/constants/site.ts`.
- The "Solicita Cotización" button must link to the `#formulario` ID located in the `HeroForm` component.

## Trade-offs
- **Reusability vs. Custom CSS**: Instead of creating complex new CSS rules, we'll leverage Tailwind v4's arbitrary value support (e.g., `text-[clamp(...)]`) and existing utility classes to keep the bundle lean and the implementation fast.
