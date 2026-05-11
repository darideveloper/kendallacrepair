# Proposal: Align Services Section

## Summary
Align the `Services.astro` component with the new target HTML structure and content. This involves refactoring the component's HTML to use the requested "short" class names, updating the featured service cards with CTAs, and replacing the existing accordion with a 6-card grid for detailed services. All content will be integrated into the i18n system.

## Problem Statement
The current `Services.astro` component uses an accordion for detailed services and a different layout for featured services that doesn't match the latest design requirements. The design calls for a more direct grid approach and specific class naming conventions for styling consistency.

## Proposed Solution
1.  **Refactor `Services.astro`**: Update the outer structure to use `svc`, `si`, `sh`, `st`, and `sg` classes.
2.  **Update `ServiceCard.astro`**:
    *   Add a Call-to-Action (CTA) link with the company phone number.
    *   Update classes to `sc`, `si2`, and `sb` to match the target HTML.
    *   Ensure compatibility with the existing i18n system.
3.  **Replace Detailed Services Section**:
    *   Remove the `AccordionItem` usage.
    *   Implement a 2-column grid of 6 cards with colored left borders as specified in the target HTML.
    *   Group existing `DETAILED_SERVICES` into these 6 categories.
4.  **Content & i18n**:
    *   Update `es.json` and `en.json` with the new marketing copy.
    *   Add the 6 detailed service categories and their items to the translation files.
5.  **Styling**:
    *   Add the new classes (`svc`, `si`, `sh`, `st`, `sg`, `sc`, `si2`, `sb`, `sc-cta`) to `src/styles/global.css` using Tailwind's `@theme` or `@layer utilities` to maintain project conventions while fulfilling the structural requirement.

## Impact
- **UI/UX**: Improved service presentation with clearer CTAs and a more readable detailed services grid.
- **Codebase**: Aligns the component with the target design while maintaining i18n and performance standards.
- **Maintainability**: Centralizes the new layout logic within the existing atomic design structure.
