## ADDED Requirements

### Requirement: Initial Viewport Motion Safety
The system SHALL avoid nonessential automatic entrance animation for LCP-adjacent content during initial homepage render without changing UI structure, content, colors, typography families, metadata, translations, or routes.

#### Scenario: Hero content is visible at initial paint
- **WHEN** the homepage initial viewport is rendered
- **THEN** the hero heading, supporting copy, primary CTAs, and hero form SHALL NOT start hidden or translated by automatic entrance animation

#### Scenario: Early section startup motion is minimized
- **WHEN** the first 2-3 homepage sections render during initial load
- **THEN** targeted headings and primary text blocks SHALL NOT run nonessential automatic entrance animation before main content becomes visible

#### Scenario: Scope stays limited to early sections
- **WHEN** startup motion optimization is implemented
- **THEN** changes SHALL remain scoped to hero and first 2-3 sections
- **AND** animation behavior outside that scope SHALL remain unchanged unless required by reduced-motion rules

#### Scenario: Event-driven interaction feedback remains
- **WHEN** users hover or focus interactive controls
- **THEN** event-driven transition feedback SHALL remain available as long as it does not auto-run during initial page load

#### Scenario: Verification uses multiple PageSpeed runs
- **WHEN** performance impact is evaluated after deployment
- **THEN** PageSpeed conclusions SHALL use multiple runs or median trend comparison instead of a single run
