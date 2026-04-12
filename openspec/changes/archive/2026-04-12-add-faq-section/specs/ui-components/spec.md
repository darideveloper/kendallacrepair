## ADDED Requirements
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
