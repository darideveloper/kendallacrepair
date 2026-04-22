## Context

The reported Lighthouse chain for the initial navigation is:

1. `https://kendallacrepairs.com` - 405 ms, 13.41 KiB
2. `/_astro/NotFound.*.css` - 776 ms, 10.94 KiB
3. `/_astro/plus-jaka*.woff2` - 1,009 ms, 27.12 KiB
4. `/_astro/dm-sans-*.woff2` - 927 ms, 36.49 KiB

This indicates two related performance issues: a 404-only CSS chunk is being included on non-404 pages, and local font downloads are being discovered after a blocking stylesheet instead of as early critical resources. The implementation must improve loading behavior without changing UI, layout, copy, translations, metadata, or visible content.

## Goals / Non-Goals

**Goals:**

- Remove `NotFound.*.css` from the critical path of normal pages.
- Preserve `/404` and `/es/404` behavior.
- Make the existing local variable fonts discoverable earlier in the document lifecycle.
- Keep the current font families and rendered design unchanged.
- Verify production build output and Lighthouse-relevant HTML/resource references against the 1,009 ms critical path report.

**Non-Goals:**

- No visible UI changes.
- No content, copy, translation, route label, or metadata changes.
- No new font family, typography redesign, or visual fallback change.
- No new third-party origins or unnecessary preconnect hints.
- No dependency changes unless implementation proves the existing toolchain cannot express the required preload safely.

## Decisions

1. Isolate 404 rendering from normal route rendering.

   Rationale: The catch-all route currently imports `NotFound.astro` alongside normal pages, which can cause the `NotFound.*.css` chunk to be emitted for routes that do not render the 404 page. Dedicated 404 route files keep that CSS attached only to 404 output.

   Alternative considered: Minify or reduce the `NotFound` CSS. That can reduce transfer size but does not remove the unnecessary request from the critical chain.

2. Keep existing typography while improving font discovery.

   Rationale: The reported chain shows both local font files are critical to the initial render. They should be discoverable from the document head, or otherwise from the primary page stylesheet, without waiting on a non-rendered route stylesheet.

   Alternative considered: Replace or remove custom fonts. That would change the visual design and is out of scope.

3. Avoid adding preconnect hints for same-origin assets.

   Rationale: The fonts and Astro CSS assets are same-origin, and Lighthouse reports no additional good preconnect candidates. Adding more preconnects would not address the same-origin critical chain and could waste connection budget.

   Alternative considered: Add broad preconnects or preloads without verifying resource type and crossorigin behavior. That risks duplicate downloads or lower priority accuracy.

4. Validate against production output.

   Rationale: This issue appears after Astro/Vite build chunking. Source-code inspection alone is insufficient; the generated HTML and assets must be inspected.

## Risks / Trade-offs

- Incorrect font preload attributes can cause duplicate downloads -> Mitigate by matching `as="font"`, `type="font/woff2"`, and `crossorigin` behavior to the generated font requests.
- Route isolation can affect localized 404 generation -> Mitigate by verifying `/404` and `/es/404` generated output.
- Build hashes change across builds -> Mitigate by searching for resource patterns such as `NotFound.*.css` and `.woff2` rather than fixed filenames.
- Over-optimizing fonts can alter rendering timing -> Mitigate by preserving the same font families and CSS declarations.

## Migration Plan

1. Capture current production build evidence for the critical chain resources.
2. Adjust routing so non-404 pages do not statically depend on `NotFound.astro`.
3. Add or adjust same-origin font discovery/preload for the existing variable fonts.
4. Run the production build.
5. Inspect generated HTML for `/`, `/es`, `/thank-you`, and `/es/gracias`.
6. Confirm `/404` and `/es/404` still render.
7. Re-run Lighthouse or equivalent network inspection to confirm the critical chain no longer reports `HTML -> NotFound.*.css -> font files` with a maximum latency near 1,009 ms.

Rollback is to restore the previous catch-all route behavior and remove any font preload changes.

## Open Questions

- None.
