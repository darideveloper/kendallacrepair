# Proposal: Update Company Phone Number

**Status: Completed**

This proposal outlines the updates required to change the company phone number across the entire website from the old number to the new one: **+1 (305) 306-4511**.

## Problem
The company has updated its phone number, and the website currently displays an old/placeholder number (`(305) 555-1234`). This number is present in centralized configuration, hardcoded in some components, and even embedded as text in SVG logos.

## Proposed Changes
1. **Centralized Configuration**: Update `src/constants/site.ts` with the new phone number values.
2. **Hardcoded Components**: Refactor components with hardcoded numbers to use the centralized `SITE` constant or update their default props.
3. **SVG Logos**: Update the text content within SVG logo files that display the phone number.
4. **Form Placeholders**: Update phone number placeholders in forms to reflect the new format.
5. **UI Design Files**: Update the phone number in `ui-design/` files for consistency.

## Affected Files
- `src/constants/site.ts`
- `src/components/molecules/UrgencyBanner.astro`
- `src/components/molecules/MobileCallBar.astro`
- `src/components/molecules/WhatsAppButton.astro`
- `src/components/molecules/HeroForm.astro`
- `public/images/logos/logo-stacked-color.svg`
- `public/images/logos/logo-stacked-white.svg`
- Various files in `ui-design/`

## Verification Plan
- Manually verify all visible phone numbers on the site.
- Verify that `tel:` links correctly point to `tel:+13053064511`.
- Verify that WhatsApp links point to the correct number.
- Ensure the SVG logos display the correct text.
