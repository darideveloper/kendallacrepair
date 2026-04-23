## Why

PageSpeed variability is still strongly affected by automatic startup animations near LCP content. We need a scoped motion optimization that improves initial render stability without changing UI, content, branding, or layout.

## What Changes

- Remove nonessential entrance animations from LCP-adjacent hero elements during initial load.
- Limit motion changes to the first 2-3 homepage sections, where startup metrics are most sensitive.
- Keep hover/focus transitions that are user-triggered and do not run automatically at startup.
- Strengthen reduced-motion behavior so animated utilities do not hide content.
- Preserve existing UI structure, copy, colors, typography families, metadata, translations, and routes.
- Verify results using multiple PageSpeed runs (median/trend), not a single run.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `performance`: Add scoped startup-motion requirements to protect LCP/FCP stability in the initial viewport and first 2-3 sections.
- `global-styles`: Add explicit reduced-motion requirements for shared animation utilities to keep content visible.

## Impact

- Affects animation class usage in hero and early sections plus global motion utility behavior.
- Does not introduce dependency, API, routing, metadata, UI, or content changes.
- Keeps visual design intent intact while reducing startup animation work.
