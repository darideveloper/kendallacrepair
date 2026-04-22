## 1. Baseline Evidence

- [x] 1.1 Run a production build and capture current references to `NotFound.*.css` in generated non-404 HTML.
- [x] 1.2 Capture current generated font resource references for Plus Jakarta Sans and DM Sans.
- [x] 1.3 Record the current Lighthouse or network evidence showing the critical chain reaches 1,009 ms through `NotFound.*.css` and font requests.

## 2. Route Asset Isolation

- [x] 2.1 Update routing so non-404 pages do not statically depend on `NotFound.astro`.
- [x] 2.2 Preserve dedicated `/404` rendering with the existing English 404 UI and content.
- [x] 2.3 Preserve dedicated `/es/404` rendering with the existing Spanish 404 UI and content.

## 3. Font Discovery

- [x] 3.1 Identify the generated or source font assets for the existing Plus Jakarta Sans and DM Sans variable fonts.
- [x] 3.2 Add or adjust early font discovery/preload without changing font families or typography styling.
- [x] 3.3 Confirm the font hints do not create duplicate font downloads or add unnecessary preconnect origins.

## 4. Verification

- [x] 4.1 Run the production build.
- [x] 4.2 Inspect generated `/`, `/es`, `/thank-you`, and `/es/gracias` HTML and confirm they do not reference `NotFound.*.css`.
- [x] 4.3 Inspect generated `/404` and `/es/404` output and confirm existing 404 behavior is preserved.
- [x] 4.4 Verify the generated document head exposes critical fonts earlier than any non-rendered route stylesheet dependency and that the `HTML -> NotFound.*.css -> font files` chain is removed.
- [x] 4.5 Confirm no UI, layout, copy, translation, metadata, or content changes were made.
- [x] 4.6 Run relevant project and OpenSpec validation commands.
