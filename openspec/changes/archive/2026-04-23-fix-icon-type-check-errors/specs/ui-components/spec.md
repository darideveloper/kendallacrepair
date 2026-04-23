## MODIFIED Requirements

### Requirement: Centralized Icon Atom
The application SHALL provide an `Icon.astro` component to handle SVG rendering from a shared icon set.

#### Scenario: Exporting IconName type
- **WHEN** the `Icon.astro` component defines supported icon names
- **THEN** it SHALL export a `type IconName` representing the valid icon identifiers

#### Scenario: Typed consumers use supported icon names
- **WHEN** a component, page, or shared constant imports `IconName`
- **THEN** all icon name literals SHALL be assignable to `IconName`
- **AND** each icon name in `IconName` SHALL have a corresponding SVG entry in the icon registry used by `Icon.astro`
