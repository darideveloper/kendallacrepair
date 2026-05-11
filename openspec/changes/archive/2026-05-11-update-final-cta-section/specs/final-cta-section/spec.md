## MODIFIED Requirements

### Requirement: Implement the Final CTA Banner
The landing page MUST include a high-impact, full-width banner at the end of the content to drive final user conversion.

#### Scenario: Final CTA Banner Appearance
- Given a user on the landing page
- When they scroll to the bottom of the content
- Then they must see a "Final CTA" banner with:
    - A dark background image overlay using `bg-how-overlay` gradient.
    - An availability indicator badge with a green pulsing dot and text "Disponible ahora — agentes atendiendo" (ES) or "Available now — agents attending" (EN).
    - The heading "Tu AC esta Roto? No Esperes Hasta Manana." (ES) or "Your AC Broken? Don't Wait Until Tomorrow." (EN), using fluid typography (`clamp`).
    - A large, prominent phone link displaying `SITE.phone.display`.
    - A subtitle: "Estimados gratis &bull; Servicio el mismo dia &bull; Disponible 24/7" (ES) or "Free estimates &bull; Same-day service &bull; Available 24/7" (EN).
    - Two call-to-action buttons: "Llama Ahora" (Primary, phone link) and "WhatsApp" (WhatsApp link).

#### Scenario: Final CTA Interactivity
- Given the Final CTA banner is rendered
- When the user clicks the "Llama Ahora" button or the large phone link
- Then the browser should initiate a call to `SITE.phone.value`.
- When the user clicks the "WhatsApp" button
- Then the browser should open the WhatsApp messaging URL using `SITE.whatsapp.phone`.

#### Scenario: Final CTA Responsiveness
- Given the Final CTA banner is rendered
- When viewed on a mobile device (width < 768px)
- Then the heading and phone link must scale down using fluid typography (`clamp`).
- And the CTAs must stack vertically if necessary to fit the screen.

#### Scenario: Final CTA Accessibility
- Given the Final CTA banner is rendered
- When the phone link is focused or hovered
- Then it must change color to `brand-orange` with a smooth transition.
- When the availability indicator is rendered
- Then the pulsing dot must have `aria-hidden="true"` since it is decorative.
