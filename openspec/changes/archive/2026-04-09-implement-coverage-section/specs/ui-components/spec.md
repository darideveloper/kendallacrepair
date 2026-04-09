# ui-components Specification Delta

## MODIFIED Requirements

### Requirement: Status Badge Atom
The application SHALL provide a `Badge.astro` component for displaying short status messages or tags.

#### Scenario: Optional pulsing dot
- Given a `Badge.astro` component
- When it is rendered with a `showDot` prop set to `false`
- Then it SHALL NOT display the pulsing green dot
- And it SHALL function as a standard "Tag" for metadata like neighborhood names

### Requirement: Centralized Icon Atom
The application SHALL provide an `Icon.astro` component to handle SVG rendering from a shared icon set.

#### Scenario: Added icons for coverage
- Given an `Icon.astro` component
- When it is rendered with the `name` set to `check-circle` or `dollar-sign`
- Then it SHALL render the corresponding SVG path for that icon

## ADDED Requirements

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
