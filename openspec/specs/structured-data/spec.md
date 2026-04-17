# structured-data Specification

## Purpose
TBD - created by archiving change optimize-seo-and-performance. Update Purpose after archive.
## Requirements
### Requirement: Local Business Schema
The system SHALL provide structured data for search engines to identify the business as an HVAC service provider in Kendall, FL.

#### Scenario: HVACBusiness JSON-LD
- Given the `BaseSEO.astro` component
- When the page is rendered
- Then it SHALL inject a `<script type="application/ld+json">` block
- And the JSON content SHALL include `@type: "HVACBusiness"`
- And it SHALL include `name`, `url`, `telephone`, and `address` from `SITE` constants
- And it SHALL include `serviceArea` matching the localized neighborhoods list.

### Requirement: Breadcrumb Schema
The system SHALL provide breadcrumb structured data to enhance SERP results.

#### Scenario: BreadcrumbList JSON-LD
- Given a non-home page (e.g., Thank You)
- When the page is rendered
- Then it SHALL include a `BreadcrumbList` schema in the JSON-LD block
- And it SHALL correctly map the path from Home to the current page.

