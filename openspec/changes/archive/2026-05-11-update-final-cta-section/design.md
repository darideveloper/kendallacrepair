## Context
The FinalCTA section is the last conversion point on the landing page. The new HTML design increases urgency with:
- An availability indicator (green pulsing dot + "agentes atendiendo")
- More urgent heading copy
- WhatsApp CTA alongside phone (preferred Latin American contact method)

## Decisions
- **Overlay**: Reuse `bg-how-overlay` — visually near-identical to the HTML overlay gradient. Avoids adding a new custom gradient class.
- **Availability dot animation**: Reuse the existing `pulse-green` keyframe already defined in `global.css`. No new animation needed.
- **Button components**: Reuse `Button.astro` with `variant="primary"` (phone) and `variant="whatsapp"` (WhatsApp) instead of raw `<a>` tags. This keeps button behavior consistent with the rest of the site.
- **Container**: Reuse the existing `si` utility class (`max-w-[1200px] mx-auto px-6`) already defined in `global.css` for inner content alignment.
- **Background image**: Keep the existing `foto-trane-single.webp` asset; the HTML's base64 image is visually equivalent.

## Risks / Trade-offs
- Removing the "Solicita Cotización" form link means users can no longer navigate to the form from the final CTA. The form remains accessible via the hero section.
- The WhatsApp link uses `SITE.whatsapp.phone` — this is already defined in `src/constants/site.ts`.

## Open Questions
- Should the subtitle (`estimados gratis...`) reuse the existing `benefits` key or get a new `subtitle` key? Decision: reuse `benefits` with updated copy.
