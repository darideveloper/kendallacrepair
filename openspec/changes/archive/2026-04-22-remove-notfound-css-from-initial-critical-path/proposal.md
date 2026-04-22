## Why

The initial page load currently reports `/_astro/NotFound.*.css` as a render-blocking request even when rendering normal pages. This can keep 404-only styles on the critical path and delay FCP/LCP without providing value to the initial viewport.

## What Changes

- Isolate the NotFound page styles from normal page rendering so they are not loaded by the homepage or thank-you page.
- Preserve the existing 404 page behavior and localized route support, including `/404` and `/es/404`.
- Keep all visible UI, layout, copy, and content unchanged.
- Add verification that generated non-404 English and Spanish pages do not reference `NotFound.*.css`.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `performance`: Require route-specific CSS for non-rendered pages to stay out of the initial critical rendering path.

## Impact

- Affects Astro routing and build output for page-level CSS chunk inclusion.
- Expected files include the catch-all route and/or dedicated 404 route files.
- No API, dependency, design system, copy, metadata, or visual content changes are expected.
