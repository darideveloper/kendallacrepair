# Spec Delta: Fix JSON-LD Warnings

## MODIFIED Requirements

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

## ADDED Requirements

### Requirement: Service Catalog Schema
The system SHALL provide a structured catalog of services within the JSON-LD block.

#### Scenario: OfferCatalog JSON-LD
- Given the `BaseSEO.astro` component
- When the page is rendered
- Then the `hasOfferCatalog` property SHALL include an `itemListElement` array
- And each element in the array SHALL be a `ListItem`
- And each `ListItem` SHALL include a `position` property starting from 1
- And each `ListItem` SHALL include an `item` property containing an `Offer` object.
