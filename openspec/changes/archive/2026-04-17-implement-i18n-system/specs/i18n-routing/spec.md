# Specification: i18n-routing

## ADDED Requirements

### Requirement: Dynamic Path Generation
The system must generate static paths for all supported languages using a single catch-all router.
#### Scenario: Static Path Iteration
Given the `routes.ts` configuration.
When running the build.
Then Astro must generate `/` and `/es` for the home page.

### Requirement: Localized URL Mapping
Every page must have a unique identifier (Page Key) mapped to its localized slug.
#### Scenario: Slug Resolution
Given a Page Key `thank_you`.
When requesting the path for `es`.
Then the system must resolve it to `/es/gracias` (or the configured slug).

### Requirement: Hreflang SEO Support
Every localized page must include alternate links to other versions of the same page.
#### Scenario: SEO Alternates
Given the `/es` page.
When viewing the HTML source.
Then it must contain `<link rel="alternate" hreflang="en" href="/">`.
