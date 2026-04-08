# ui-components Specification

## Purpose
TBD - created by archiving change implement-hero-section. Update Purpose after archive.
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
The application SHALL provide a `Badge.astro` component for displaying short status messages with a pulsing dot.

#### Scenario: Displaying "Live" status
- Given a `Badge.astro` component
- When it is rendered with the "Tecnicos disponibles ahora" text
- Then it should display a pulsing green dot to the left of the text

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

#### Scenario: Rendering a specific icon by name
- Given an `Icon.astro` component
- When it is rendered with the `name` set to `phone`
- Then it SHALL render the corresponding SVG path for the phone icon

#### Scenario: Customizing icon styles
- Given an `Icon.astro` component
- When it is rendered with custom `class`, `size`, or `color` props
- Then it SHALL apply those styles to the rendered SVG element

