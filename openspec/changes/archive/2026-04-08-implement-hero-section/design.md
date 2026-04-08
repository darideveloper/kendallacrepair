# Design: Hero Section and Global Branding Implementation

## Strategy
Replicate the provided `ui-design/hero/design.html` design using the established Astro and Tailwind 4 stack, following an atomic design architecture.

## Architecture
- **Global CSS**: Extend `src/styles/global.css` with the specific animations and gradients from the design.
- **Atomic Design**:
    - **Atoms**: `Button.astro`, `Badge.astro`, `Input.astro`, `Textarea.astro`.
    - **Molecules**: `UrgencyBanner.astro`, `HeroForm.astro`, `TrustItem.astro`.
    - **Organisms**: `Header.astro`, `Hero.astro`.
- **Layout Management**: Update `src/layouts/Layout.astro` to include the global headers and urgency banners.
- **Interactivity**: The `HeroForm` and navigation toggles will use vanilla JS or Astro's script tag where simple, and React only if complexity increases.

## Styling
- **Tailwind 4**: Use the `@theme` directive to define brand-specific variables for gradients:
    - `--color-brand-orange-grad`: `linear-gradient(135deg, #f76707, #e8590c)`
    - `--color-brand-blue-grad`: `linear-gradient(135deg, #1a6faf, #2e86c1)`
- **Animations**:
    - `fadeInUp`: Used for hero content and form entrance.
    - `pulse`: For the "Live" dot indicator.
    - `blink`: For the urgency banner.

## Responsive Strategy
- **Breakpoints**: Standard Tailwind breakpoints (sm, md, lg, xl).
- **Mobile-First**: Primary development will be mobile-first, ensuring accessibility and performance on smaller devices.
- **Mobile-Only Features**:
    - A fixed bottom call bar will be implemented using a fixed position and visible only on small screens.
    - Floating action buttons for WhatsApp and Chat will be placed at the bottom corners.

## Asset Handling
- **Image Optimization**: The hero background image `ui-design/foto-trane-single.jpg` should be optimized and converted to WebP for production.
- **Logo Integration**: Re-use existing SVG logos from `public/images/logos/`.
