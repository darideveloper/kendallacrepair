# Capability: Services Section Alignment

## ADDED Requirements

### Requirement: Services Structure
The Services section SHALL match the provided HTML structure and class names.

#### Scenario: Verify Structure
- Given the `Services.astro` component
- When rendered
- Then it should have a section with class `svc`
- And it should contain a container with class `si`
- And it should contain a header with class `sh`
- And it should contain a tag with class `st`
- And it should contain a grid with class `sg`

### Requirement: Featured Service Cards
Service cards SHALL include a CTA link and match the `sc` structure.

#### Scenario: Verify Featured Card
- Given a `ServiceCard.astro` instance
- When rendered
- Then it should have a wrapper with class `sc`
- And it should contain an image with class `si2`
- And it should contain a body with class `sb`
- And it should contain a CTA link with class `sc-cta` pointing to the company phone number

### Requirement: Detailed Services Grid
The detailed services SHALL be presented in a 2-column grid of 6 cards instead of an accordion.

#### Scenario: Verify Detailed Grid
- Given the `Services.astro` component
- When rendered
- Then it should contain a grid with exactly 6 cards
- And each card should have a colored left border corresponding to its category
- And each card should display a title and a list of items

### Requirement: Multi-language Support
All content MUST be sourced from the i18n system.

#### Scenario: Verify Translations
- Given the project translation files (`en.json`, `es.json`)
- When the Services section is rendered in Spanish
- Then it should display the Spanish marketing copy provided in the design
- When rendered in English
- Then it should display the corresponding English translations
