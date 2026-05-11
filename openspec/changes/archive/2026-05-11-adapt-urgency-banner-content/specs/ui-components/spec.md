## ADDED Requirements

### Requirement: Urgency Banner Molecule
The application SHALL provide an `UrgencyBanner.astro` component that displays a high-visibility emergency call banner at the top of the page.

#### Scenario: Urgency banner content and styling
- Given the `UrgencyBanner.astro` component is rendered
- When the page loads
- Then the banner MUST display a full-width gradient background (orange `#E03131` to `#E8590C`)
- And the banner MUST display a blinking ⚡ emoji before the text
- And the banner MUST display text matching `ui.emergency_call_banner` from translation files
- And a clickable `<a>` tag wrapping all content SHALL dial `SITE.phone.value`
- And the outer container SHALL have `cursor: pointer` to indicate clickability

#### Scenario: Urgency banner interactivity
- Given the `UrgencyBanner.astro` is rendered
- When the user clicks anywhere on the banner
- Then the browser SHALL initiate a call to `SITE.phone.value`
- And the link SHALL use flexbox centering (`flex items-center justify-center gap-2`) without `hover:underline`

#### Scenario: Urgency banner blink animation
- Given the `UrgencyBanner.astro` is rendered
- When the page is active
- Then the ⚡ emoji SHALL blink with opacity oscillating between 0.6 and 1 over 1.5 seconds, using the existing `animate-blink` class
