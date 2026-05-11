# Proposal: Align HowItWorks Section with Reference HTML

This proposal aims to align the `HowItWorks.astro` component and its related styles and translations with a specific reference HTML structure. The goal is to achieve a pixel-perfect (or structure-perfect) match while reusing existing project resources such as short-classes, molecules, and the i18n system.

## Problem
The current `HowItWorks.astro` implementation uses a more generic Tailwind-based approach and does not fully match the specific content, badges, and layout (Trust Strip, CTA) of the reference HTML.

## Solution
1.  **Update Translations:** Modify `es.json` and `en.json` to include the exact text, time indicators, and warranty badges from the reference.
2.  **Enhance Styles:** Add specific short-classes (`hiw`, `stg`, `stc`, `stn`, `time`, `wbadge`, `tstrip`, `bp`) to `global.css` to enable the "concise HTML" pattern used in other sections.
3.  **Refactor Molecules:** Update `StepCard.astro` to support new visual elements like the step number circle (`stn`), time badge (`time`), and warranty badge (`wbadge`).
4.  **Rewrite Organism:** Update `HowItWorks.astro` to use the new short-classes and implement the `Trust Strip` and `Final CTA` button.

## Scope
- `src/messages/es.json`
- `src/messages/en.json`
- `src/styles/global.css`
- `src/components/molecules/StepCard.astro`
- `src/components/organisms/HowItWorks.astro`

## Dependencies
- Existing `Image` component from `astro:assets`.
- Existing `i18n` utility.
