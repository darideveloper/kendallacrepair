# Tasks: Refactor Coverage Map Section for Quality

## Phase 1: Theme & Design Tokens
- [x] Add `tablet-lg` breakpoint (`900px`) to `@theme` in `src/styles/global.css`.
- [x] Add `glass-surface` and `glass-border` color tokens to `@theme` in `src/styles/global.css`.
- [x] **Validation**: Verify that Tailwind picks up the new breakpoint and glass utilities.

## Phase 2: Atomic Refinement
- [x] Export `IconName` type from `src/components/atoms/Icon.astro`.
- [x] Update `src/components/atoms/Badge.astro`:
  - [x] Add `variant?: 'status' | 'tag'` prop.
  - [x] Deprecate `showDot` but keep it for backward compatibility (map to `variant`).
- [x] **Validation**: Verify `Badge` still works in the `Hero` (status) and `Coverage` (tag).

## Phase 3: Type Safety & Component Logic
- [x] Update `src/constants/site.ts`:
  - [x] Import `IconName` and add type annotations to `COVERAGE_BADGES`.
- [x] Update `src/components/molecules/CoverageBadge.astro`:
  - [x] Use `IconName` for `icon` prop.
  - [x] Use `glass-surface` and `glass-border` Tailwind classes.
- [x] Update `src/components/organisms/Coverage.astro`:
  - [x] Replace `min-[900px]` with `tablet-lg` breakpoint.
  - [x] Remove `as any` from `COVERAGE_BADGES.map`.
  - [x] Add `aria-hidden="true"` or improve Google Map `iframe` a11y attributes.
- [x] **Validation**: Run `tsc` to ensure no type errors.

## Phase 4: Final Verification
- [x] Visual audit on desktop and mobile to ensure zero regression.
- [x] Verify HTML accessibility in browser devtools.
