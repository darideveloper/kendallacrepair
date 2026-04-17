# Tasks: implement-i18n-system

## Phase 1: Core Logic and Scaffolding
- [x] Create `src/messages/en.json` and `src/messages/es.json`.
- [x] Implement `src/lib/i18n/ui.ts` with language definitions.
- [x] Implement `src/lib/i18n/utils.ts` with `t()`, `getLangFromUrl()`, and `getLocalizedPath()`.
- [x] Implement `src/lib/i18n/routes.ts` with route mapping for `home` and `thank_you`.

## Phase 2: Routing Infrastructure
- [x] Move `src/pages/index.astro` to `src/components/pages/Home.astro`.
- [x] Move `src/pages/thank-you.astro` to `src/components/pages/ThankYou.astro`.
- [x] Create `src/pages/[...path].astro` as the central dynamic router.
- [x] Create `src/components/atoms/BaseSEO.astro` for localized meta tags and hreflang.
- [x] Update `src/layouts/Layout.astro` to support `lang` and `pageKey` props, and integrate `BaseSEO`.

## Phase 3: Content Migration (The "Big Refactor")
- [x] Extract and translate `SITE` and `NAV_LINKS` from `src/constants/site.ts`.
- [x] Extract and translate `NEIGHBORHOODS` from `src/constants/site.ts`.
- [x] Extract and translate `COVERAGE_BADGES` from `src/constants/site.ts`.
- [x] Extract and translate `FEATURED_SERVICES` from `src/constants/site.ts`.
- [x] Extract and translate `DETAILED_SERVICES` from `src/constants/site.ts`.
- [x] Extract and translate `HOW_IT_WORKS_STEPS` from `src/constants/site.ts`.
- [x] Extract and translate `FAQ_ITEMS` from `src/constants/site.ts`.
- [x] Extract and translate `TESTIMONIALS` from `src/constants/site.ts`.
- [x] Update `Header.astro` and `Footer.astro` to use `t()` and localized links.
- [x] Update `Hero.astro` and `Services.astro` to use `t()`.
- [x] Update `FAQ.astro`, `Testimonials.astro`, and `HowItWorks.astro` to use `t()`.
- [x] Update all relevant atoms and molecules (`Button`, `FormField`, `UrgencyBanner`) to support localization.

## Phase 4: UI/UX Enhancements
- [x] Implement logic in `LangToggle.astro` using `getLocalizedPath` to switch between EN/ES.
- [x] Ensure `ThankYou.astro` displays localized content based on `lang` prop.

## Phase 5: Tooling and Validation
- [x] Create `scripts/validate-i18n.ts` to ensure key parity between `en.json` and `es.json`.
- [x] Add `validate-i18n` script to `package.json`.
- [x] Run a full build to verify route generation and translation integrity.

## Phase 6: Cleanup
- [x] Remove hardcoded Spanish/English strings from all components.
- [x] Remove now-redundant hardcoded text from `src/constants/site.ts` (keep only configuration like phone numbers).
- [x] Verify that `robots.txt.ts` and sitemap (if any) handle localized routes correctly.
