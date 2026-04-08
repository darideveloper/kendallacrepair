# Design: Global Branding Setup

## Architecture Overview
This branding setup leverages Tailwind 4.0's native CSS variable support and Astro's layout system.

### Colors
Colors will be defined in `src/styles/global.css` using the `@theme` directive (Tailwind 4.0) and standard CSS variables. This ensures availability in both Tailwind utility classes and custom CSS.

```css
@theme {
  --color-brand-navy: #0C2340;
  --color-brand-blue: #1A6FAF;
  --color-brand-sky: #5DADE2;
  --color-brand-orange: #F76707;
  --color-brand-red: #E03131;

  --font-heading: "Plus Jakarta Sans Variable", sans-serif;
  --font-body: "DM Sans Variable", sans-serif;
}
```

### Typography
We will use Fontsource variable font packages to minimize bundle size while providing full weight support (100-1000).
- `Plus Jakarta Sans`: Used for headings and logotype.
- `DM Sans`: Used for body text.

Fonts will be imported in `src/layouts/Layout.astro` or `src/styles/global.css`. Importing in `global.css` is preferred for consistency with Tailwind's entry point.

### Assets
Logo assets from `ui-design/` will be moved to `public/images/logos/` for consistent referencing. The `logo-icon-512.svg` will be used as the source for the `favicon.svg`.

### Design System Page
A new Astro page `src/pages/design-system.astro` will be created. This page will use the `Layout.astro` and include sections for:
- **Color Palette**: Displaying the brand colors with their hex codes and Tailwind class names.
- **Typography**: Showcasing `Plus Jakarta Sans` (headings) and `DM Sans` (body) in various weights and sizes.
- **Logo Variants**: Rendering all SVG logos (horizontal, stacked, icon) in both color and white versions (on appropriate backgrounds).
- **Future Components**: A placeholder section for atoms, molecules, and organisms as they are developed.

**Production Guard**: To prevent the design system from being accessible in production, the following logic will be included in the frontmatter:
```javascript
if (import.meta.env.PROD) {
  return Astro.redirect('/404');
}
```

## Alternatives Considered
- **External CDN for Fonts**: Rejected in favor of Fontsource for better performance (local hosting) and offline development support.
- **Tailwind 3.x Config File**: Not applicable as the project is already on Tailwind 4.0 (Vite plugin).
