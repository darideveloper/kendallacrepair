# ui-components Specification Delta

## ADDED Requirements

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
