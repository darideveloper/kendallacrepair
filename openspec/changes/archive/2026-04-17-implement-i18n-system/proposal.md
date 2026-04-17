# Proposal: Implement i18n System (EN/ES)

## Problem
The current project is hardcoded in Spanish (mostly) and English, making it difficult to maintain and lacking a proper multi-language structure. To improve SEO and reach both English and Spanish speaking customers in Kendall, a robust i18n system is required.

## Proposed Solution
Implement a custom i18n system for Astro as described in the project documentation (`docs/i18n.md`). This includes:
- Centralized translation files in JSON.
- Core i18n logic (routing, translation utility, language detection).
- A dynamic router (`[...path].astro`) to handle localized paths without duplicating files.
- Refactoring components to consume translations via a `lang` prop.
- Build-time validation to ensure translation parity between languages.

## Change ID
`implement-i18n-system`

## Capabilities
- **i18n-core**: Base logic for message loading and translation utilities.
- **i18n-routing**: Dynamic routing and localized path generation.
- **i18n-content**: Migration of hardcoded strings to translation files and component updates.
- **i18n-validation**: Tooling to prevent missing translations during build.

## Expected Impact
- Full support for English (default) and Spanish languages.
- SEO improvements via localized URLs and hreflang tags.
- Easier maintenance of site content.
- Automated validation of content completeness across languages.
