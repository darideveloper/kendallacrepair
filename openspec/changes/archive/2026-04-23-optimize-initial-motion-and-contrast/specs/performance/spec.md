## ADDED Requirements

### Requirement: Initial Load Motion Safety
The system SHALL avoid nonessential automatic animation on LCP-adjacent content during the initial viewport render without changing colors, copy, layout, routes, metadata, translations, or brand identity.

#### Scenario: Hero content is visible at initial paint
- **WHEN** the homepage initial viewport is rendered
- **THEN** the hero heading, supporting copy, primary CTAs, and hero form SHALL NOT begin hidden or translated by an entrance animation

#### Scenario: Early sections avoid startup entrance motion
- **WHEN** the first 2-3 homepage sections render during initial load
- **THEN** targeted early section headings and primary text blocks SHALL NOT run nonessential entrance animations before main content is visible

#### Scenario: Hover and focus feedback remains available
- **WHEN** a user hovers or focuses interactive elements
- **THEN** transition feedback MAY remain as long as it does not run automatically during initial page load

#### Scenario: Reduced motion is respected
- **WHEN** the user agent requests reduced motion
- **THEN** nonessential animations SHALL be disabled or reduced without hiding content

#### Scenario: PageSpeed validation uses multiple runs
- **WHEN** the change is verified after deployment
- **THEN** PageSpeed results SHALL be compared using multiple runs or a median score rather than treating one run as definitive
