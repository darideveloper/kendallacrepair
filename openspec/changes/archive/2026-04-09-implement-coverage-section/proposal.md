# Proposal: Implement Coverage Map Section

## Summary
Add a new "Coverage Map" section to the homepage to build trust and visually demonstrate the service area in Kendall and Miami-Dade. This involves creating new components, updating existing atoms, and adding global brand styles.

## Problem
Users need to quickly verify if their location is covered. A visual map combined with trust badges (Licensed, Insured, etc.) increases conversion rates by providing immediate social proof and geographic relevance.

## Proposed Solution
Implement a high-impact, dark-themed section (`brand-navy`) featuring a Google Maps embed alongside a grid of trust-building badges and a list of covered neighborhoods.

### Key Changes
- **Global Styles**: Add brand green gradient and coverage section utility classes.
- **UI Components (Atoms)**: 
  - Update `Badge.astro` to support a "no-dot" variant for neighborhood tags.
  - Update `Icon.astro` with new icons (`check-circle`, `dollar-sign`).
- **UI Components (Molecules)**: Create `CoverageBadge.astro` for the trust-building cards.
- **UI Components (Organisms)**: Create `Coverage.astro` as the main section container.
- **Site Configuration**: Centralize coverage data (neighborhoods, map URL, badge text) in `src/constants/site.ts`.

## Constraints
- Must maintain high Core Web Vitals (use Astro's Image component if needed, though this section uses `iframe` and SVGs).
- Must be fully responsive (1.1fr 0.9fr desktop, 1fr mobile).
- Must reuse existing brand colors and typography.
