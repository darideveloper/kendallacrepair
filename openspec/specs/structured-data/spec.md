# structured-data Specification

## Purpose
The structured data specification defines the requirements for injecting Schema.org JSON-LD blocks into the website to improve SEO and search engine visibility.
## Requirements
### Requirement: Local Business Schema
The system SHALL provide structured data for search engines to identify the business as an HVAC service provider in Kendall, FL.

#### Scenario: HVACBusiness JSON-LD
- Given the `BaseSEO.astro` component
- When the page is rendered
- Then it SHALL inject a `<script type="application/ld+json">` block
- And the JSON content SHALL include `@type: "HVACBusiness"`
- And it SHALL include `name`, `url`, `telephone`, and `address` from `SITE` constants
- And it SHALL include `areaServed` matching the localized neighborhoods list.
- And it SHALL include a square business `image`.

### Requirement: Service Catalog Schema
The system SHALL provide a structured catalog of services within the JSON-LD block.

#### Scenario: OfferCatalog JSON-LD
- Given the `BaseSEO.astro` component
- When the page is rendered
- Then the `hasOfferCatalog` property SHALL include an `itemListElement` array
- And each element in the array SHALL be a `ListItem`
- And each `ListItem` SHALL include a `position` property starting from 1
- And each `ListItem` SHALL include an `item` property containing an `Offer` object.

### Requirement: Breadcrumb Schema
The system SHALL provide breadcrumb structured data to enhance SERP results.

#### Scenario: BreadcrumbList JSON-LD
- Given a non-home page (e.g., Thank You)
- When the page is rendered
- Then it SHALL include a `BreadcrumbList` schema in the JSON-LD block
- And it SHALL correctly map the path from Home to the current page.

### Requirement: The system SHALL provide FAQPage structured data as JSON-LD in the document `<head>`.
A dedicated `application/ld+json` script block SHALL be injected into the page head containing all FAQ question-answer pairs marked up as FAQPage schema.

#### Scenario: FAQPage JSON-LD renders with all 10 items
- **GIVEN** the FAQ section renders with 10 Q&A items
- **WHEN** the page head is inspected
- **THEN** a `<script type="application/ld+json">` block SHALL exist with `@type: "FAQPage"`
- **AND** it SHALL contain a `mainEntity` array with 10 entries
- **AND** each entry SHALL have `@type: "Question"` with `name` (question) and `acceptedAnswer` (answer)
- **AND** questions and answers SHALL use localized values from the current language

