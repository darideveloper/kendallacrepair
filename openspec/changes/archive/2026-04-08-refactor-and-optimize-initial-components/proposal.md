# Change: Refactor and Optimize Initial Components

## Why
1. **Critical Failures**: `clsx` is imported but missing from `package.json`, causing build failures.
2. **Broken Assets**: Hero image reference is pointing to a non-public directory.
3. **Missing Functionality**: The `/thank-you` page is missing for form redirection, and the mobile menu is not functional.
4. **DRY Violations**: Redundant logic in `Input`/`Textarea` and inlined SVGs throughout the codebase.
5. **Optimization**: Hero image uses standard `<img>` instead of Astro's `<Image />`, and dev dependencies are in the wrong section.

## What Changes
- **Dependency Fix**: Add `clsx` and move `astro-show-tailwindcss-breakpoint` to `devDependencies`.
- **Asset Migration**: Move images from `ui-design/` to `src/assets/images/` for Astro's automatic optimization.
- **Component Refactor**: 
  - Create `FormField.astro` as a shared wrapper for form elements.
  - Implement a basic `Icon.astro` component for shared SVGs.
  - Optimize `Hero.astro` using Astro's native `<Image />` component with imported assets.
- **New Page**: Add `src/pages/thank-you.astro`.
- **Mobile Menu**: Add toggle script to `Header.astro`.
- **Global Config**: Centralize phone numbers and site metadata into `src/constants/site.ts`.
- **Project Guidelines**: Update `openspec/project.md` with mandatory DRY, `clsx`, and image optimization requirements.


## Impact
- Affected specs: `ui-components`, `hero-section`, `assets`, `design-system`, `global-branding-updates`.
- Affected code: `src/components/`, `src/layouts/`, `src/pages/`, `package.json`, `openspec/project.md`.
