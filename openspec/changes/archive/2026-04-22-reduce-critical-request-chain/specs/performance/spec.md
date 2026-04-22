## ADDED Requirements

### Requirement: Critical Request Chain Reduction
The system SHALL avoid unnecessary critical request chains during initial navigation by excluding non-rendered route assets and exposing critical same-origin font resources early.

#### Scenario: Homepage excludes 404-only CSS
- **WHEN** the production homepage HTML is generated
- **THEN** it SHALL NOT reference a `NotFound.*.css` stylesheet

#### Scenario: Spanish homepage excludes 404-only CSS
- **WHEN** the production Spanish homepage HTML is generated
- **THEN** it SHALL NOT reference a `NotFound.*.css` stylesheet

#### Scenario: Thank-you pages exclude 404-only CSS
- **WHEN** the production English and Spanish thank-you page HTML is generated
- **THEN** neither page SHALL reference a `NotFound.*.css` stylesheet

#### Scenario: Critical fonts are discoverable early
- **WHEN** the production document head is generated for initial navigation pages
- **THEN** the existing Plus Jakarta Sans and DM Sans variable font resources SHALL be discoverable before any non-rendered route stylesheet dependency

#### Scenario: No unnecessary preconnect origins
- **WHEN** performance hints are rendered in the document head
- **THEN** they SHALL NOT add extra preconnect origins beyond origins that are required by initial page rendering

#### Scenario: 404 routes remain functional
- **WHEN** the production 404 pages are generated
- **THEN** `/404` and `/es/404` SHALL preserve their existing route behavior

#### Scenario: Visual output remains unchanged
- **WHEN** critical request chain reduction is implemented
- **THEN** visible UI, layout, typography families, copy, translations, metadata behavior, and page content SHALL remain unchanged
