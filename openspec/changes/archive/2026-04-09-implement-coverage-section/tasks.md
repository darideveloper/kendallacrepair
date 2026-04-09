# Tasks: Implement Coverage Map Section

## Phase 1: Global Styles and Constants
- [x] Add brand green gradient and utilities to `src/styles/global.css`.
- [x] Add `NEIGHBORHOODS`, `MAP_EMBED_URL`, and `COVERAGE_BADGES` to `src/constants/site.ts`.
- [x] **Validation**: Verify CSS build and presence of new constants in the project.

## Phase 2: Atomic Component Updates
- [x] Update `src/components/atoms/Badge.astro` to support `showDot` prop.
- [x] Update `src/components/atoms/Icon.astro` with `check-circle` and `dollar-sign`.
- [x] **Validation**: Verify that `Badge` can render without a dot and new icons render correctly.

## Phase 3: Molecules and Organisms
- [x] Create `src/components/molecules/CoverageBadge.astro`.
- [x] Create `src/components/organisms/Coverage.astro`.
- [x] **Validation**: Verify the responsive layout and data-mapping of the `Coverage` organism.

## Phase 4: Integration
- [x] Import and add `Coverage.astro` to `src/pages/index.astro`.
- [x] **Validation**: Perform a visual audit of the homepage and ensure the section is responsive on mobile.
