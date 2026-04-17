# Tasks: Update Company Phone Number

This task list covers all steps needed to update the company phone number.

## Phase 1: Centralized Configuration
- [x] Update `src/constants/site.ts` with new phone number values. <!-- id: 1 -->

## Phase 2: Component Updates & Refactoring
- [x] Update default `phone` prop in `src/components/molecules/MobileCallBar.astro`. <!-- id: 2 -->
- [x] Replace hardcoded `tel:` link in `src/components/molecules/UrgencyBanner.astro` with `SITE.phone.value`. <!-- id: 3 -->
- [x] Update default `phone` prop in `src/components/molecules/WhatsAppButton.astro`. <!-- id: 4 -->

## Phase 3: Assets & Design Files
- [x] Update phone number text in `public/images/logos/logo-stacked-color.svg`. <!-- id: 5 -->
- [x] Update phone number text in `public/images/logos/logo-stacked-white.svg`. <!-- id: 6 -->
- [x] Update phone number text/links in all `ui-design/` files. <!-- id: 7 -->

## Phase 4: Validation
- [x] Verify phone number display and links on all pages. <!-- id: 8 -->
- [x] Verify WhatsApp button functionality. <!-- id: 9 -->
