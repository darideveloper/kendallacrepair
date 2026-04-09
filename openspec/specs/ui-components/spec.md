# ui-components Specification

## Purpose
The application provides a consistent set of atoms, molecules, and organisms for high-conversion HVAC service landing pages.
## Requirements
### Requirement: Reusable Button Atom
The application SHALL provide a `Button.astro` component with multiple brand variants.

#### Scenario: Primary variant for CTAs
- Given a `Button.astro` component
- When the `variant` is set to `primary`
- Then it should apply the orange brand gradient, white text, and a drop shadow

#### Scenario: Secondary variant for sub-CTAs
- Given a `Button.astro` component
- When the `variant` is set to `secondary`
- Then it should apply a semi-transparent background with a white border and white text

#### Scenario: Interactive hover states
- Given any `Button.astro` variant
- When the user hovers over the button
- Then it should translate upwards by 2px with an enhanced shadow or increased opacity

### Requirement: Status Badge Atom
The application SHALL provide a `Badge.astro` component for displaying short status messages or tags.

#### Scenario: Using semantic variants
- Given a `Badge.astro` component
- When it is rendered with a `variant` prop set to `status`
- Then it SHALL display the pulsing green dot
- And when the `variant` prop is set to `tag`
- Then it SHALL NOT display the pulsing dot

### Requirement: Contact Form Molecule
The application SHALL provide a `HeroForm.astro` component to capture user inquiries.

#### Scenario: Required form fields
- Given a `HeroForm.astro` component
- When it is rendered
- Then it SHALL contain fields for Name, Phone, Email, and Problem
- And the Phone field SHALL be mandatory

#### Scenario: Form submission redirection
- Given the `HeroForm.astro` is submitted
- When the submission is successful
- Then the application SHALL redirect the user to `/thank-you`
- And the application SHALL provide a valid page at `/thank-you`

### Requirement: Shared Form Wrapper Atom
The application SHALL provide a `FormField.astro` component to encapsulate common logic for all form inputs.

#### Scenario: Displaying label with required marker
- Given a `FormField.astro` component
- When it is rendered with a label and a required flag
- Then it SHALL display the label text followed by a red asterisk

#### Scenario: Wrapping arbitrary form elements
- Given a `FormField.astro` component
- When it is rendered with a child element (e.g., `<input>` or `<textarea>`)
- Then it SHALL render that element within its shared container structure

### Requirement: Centralized Icon Atom
The application SHALL provide an `Icon.astro` component to handle SVG rendering from a shared icon set.

#### Scenario: Exporting IconName type
- Given an `Icon.astro` component
- When defined with a set of supported icons
- Then it SHALL export a `type IconName` representing the valid icon identifiers

### Requirement: Mobile Call Bar
The application SHALL provide a `MobileCallBar.astro` component that is fixed at the bottom for quick access to phone calls.

#### Scenario: Displaying the call bar on mobile
- Given a `MobileCallBar.astro` component
- When viewed on a screen smaller than 640px
- Then it SHALL be fixed to the bottom of the viewport
- And it SHALL display the brand orange gradient and a clickable phone link

### Requirement: Global Floating Elements
The application SHALL provide floating action buttons that remain accessible and non-overlapping on all devices.

#### Scenario: Mobile positioning above Call Bar
- Given the `WhatsAppButton` and `ChatButton` components
- When viewed on a mobile device (screen width < 640px)
- Then they SHALL be positioned at least 80px (`bottom-20`) from the bottom to avoid overlap with the `MobileCallBar`

#### Scenario: Relative positioning of Chat Popup on mobile
- Given the `ChatButton` component with an active `chat-popup`
- When viewed on a mobile device
- Then the `chat-popup` SHALL be positioned relative to the toggle button (at least 152px from the bottom) to maintain visibility

### Requirement: Coverage Badge Molecule
The application SHALL provide a `CoverageBadge.astro` molecule for trust-building information cards.

#### Scenario: Trust card with glassmorphism
- Given a `CoverageBadge.astro` component
- When it is rendered with an `icon`, `title`, and `subtitle`
- Then it SHALL use a semi-transparent background (`bg-white/6`) and a semi-transparent border (`border-white/10`)
- And it SHALL display the icon within a circular or rounded container using a brand gradient background

### Requirement: Coverage Organism
The application SHALL provide a `Coverage.astro` organism to display the service area map and trust information.

#### Scenario: Responsive two-column layout
- Given a `Coverage.astro` component
- When viewed on a desktop (width >= 900px)
- Then it SHALL display a 1.1fr 0.9fr grid with a Google Map on the left and information on the right
- And when viewed on mobile (width < 900px)
- Then it SHALL stack the map and information vertically

### Requirement: Accessibility for Embedded Media
The application SHALL ensure that embedded media like Google Maps follow accessibility best practices.

#### Scenario: Decorative map attribution
- Given a `Coverage.astro` component with a Google Map iframe
- When it is rendered
- Then it SHALL include a descriptive `title` attribute for screen readers
- And it SHALL have `aria-hidden="false"` only if interaction is expected

