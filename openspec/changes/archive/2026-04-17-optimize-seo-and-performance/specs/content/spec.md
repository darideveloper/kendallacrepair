# Spec: Content and Pages

## ADDED Requirements

### Requirement: 404 Page Optimization
The system SHALL provide a custom 404 page that provides clear signals to search engines and helps users navigate back to functional parts of the site.

#### Scenario: Custom 404 Page
- Given a user visits a non-existent URL
- When the page is rendered
- Then it SHALL display a localized "Page Not Found" message
- And it SHALL include a link to return to the Home page
- And it SHALL use the same `Layout.astro` as the rest of the site to maintain branding.

### Requirement: RSS Feed Generation
The system SHALL provide an RSS feed to help with content indexation and distribution.

#### Scenario: RSS Feed Endpoint
- Given the site is deployed
- When the endpoint `/rss.xml` is accessed
- Then it SHALL return a valid RSS 2.0 feed
- And the feed SHALL include site metadata (title, description) and links to main service categories.
