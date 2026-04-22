## Why

The current Lighthouse critical request chain for the initial navigation includes `/_astro/NotFound.*.css`, followed by two font files discovered through that stylesheet. This keeps an unnecessary 404-only stylesheet and late-discovered font downloads on the LCP-critical path, with a reported maximum critical path latency of 1,009 ms.

## What Changes

- Remove 404-only stylesheet loading from non-404 initial page routes.
- Make critical font resources discoverable earlier so they are not delayed behind an unnecessary stylesheet request.
- Preserve existing font families, visual rendering, route behavior, and localized 404 support.
- Verify that generated home and thank-you pages no longer reference `NotFound.*.css`.
- Verify that the initial critical request chain no longer follows `HTML -> NotFound.*.css -> font files` and does not introduce additional preconnect hints beyond the current important origins.
- Keep all visible UI, layout, copy, translations, and content unchanged.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `performance`: Strengthen critical request chain requirements for route-specific CSS and early font discovery.

## Impact

- Affects Astro routing/build output for page-level CSS chunk inclusion.
- May affect how local font assets are declared or preloaded from the document head.
- Expected implementation scope is limited to routing, performance hints, and build-output verification.
- No API, dependency, design system, copy, translation, metadata, or visual content changes are expected.
