# Capability: final-cta-section

## ADDED Requirements

### Requirement: Implement the Final CTA Banner
The landing page MUST include a high-impact, full-width banner at the end of the content to drive final user conversion.

#### Scenario: Final CTA Banner Appearance
- Given a user on the landing page
- When they scroll to the bottom of the content
- Then they must see a "Final CTA" banner with:
    - A dark background image overlay (e.g., `foto-trane-single.jpg`).
    - The heading "Tu AC Necesita Reparación? No Esperes Más.".
    - A large, prominent phone link displaying `SITE.phone.display`.
    - A value proposition summary ("Estimados gratis &bull; Servicio el mismo día &bull; Disponible 24/7").
    - Two call-to-action buttons: "Llama Ahora" (Primary) and "Solicita Cotización" (Secondary).

#### Scenario: Final CTA Interactivity
- Given the Final CTA banner is rendered
- When the user clicks the "Llama Ahora" button or the large phone link
- Then the browser should initiate a call to `SITE.phone.value`.
- When the user clicks the "Solicita Cotización" button
- Then the page should smoothly scroll to the `#formulario` section.

#### Scenario: Final CTA Responsiveness
- Given the Final CTA banner is rendered
- When viewed on a mobile device (width < 768px)
- Then the heading and phone link must scale down using fluid typography (`clamp`).
- And the CTAs must stack vertically if necessary to fit the screen.
