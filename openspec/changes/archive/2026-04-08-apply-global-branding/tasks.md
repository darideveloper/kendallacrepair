# Tasks: Apply Global Project Branding

- [x] **Initialize Branding Setup**
  - [x] Initialize change-set `apply-global-branding` <!-- id: 0 -->

- [x] **Configure Typography**
  - [x] Install Fontsource variable packages: `@fontsource-variable/plus-jakarta-sans`, `@fontsource-variable/dm-sans` <!-- id: 1 -->
  - [x] Import variable fonts in `src/styles/global.css` <!-- id: 2 -->
  - [x] Update `src/layouts/Layout.astro` to ensure `global.css` is correctly applied (already done, but verify) <!-- id: 3 -->

- [x] **Configure Colors and Tailwind Theme**
  - [x] Define brand colors and fonts in `src/styles/global.css` using the Tailwind 4.0 `@theme` block <!-- id: 4 -->
  - [x] Verify Tailwind utilities are working with the new variables <!-- id: 5 -->

- [x] **Organize Assets**
  - [x] Create `public/images/logos/` directory <!-- id: 6 -->
  - [x] Copy all logo SVG variants from `ui-design/` to `public/images/logos/` <!-- id: 7 -->
  - [x] Copy `ui-design/logo-icon-512.svg` to `public/favicon.svg` (overwriting existing) <!-- id: 8 -->

- [x] **Create Design System Page**
  - [x] Create `src/pages/design-system.astro` with `import.meta.env.PROD` guard <!-- id: 11 -->
  - [x] Implement sections for Colors, Typography, and Logos in the design system page <!-- id: 12 -->

- [x] **Validation**
  - [x] Verify build completes without errors <!-- id: 9 -->
  - [x] Verify that `Plus Jakarta Sans Variable` and `DM Sans Variable` are active in the browser <!-- id: 10 -->
  - [x] Verify the `/design-system` page renders all branding elements correctly <!-- id: 13 -->
