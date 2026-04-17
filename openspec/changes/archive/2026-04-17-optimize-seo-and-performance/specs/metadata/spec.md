# Spec: Metadata Optimization

## ADDED Requirements

### Requirement: Social Sharing Metadata
The system SHALL provide high-quality social sharing previews with branded images and localized titles/descriptions.

#### Scenario: Open Graph and Twitter Cards
- Given the `BaseSEO.astro` component
- When the page is rendered
- Then it SHALL include `og:image` and `twitter:image` tags
- And the image URL SHALL point to a branded project asset (e.g., logo or hero banner)
- And it SHALL include `og:title`, `og:description`, `twitter:title`, and `twitter:description` using localized values
- And it SHALL include `og:site_name`, `twitter:site`, and `twitter:creator` metadata.

### Requirement: Title Tagline Strategy
The system SHALL provide localized titles with branding for non-home pages.

#### Scenario: Dynamic Title with Tagline
- Given a non-home page (e.g., Thank You)
- When the page is rendered
- Then the `<title>` tag SHALL follow the pattern `[Localized Page Title] | [Business Name]`
- And the Home page SHALL use its primary localized title without the additional tagline.

### Requirement: Canonical and Hreflang
The system SHALL correctly identify the canonical version of each page and provide localized alternatives to prevent duplicate content issues.

#### Scenario: Hreflang x-default
- Given a page rendered in English or Spanish
- When the head is inspected
- Then it SHALL include a `<link rel="alternate" hreflang="x-default" ...>` pointing to the English version of the current page.
