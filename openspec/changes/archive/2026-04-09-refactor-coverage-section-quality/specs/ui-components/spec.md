# ui-components Specification Delta

## MODIFIED Requirements

### Requirement: Centralized Icon Atom
The application SHALL provide an `Icon.astro` component to handle SVG rendering from a shared icon set.

#### Scenario: Exporting IconName type
- Given an `Icon.astro` component
- When defined with a set of supported icons
- Then it SHALL export a `type IconName` representing the valid icon identifiers

### Requirement: Status Badge Atom
The application SHALL provide a `Badge.astro` component for displaying short status messages or tags.

#### Scenario: Using semantic variants
- Given a `Badge.astro` component
- When it is rendered with a `variant` prop set to `status`
- Then it SHALL display the pulsing green dot
- And when the `variant` prop is set to `tag`
- Then it SHALL NOT display the pulsing dot

## ADDED Requirements

### Requirement: Accessibility for Embedded Media
The application SHALL ensure that embedded media like Google Maps follow accessibility best practices.

#### Scenario: Decorative map attribution
- Given a `Coverage.astro` component with a Google Map iframe
- When it is rendered
- Then it SHALL include a descriptive `title` attribute for screen readers
- And it SHALL have `aria-hidden="false"` only if interaction is expected
