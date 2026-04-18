# metadata Specification

## Purpose
TBD - created by archiving change optimize-seo-and-performance. Update Purpose after archive.
## Requirements
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

### Requirement: Favicon and App Icons
The system SHALL provide standard favicon and app icon declarations in the document head for maximum browser and device compatibility.

#### Scenario: Cross-browser favicon support
- Given the `Layout.astro` component
- When the page is rendered
- Then it SHALL include a `<link rel="icon" href="/favicon.ico" sizes="32x32">` tag as a fallback
- And it SHALL include a `<link rel="icon" href="/favicon.svg" type="image/svg+xml">` tag for modern browsers
- And it SHALL include a `<link rel="apple-touch-icon" href="/apple-touch-icon.png">` tag for iOS devices
- And it SHALL include a `<link rel="manifest" href="/site.webmanifest">` tag for Android and PWA support
- And it SHALL include a `<meta name="theme-color" content="#1A6FAF">` tag to match the branded brand color.

