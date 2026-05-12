## ADDED Requirements

### Requirement: The system SHALL provide FAQPage structured data as JSON-LD in the document `<head>`.
A dedicated `application/ld+json` script block SHALL be injected into the page head containing all FAQ question-answer pairs marked up as FAQPage schema.

#### Scenario: FAQPage JSON-LD renders with all 10 items
- **GIVEN** the FAQ section renders with 10 Q&A items
- **WHEN** the page head is inspected
- **THEN** a `<script type="application/ld+json">` block SHALL exist with `@type: "FAQPage"`
- **AND** it SHALL contain a `mainEntity` array with 10 entries
- **AND** each entry SHALL have `@type: "Question"` with `name` (question) and `acceptedAnswer` (answer)
- **AND** questions and answers SHALL use localized values from the current language
