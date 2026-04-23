## Why

The previous icon typing fix made `astro check` pass but broke `astro build` because exporting a type directly from `Icon.astro` frontmatter is not build-compatible in this project setup. We need a build-safe icon type contract that works for both checks and production builds.

## What Changes

- Introduce a shared TypeScript icon contract file (`IconName` union) outside `.astro` frontmatter.
- Update `Icon.astro` and typed consumers to import `IconName` from the shared `.ts` contract.
- Keep icon usage aligned by adding the missing `alert-triangle` key to the type contract and icon registry.
- Re-run `npx astro check` and `npm run build` to confirm both toolchains pass.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `ui-components`: update the centralized icon contract requirement so valid icon names are exported from a shared TypeScript module consumed by `Icon.astro` and its typed consumers.

## Impact

- Affects icon typing contract and imports in `Icon.astro`, related UI consumers, and shared constants.
- No dependency, layout, route, translation, or branding changes.
- No content/UI behavior changes expected beyond restoring build and type-check stability.
