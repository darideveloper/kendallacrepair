# Change: Update Final CTA Section to match new design

## Why
The current FinalCTA section differs from the approved high-conversion HTML design. Key gaps: missing availability indicator, different CTA button pair (phone + WhatsApp instead of phone + form), and updated copy that drives urgency.

## What Changes
- Add a "Disponible ahora — agentes atendiendo" availability badge with green pulsing dot above the heading
- Update heading copy to the more urgent "Tu AC esta Roto? No Esperes Hasta Manana."
- Add subtitle text: "Estimados gratis • Servicio el mismo dia • Disponible 24/7"
- Replace the two current CTAs (phone + "Solicita Cotización") with phone + WhatsApp buttons
- Remove the secondary "Solicita Cotización" button linking to #formulario
- Add translation keys for availability label and WhatsApp CTA text
- Reuse existing project assets: `bg-how-overlay`, `Button.astro` (primary + whatsapp variants), `Icon.astro`, `pulse-green` animation
- Update the final-cta-section spec and i18n spec to reflect the new behavior

## Impact
- Affected specs: `final-cta-section` (MODIFIED), `i18n` (ADDED keys for new translations)
- Affected code:
  - `src/components/organisms/FinalCTA.astro` — restructured component
  - `src/messages/en.json` — new and updated `final_cta` keys
  - `src/messages/es.json` — new and updated `final_cta` keys
