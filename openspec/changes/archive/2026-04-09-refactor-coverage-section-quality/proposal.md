# Proposal: Refactor Coverage Map Section for Type Safety and DRY

## Summary
Improve the structural integrity, accessibility, and type safety of the newly implemented "Coverage Map" section. This refactor addresses `any` types, accessibility gaps, and introduces consistent Tailwind 4.0 design tokens for glassmorphism and responsive breakpoints.

## Problem
The current implementation of the "Coverage Map" section has several minor quality issues:
- **Type Safety**: `any` types in `CoverageBadge` and `Coverage` components undermine TypeScript's benefits.
- **Accessibility**: Missing `aria-hidden` on decorative map elements and lack of clear heading hierarchy.
- **Architecture**: A hardcoded `900px` breakpoint and manual gradient mapping in components create redundancy (DRY violation).
- **Design Tokens**: Glassmorphism values are hardcoded as opaque values instead of leveraging Tailwind 4.0's dynamic theme capabilities.

## Proposed Solution
Refactor the coverage section using a "Brand First" architectural approach:
1.  **Tailwind 4.0 Theme**: Define a custom `tablet-lg` breakpoint and "glass" color tokens in `global.css`.
2.  **Type-Safe Components**: Export a `type IconName` from `Icon.astro` and use it in molecules/organisms to eliminate `any`.
3.  **Atomic Refinement**: Update `Badge.astro` to use a `variant` prop for clearer "Tag" vs "Status" usage.
4.  **A11y Pass**: Add necessary ARIA attributes to the Google Maps `iframe`.
5.  **Centralized Logic**: Move the map URL logic to `site.ts` with a more flexible structure.

## Constraints
- **Zero Visual Change**: The user-facing UI must remain exactly the same as the current design.
- **Backward Compatibility**: Any changes to `Icon.astro` or `Badge.astro` must not break other components (e.g., `Hero.astro`).
