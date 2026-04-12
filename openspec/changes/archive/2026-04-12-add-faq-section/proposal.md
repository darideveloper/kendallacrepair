# Change: Add FAQ Section

## Why
Users frequently ask the same questions about cost, coverage, licenses, and emergency availability. An FAQ section will quickly address these concerns, building trust and reducing friction to call or contact.

## What Changes
- Add `FAQItem` interface and `FAQ_ITEMS` data array to `src/constants/site.ts`.
- Create a new `FAQItem.astro` molecule component for individual accordion-style questions.
- Create a new `FAQ.astro` organism component to render the full FAQ section.
- Integrate the `FAQ.astro` component into the main landing page (`src/pages/index.astro`).

## Impact
- Affected specs: `site-configuration`, `ui-components`
- Affected code: `src/constants/site.ts`, `src/components/molecules/FAQItem.astro`, `src/components/organisms/FAQ.astro`, `src/pages/index.astro`
