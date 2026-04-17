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
The application SHALL provide a `HeroForm.astro` component to capture user inquiries using native HTML submission.

#### Scenario: Native form submission behavior
- Given a `HeroForm.astro` component
- When the user submits the form
- Then the browser SHALL perform a native `POST` request to the `apiEndpoint`
- And the application SHALL NOT intercept the submission with client-side JavaScript `fetch` calls

#### Scenario: Form submission redirection
- Given the `HeroForm.astro` is submitted via native HTML `POST`
- When the submission is processed by the backend
- Then the application SHALL redirect the user to `/thank-you` via the server-side redirect response
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

#### Scenario: Embedded n8n Chat Iframe
- Given the `ChatButton.astro` component
- When the chat popup is opened
- Then it SHALL render a functional `<iframe>` pointing to the configured n8n chat URL
- And the application SHALL NOT render the static mock header, body, or input area

#### Scenario: Responsive Chat Window Dimensions
- Given the `ChatButton.astro` component's `#chat-popup` container
- When rendered on desktop
- Then it SHALL have a fixed height of `550px`
- And when rendered on mobile
- Then it SHALL occupy the maximum available height within the viewport constraints while maintaining its relative positioning above the `MobileCallBar`

#### Scenario: Preserved Toggle and Auto-open Logic
- Given the `ChatButton.astro` component
- When the page loads
- Then the component SHALL automatically open the chat popup after 15 seconds if not already toggled by the user
- And the toggle button SHALL continue to show/hide the iframe container correctly

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

### Requirement: Service Card Molecule
The application SHALL provide a `ServiceCard.astro` component to display featured services with an image, title, and description.

#### Scenario: Featured card layout
- Given a `ServiceCard.astro` component
- When it is rendered with an image, title, and description
- Then it SHALL display the image with a fixed height and `object-fit: cover`
- And it SHALL apply a top border gradient and a lift animation on hover

### Requirement: Accordion Item Atom
The application SHALL provide an `AccordionItem.astro` component to represent a single service category in a detailed list.

#### Scenario: Expandable category details
- Given an `AccordionItem.astro` component
- When the user clicks on the header
- Then it SHALL toggle the visibility of its body content using a `max-height` transition
- And it SHALL rotate the chevron icon to indicate its open/closed state

#### Scenario: Category-specific iconography
- Given an `AccordionItem.astro` component
- When it is rendered with a specific service variant (e.g., `repair`, `diag`)
- Then it SHALL use the corresponding brand gradient for the icon's background container

### Requirement: Services Organism
The application SHALL provide a `Services.astro` component that acts as the container for both featured and detailed service information.

#### Scenario: Integrated services section
- Given a `Services.astro` component
- When it is rendered
- Then it SHALL contain a 4-column grid (on desktop) of `ServiceCard` molecules
- And it SHALL contain a centered accordion section with 9 `AccordionItem` atoms

### Requirement: Step Card Molecule
The system SHALL provide a `StepCard` component to display a numbered step in a process.

#### Scenario: Render step card
- **WHEN** the `StepCard` component is rendered with a number, title, and description
- **THEN** it displays the number in a stylized badge, followed by the title and description text.

### Requirement: How It Works Organism
The system SHALL provide a `HowItWorks` component to display the 3-step service process.

#### Scenario: Render how it works section
- **WHEN** the `HowItWorks` component is rendered
- **THEN** it displays a section with a background image, a dark overlay, a section header, and a grid of `StepCard` components mapped from site configuration.

### Requirement: FAQ Item Molecule
The application SHALL provide an `FAQItem.astro` component to represent a single question and answer in an accordion format.

#### Scenario: Expandable FAQ details
- **WHEN** the user clicks on the question header
- **THEN** it SHALL toggle the visibility of its answer content using a `max-height` transition
- **AND** it SHALL rotate the chevron icon to indicate its open/closed state

### Requirement: FAQ Organism
The application SHALL provide an `FAQ.astro` organism that acts as the container for the FAQ section.

#### Scenario: Integrated FAQ section
- **WHEN** the `FAQ.astro` component is rendered
- **THEN** it SHALL display the section tag "PREGUNTAS FRECUENTES"
- **AND** it SHALL render a list of `FAQItem` molecules mapped from the centralized configuration data

### Requirement: Footer component integration
The Layout component MUST be updated to include the new footer globally.

#### Scenario: Integrate Footer in Layout
Update `src/layouts/Layout.astro` to import and render the `Footer` component.
- Import `Footer` from `../components/organisms/Footer.astro`.
- Place `<Footer />` immediately after the closing `</main>` tag, before the global floating elements.

### Requirement: Contact Form API Integration
The application SHALL provide API integration for the contact form to submit data securely and reliably.

#### Scenario: Form payload structure
- Given a `HeroForm.astro` component
- When the user submits the form
- Then it SHALL send the payload via `POST` as `multipart/form-data`
- And it SHALL include the hidden fields `api_key`, `user`, `subject`, and `redirect` mapped from environment variables
- And it SHALL include user-provided data `name`, `phone`, `email`, and `message`

