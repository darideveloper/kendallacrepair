## Context

The Astro catch-all route currently imports `Home`, `ThankYou`, and `NotFound` in the same page module. Even when a normal page renders `Home` or `ThankYou`, the static `NotFound` import can cause Astro/Vite to emit and reference `NotFound.*.css` as part of the initial page output.

The reported issue is performance-only: `/_astro/NotFound.*.css` appears as a render-blocking request that can delay FCP/LCP. The implementation must preserve existing UI, layout, text, metadata behavior, and localized routing, including `/404` and `/es/404`.

## Goals / Non-Goals

**Goals:**

- Keep 404-only CSS out of the initial critical rendering path for non-404 pages.
- Preserve the current 404 user experience and localized route behavior for both `/404` and `/es/404`.
- Keep the change limited to routing/build-output behavior.
- Verify production build output for English and Spanish routes, not only source code structure.

**Non-Goals:**

- No visual design changes.
- No content, copy, translation, or metadata changes.
- No dependency changes.
- No broader performance refactor beyond the `NotFound.*.css` critical-path issue.

## Decisions

1. Decouple 404 rendering from the normal catch-all page path.

   Rationale: Removing the static `NotFound` dependency from the route that renders normal pages prevents its component-scoped CSS from being pulled into non-404 generated HTML.

   Alternative considered: Keep the current catch-all component map and rely on CSS minification or smaller styles. This would reduce transfer size at best, but would not remove the render-blocking request from the critical path.

2. Preserve 404 behavior through dedicated 404 route generation.

   Rationale: Dedicated 404 route files can render the existing `NotFound` component while keeping its styles attached only to 404 pages.

   Alternative considered: Inline the 404 markup into the route. This risks duplicating UI/content and makes future maintenance harder.

3. Validate generated HTML and build artifacts after implementation.

   Rationale: The bug appears in production output, so verification must inspect the built pages for `NotFound.*.css` references.

   Alternative considered: Rely only on Lighthouse after deployment. That is useful as final confirmation, but slower and less precise during implementation.

## Risks / Trade-offs

- Route behavior regression -> Mitigate by checking generated paths for `/`, `/es`, `/thank-you`, `/es/gracias`, `/404`, and `/es/404`.
- Astro fallback semantics differ from static 404 files -> Mitigate by preserving the existing `src/pages/404.astro` entry and adding only the minimum localized route support needed.
- CSS chunk names are hashed -> Mitigate by searching for `NotFound` and `.css` references rather than depending on a specific filename.

## Migration Plan

1. Adjust routing so normal page rendering no longer statically imports `NotFound.astro`.
2. Keep dedicated 404 route files responsible for rendering the existing `NotFound` component.
3. Run the production build.
4. Inspect generated non-404 English and Spanish HTML for absence of `NotFound.*.css`.
5. Inspect generated English and Spanish 404 HTML for continued 404 rendering.

Rollback is to restore the previous catch-all route imports and remove any dedicated localized 404 route file added by the implementation.

## Open Questions

- None.
