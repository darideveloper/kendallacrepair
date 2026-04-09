# Change: Add "How It Works" Section

## Why
The UI design includes a "3 Pasos para Resolver tu Problema" (How It Works) section that explains the service process to potential customers. Adding this section will improve user trust and conversion rates by clearly outlining the easy 3-step process.

## What Changes
- Add a new `StepCard.astro` molecule component to display individual steps.
- Add a new `HowItWorks.astro` organism component to render the full section.
- Update `src/constants/site.ts` to include the content for the 3 steps.
- Integrate the new `<HowItWorks />` component into the main `index.astro` page.
- Apply minimal global style updates for the section's background overlay gradient.

## Impact
- Affected specs: `ui-components`, `site-configuration`
- Affected code: `src/components/molecules/StepCard.astro`, `src/components/organisms/HowItWorks.astro`, `src/constants/site.ts`, `src/pages/index.astro`, `src/styles/global.css`
