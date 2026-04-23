## ADDED Requirements

### Requirement: Deferred Third-Party Map Loading
The system SHALL keep third-party Google Maps embed resources off the initial navigation critical path and load them only when the coverage map is needed.

#### Scenario: Initial navigation excludes Google Maps utility scripts
- **WHEN** the homepage initial navigation is measured before the coverage section is near the viewport
- **THEN** requests to Google Maps utility script bundles (for example `main.js`, `init_embed.js`, `places.js`, `common.js`, `util.js`, `map.js`) SHALL NOT start during startup rendering

#### Scenario: Initial navigation excludes eager map preconnect hints
- **WHEN** map loading is configured as deferred for initial homepage navigation
- **THEN** the initial document head SHALL NOT emit eager map preconnect hints that are not required for first paint
- **AND** it SHALL NOT add additional preconnect origins beyond those required by initial rendering

#### Scenario: Map resources load on demand
- **WHEN** the coverage map enters a configured viewport-proximity threshold or the user explicitly requests map interaction
- **THEN** the map embed request SHALL start
- **AND** the user SHALL receive the same map destination/context as before this change

#### Scenario: Third-party cache limits are mitigated by deferred timing
- **WHEN** third-party map scripts are governed by provider-defined TTL values
- **THEN** the application SHALL reduce startup transfer impact by deferring map-related requests until map demand is detected
- **AND** it SHALL NOT depend on changing provider cache TTL values to achieve startup improvements

#### Scenario: Map shell remains visually stable
- **WHEN** map loading is deferred
- **THEN** the map container SHALL preserve the existing dimensions, border styling, and placement within the coverage section
- **AND** no copy, translation text, or section ordering SHALL change

### Requirement: Startup Reflow Safety
The system SHALL avoid startup JavaScript patterns that can trigger forced synchronous layout recalculation during initial render.

#### Scenario: No startup geometry reads after style invalidation
- **WHEN** first-load scripts execute during initial navigation
- **THEN** they SHALL NOT perform geometry reads (for example layout metrics) in the same execution path after DOM/style mutations that invalidate layout

#### Scenario: Interaction scripts remain event-driven
- **WHEN** interaction handlers for menu/chat UI are initialized
- **THEN** they SHALL defer visual state mutations to explicit user interaction events
- **AND** startup initialization SHALL avoid nonessential DOM write bursts before first paint

### Requirement: Critical Stylesheet Path Minimization
The system SHALL minimize render-blocking startup CSS to styles required for first-viewport rendering while preserving final visual output.

#### Scenario: Non-critical styles are deferred
- **WHEN** initial homepage HTML is generated
- **THEN** non-critical style rules (including decorative or later-section-only motion styles) SHALL be excluded from the blocking startup style path
- **AND** deferred style delivery SHALL preserve the same final rendered design once loaded

#### Scenario: No design or content regression from style deferral
- **WHEN** critical/deferred style loading is implemented
- **THEN** visible UI composition, typography families, color intent, copy, translations, and metadata behavior SHALL remain unchanged
