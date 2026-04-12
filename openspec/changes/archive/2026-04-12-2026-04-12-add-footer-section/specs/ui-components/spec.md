## ADDED Requirements

### Requirement: Footer component implementation
A new organism component MUST be created to serve as the global footer for the website.

#### Scenario: Create Footer component
Create `src/components/organisms/Footer.astro` to replicate the footer design.
- **Data Source**: Import `SITE`, `FEATURED_SERVICES`, and `NEIGHBORHOODS` from `../../constants/site.ts` to dynamically render contact information, service links, and service areas.
- **Structure**:
  - Main container with a dark background (`bg-footer-bg`) and text color (`text-footer-text`).
  - An inner container with `max-w-[1200px] mx-auto px-6`.
  - A 3-column CSS grid (`grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-8 md:gap-12`) for the main content.
    - Column 1: Custom SVG Logo (using `#ffffff` and `#5DADE2` for text), business description, and clickable phone number link.
    - Column 2: "Servicios" heading mapping over a sliced version of `FEATURED_SERVICES` (up to 4 items) to create links.
    - Column 3: "Areas de Servicio" heading mapping over `NEIGHBORHOODS`. Create bullet-separated pairs or use a simple grid/flex wrap.
  - A bottom bar (`border-t border-footer-border mt-8 pt-6 pb-0 flex flex-col md:flex-row justify-between text-[13px]`) with copyright and legal links.
- **Styling**: Ensure links have hover effects (`hover:text-brand-sky transition-colors`). Use Tailwind v4 syntax.

## ADDED Requirements

### Requirement: Footer component integration
The Layout component MUST be updated to include the new footer globally.

#### Scenario: Integrate Footer in Layout
Update `src/layouts/Layout.astro` to import and render the `Footer` component.
- Import `Footer` from `../components/organisms/Footer.astro`.
- Place `<Footer />` immediately after the closing `</main>` tag, before the global floating elements.
