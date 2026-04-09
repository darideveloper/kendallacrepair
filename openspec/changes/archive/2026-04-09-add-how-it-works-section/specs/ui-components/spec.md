## ADDED Requirements

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
