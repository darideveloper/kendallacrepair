## 1. Routing Isolation

- [x] 1.1 Review the current catch-all route and confirm which generated paths require normal page rendering versus 404 rendering.
- [x] 1.2 Remove the static `NotFound.astro` dependency from the normal page rendering path without changing visible UI or content.
- [x] 1.3 Preserve dedicated 404 rendering through existing or minimal route files.
- [x] 1.4 Preserve localized 404 rendering for `/es/404`.

## 2. Build Verification

- [x] 2.1 Run the production build.
- [x] 2.2 Inspect generated English and Spanish homepage HTML and confirm neither page references `NotFound.*.css`.
- [x] 2.3 Inspect generated English and Spanish thank-you page HTML and confirm neither page references `NotFound.*.css`.
- [x] 2.4 Inspect generated English and Spanish 404 HTML and confirm the existing 404 page still renders for both locales.

## 3. Regression Checks

- [x] 3.1 Confirm no copy, translation, layout, metadata, or design-system files were changed unless required for routing.
- [x] 3.2 Run relevant validation commands already used by the project.
- [x] 3.3 Record before/after evidence for the removed render-blocking `NotFound.*.css` request.
