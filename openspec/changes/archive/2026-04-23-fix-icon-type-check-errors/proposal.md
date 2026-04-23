## Why

`npx astro check` currently fails with type errors tied to icon typing. The shared `IconName` type is referenced from multiple files but is not exported from `Icon.astro`, and at least one page uses an icon name not present in the supported icon registry.

## What Changes

- Export a shared `IconName` type from the icon atom contract so all consumers can import it safely.
- Align icon usage in pages/components with the supported icon registry.
- Add the missing icon key used by the 404 page (or update usage to an existing key) so typed icon usage is consistent.
- Verify type-checking and build both pass after the fix, with no visual or content changes.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `ui-components`: strengthen the centralized icon atom contract so icon names used across components and pages are type-safe and synchronized with the icon registry.

## Impact

- Affects `src/components/atoms/Icon.astro` and consumers importing `IconName` (`AccordionItem`, `CoverageBadge`, `site.ts`, and `NotFound` page).
- No dependency changes.
- No route, content, layout, translation, or branding changes expected.
