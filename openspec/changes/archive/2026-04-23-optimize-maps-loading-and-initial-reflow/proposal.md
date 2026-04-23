## Why

PageSpeed is still reporting startup performance regressions: forced reflow during initial load, render-blocking stylesheet impact on LCP, and large unused JavaScript from Google Maps resources that are not needed for first paint. This change is needed now to move non-critical work out of the critical path while preserving the current visual design and content.

## What Changes

- Defer Google Maps network work (including heavy Maps utility JavaScript) until the coverage map is actually needed, instead of allowing it to compete with initial render work.
- Remove eager Google Maps connection hints from initial navigation when map loading is deferred, so startup connection budget is reserved for first-paint resources.
- Keep the map container footprint and section layout stable before map activation to avoid CLS and preserve current UI composition.
- Reduce render-blocking CSS pressure by keeping only first-viewport-critical styling in the startup path and deferring non-critical style payloads (especially motion/decorative rules used later in the page).
- Ensure startup scripts avoid patterns that can trigger layout thrashing and forced synchronous reflow during initial navigation.
- Mitigate third-party cache TTL constraints by avoiding early map script downloads when the map section has not been requested yet.
- Add explicit verification gates using repeated PageSpeed runs (median/trend) so improvements are measured reliably and not based on a single variable run.
- Preserve all existing UI structure, copy, localization, metadata, routes, and brand style intent.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `performance`: Add requirements for deferred third-party map loading, preconnect hygiene, startup reflow safety, and critical CSS path minimization without visual/content changes.

## Impact

- Affected code paths are expected in `src/components/organisms/Coverage.astro`, `src/layouts/Layout.astro`, and global style organization under `src/styles/`.
- No public API changes are expected.
- No new product/content scope is introduced; this is a performance-focused refactor.
- No intentional UI redesign, copy edits, localization changes, or route behavior changes are included.
