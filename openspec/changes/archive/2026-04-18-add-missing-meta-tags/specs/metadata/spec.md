# metadata Spec Delta

## MODIFIED Requirements

### Requirement: Standard HTML Meta Tags
The system SHALL provide standard HTML meta tags for improved SEO and browser metadata.

#### Scenario: Keywords and Author
- Given the `BaseSEO.astro` component
- When the page is rendered
- Then it SHALL include a `<meta name="keywords" ...>` tag with localized keywords
- And it SHALL include a `<meta name="author" ...>` tag with the business name.

#### Scenario: Robots and Language
- Given the `BaseSEO.astro` component
- When the page is rendered
- Then it SHALL include a `<meta name="robots" content="index, follow">` tag
- And it SHALL include a `<meta name="language" ...>` tag with the localized language name (e.g., "English" or "Spanish").
