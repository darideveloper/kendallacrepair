# Proposal: Align Coverage Section with New HTML Design

## Problem
The current Coverage section (`Coverage.astro`) has discrepancies in copy, iconography, and visual styling compared to the latest high-conversion design provided in HTML. 
- The copy lacks the specific urgency of the new design (e.g., "1-3 hours" response time).
- Neighborhood tags are missing the location pin emoji.
- Visual nuances in text colors and badge styling need synchronization.

## Solution
Update the Coverage section to achieve visual and content parity with the provided HTML design while maintaining the project's architectural standards (Tailwind 4.0, Atomic Design, and i18n).

Key changes:
1.  **Refine Copy**: Update all localized strings in `es.json` and `en.json` to match the specific service area messaging.
2.  **Enhance Visuals**: 
    - Update `CoverageBadge.astro` to ensure text colors and background opacities match the design.
    - Prepend the `📍` emoji to neighborhood items.
    - Ensure icon backgrounds (`bl`, `or`, `gr`) correctly map to brand gradients.
3.  **Consistency**: Synchronize the map title and badge subtitles across both languages.

## Scope
- `src/messages/en.json` & `src/messages/es.json`: Update strings for coverage title, subtitle, and badges.
- `src/components/organisms/Coverage.astro`: Update loop for neighborhoods and component structure.
- `src/components/molecules/CoverageBadge.astro`: Ensure styling matches HTML spec.
