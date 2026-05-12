# Change: Finalize Outstanding Client Requirements

## Why

The client submitted an extensive change request covering Hero, Service Area, Services, How It Works, Testimonials, FAQ, CTA, Footer, Header, and SEO sections. Most requirements have been implemented, but a codebase audit revealed 9 gaps where the current implementation does not fully align with the client spec.

## What Changes

- Update Google Maps embed coordinates to center on Kendall (lat: 25.6793, lng: -80.3964, zoom: 12)
- Fix Free Estimates badge subtitle from "$0 diagnostic visit" to "$0 service call" and Emergency from "60 min response" to "Response in 60 min"
- Add English translation subtext below Maria G.'s Spanish testimonial
- Add FAQPage JSON-LD structured data block in the document `<head>`
- Make footer operational info (hours, license, insurance, languages) translatable via i18n instead of hardcoded Spanish
- Add green dot + "Open" availability indicator next to phone button in the Header
- Update home page meta description to match client spec
- Reorder FAQ items so the original 4 questions come first, followed by the 6 new ones
- Add translation keys for footer info column

## Impact

- **Affected specs:** `site-configuration`, `i18n`, `ui-components`, `testimonials`, `structured-data`, `metadata`
- **Affected code:**
  - `src/constants/site.ts` — MAP_EMBED_URL coordinates
  - `src/messages/en.json` — badge subtitles, FAQ order, footer keys, meta description, testimonial data
  - `src/messages/es.json` — badge subtitles, FAQ order, footer keys, testimonial data
  - `src/components/organisms/Footer.astro` — i18n for info column
  - `src/components/organisms/Header.astro` — availability indicator
  - `src/components/organisms/FAQ.astro` — FAQPage JSON-LD schema
  - `src/components/atoms/BaseSEO.astro` — or dedicated FAQPage schema block
