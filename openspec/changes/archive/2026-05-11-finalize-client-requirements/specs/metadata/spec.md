## MODIFIED Requirements

### Requirement: Social Sharing Metadata
The system SHALL provide high-quality social sharing previews with branded images and localized titles/descriptions.

#### Scenario: Open Graph and Twitter Cards
- Given the `BaseSEO.astro` component
- When the page is rendered
- Then it SHALL include `og:image` and `twitter:image` tags
- And the image URL SHALL point to a branded project asset (e.g., logo or hero banner)
- And it SHALL include `og:title`, `og:description`, `twitter:title`, and `twitter:description` using localized values
- And it SHALL include `og:site_name`, `twitter:site`, and `twitter:creator` metadata.

#### Scenario: Home page meta description updated per client spec
- **GIVEN** the `BaseSEO.astro` component renders the English home page
- **WHEN** the `<meta name="description">` tag is inspected
- **THEN** its `content` SHALL be: `"AC Repair Kendall FL — Same-day service, free estimates, 24/7 emergency. Licensed technicians, se habla español. Call (305) 306-4511."`
