# Implement Footer Section

## Summary
Implement the global footer section as designed in `ui-design/footer/design.html`. This includes creating a new `Footer.astro` component, defining new color variables in the global CSS, and integrating the footer into the main layout so it appears on all pages.

## Motivation
The footer provides essential secondary navigation, critical business contact information, and SEO-relevant content (service areas) at the bottom of the page. It completes the page layout alongside the Header.

## Proposed Changes
1. **Global Styles**: Add footer-specific color variables to the Tailwind CSS `@theme` configuration.
2. **UI Components**: 
   - Create `src/components/organisms/Footer.astro` to replicate the design using a responsive CSS grid, reusing existing site data (`FEATURED_SERVICES`, `NEIGHBORHOODS`, `SITE`).
   - Modify `src/layouts/Layout.astro` to render the new Footer component.
