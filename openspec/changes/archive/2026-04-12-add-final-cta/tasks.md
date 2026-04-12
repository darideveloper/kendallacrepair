# Tasks: Add Final CTA Section

## Implementation Tasks
- [x] Create the `FinalCTA.astro` organism component in `src/components/organisms/`.
    - [x] Set up the basic Astro component structure with `Image`, `SITE`, `Button`, and `Icon` imports.
    - [x] Implement the dark image overlay using `astro:assets` and Tailwind utilities.
    - [x] Add the responsive heading and prominent phone link with `clamp()` typography.
    - [x] Add the primary and secondary buttons linking to `SITE.phone.value` and `#formulario` respectively.
- [x] Integrate the `FinalCTA` section into the main landing page.
    - [x] Import `FinalCTA` in `src/pages/index.astro`.
    - [x] Add `<FinalCTA />` after the `<FAQ />` section.

## Verification Tasks
- [x] Verify the visual design matches the high-fidelity mockups.
    - [x] Check background image visibility and dark overlay contrast.
    - [x] Confirm fluid typography scales correctly from mobile to desktop.
- [x] Test the call-to-action functionality.
    - [x] Click "Llama Ahora" and large phone link to verify it triggers a `tel:` link.
    - [x] Click "Solicita Cotización" to verify it scrolls smoothly to the `#formulario` anchor.
- [x] Run OpenSpec validation: `openspec validate add-final-cta --strict`.
