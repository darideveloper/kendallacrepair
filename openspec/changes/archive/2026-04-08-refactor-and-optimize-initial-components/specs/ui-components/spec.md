## ADDED Requirements
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

## MODIFIED Requirements
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
