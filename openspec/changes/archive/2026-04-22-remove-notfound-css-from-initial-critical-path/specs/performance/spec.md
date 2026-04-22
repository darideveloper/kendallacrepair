## ADDED Requirements

### Requirement: Route-Specific Critical CSS
The system SHALL keep CSS for pages that are not rendered by the current route out of the initial critical rendering path.

#### Scenario: English homepage excludes NotFound CSS
- **WHEN** the production homepage HTML is generated
- **THEN** it SHALL NOT reference a `NotFound.*.css` stylesheet

#### Scenario: Spanish homepage excludes NotFound CSS
- **WHEN** the production Spanish homepage HTML is generated
- **THEN** it SHALL NOT reference a `NotFound.*.css` stylesheet

#### Scenario: English thank-you page excludes NotFound CSS
- **WHEN** the production thank-you page HTML is generated
- **THEN** it SHALL NOT reference a `NotFound.*.css` stylesheet

#### Scenario: Spanish thank-you page excludes NotFound CSS
- **WHEN** the production Spanish thank-you page HTML is generated
- **THEN** it SHALL NOT reference a `NotFound.*.css` stylesheet

#### Scenario: English 404 page remains unchanged
- **WHEN** the production 404 page HTML is generated
- **THEN** it SHALL preserve the existing 404 page UI, layout, copy, translations, metadata behavior, and content

#### Scenario: Spanish 404 page remains unchanged
- **WHEN** the production Spanish 404 page HTML is generated
- **THEN** it SHALL preserve the existing 404 page UI, layout, copy, translations, metadata behavior, and content

#### Scenario: Visual and content output remains unchanged
- **WHEN** the route-specific CSS isolation is implemented
- **THEN** visible UI, layout, copy, translations, and page content SHALL remain unchanged
