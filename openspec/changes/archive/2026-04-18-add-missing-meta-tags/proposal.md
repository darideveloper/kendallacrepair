# Proposal: Add Missing Meta Tags

## Problem
The current SEO implementation in `BaseSEO.astro` and `Layout.astro` is missing several standard HTML meta tags that are important for search engine optimization and browser metadata. Specifically, `keywords`, `author`, `robots`, and `language` tags are absent.

## Proposed Solution
We will add these missing meta tags to the `BaseSEO.astro` component and ensure they are properly localized using the existing i18n system.

### Changes:
1.  **Localization:** Add `site.keywords` to `en.json` and `es.json`.
2.  **SEO Component:** Update `BaseSEO.astro` to render:
    - `keywords`: Localized list of keywords.
    - `author`: Site name from `SITE` constant.
    - `robots`: Defaulting to `index, follow`.
    - `language`: Localized language name (English/Spanish).
3.  **Specification:** Update `openspec/specs/metadata/spec.md` to include these as requirements.

## Impact
- **SEO:** Improved discoverability for niche keywords and better metadata for search crawlers.
- **Standards:** Better compliance with web standards and best practices.
