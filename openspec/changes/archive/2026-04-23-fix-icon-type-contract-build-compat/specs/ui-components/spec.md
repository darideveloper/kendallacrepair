## MODIFIED Requirements

### Requirement: Centralized Icon Atom
The application SHALL provide an `Icon.astro` component to handle SVG rendering from a shared icon set.

#### Scenario: Exporting IconName type
- **WHEN** the icon system defines a set of supported icons
- **THEN** it SHALL export `type IconName` from a shared TypeScript module
- **AND** `Icon.astro` SHALL consume that shared `IconName` contract for its `name` prop

#### Scenario: Typed consumers stay synchronized
- **WHEN** components, pages, or shared constants import `IconName`
- **THEN** icon name literals SHALL be assignable to `IconName`
- **AND** each `IconName` member SHALL map to a corresponding SVG entry in `Icon.astro`
