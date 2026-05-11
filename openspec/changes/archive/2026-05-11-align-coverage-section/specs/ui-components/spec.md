# Capability: UI Components

## MODIFIED Requirements

### Requirement: Coverage Badge Molecule
The application SHALL provide a `CoverageBadge.astro` molecule for trust-building information cards.

#### Scenario: Visual inspection of the coverage section badges
- **GIVEN** a `CoverageBadge.astro` component
- **THEN** it SHALL use a stroke width of 2.5 for the `Icon.astro` component to ensure a bold visual style
- **AND** it SHALL use brand-specific gradients for icon backgrounds (Blue for trust, Orange for urgency, Green for value)
- **AND** the subtitle text SHALL use an opacity of `white/60` for better contrast against the glass surface

### Requirement: Coverage Organism
The application SHALL provide a `Coverage.astro` organism to display the service area map and trust information.

#### Scenario: Visual and content parity with high-conversion design
- **GIVEN** a `Coverage.astro` component
- **THEN** it SHALL display a subtitle emphasizing speed ("⏰ Tecnico en tu puerta en 1-3 horas en todo Kendall") with `text-brand-orange` and `font-bold` styling
- **AND** it SHALL display neighborhood items prepended with a location pin (📍)
- **AND** the map iframe SHALL use a localized title fetched from the i18n system
