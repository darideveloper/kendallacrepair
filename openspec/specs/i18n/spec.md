# Internationalization (i18n) Specification

## Purpose
The application SHALL support multiple languages (English and Spanish) using a centralized, type-safe, and SEO-friendly system.

## Requirements

### Requirement: Centralized Translation Management
The application SHALL store all user-facing strings in JSON files located in `src/messages/`.
- **Scenario: Message Storage**: Given the `src/messages/` directory, when adding a new translation, it MUST be added to both `en.json` and `es.json` with matching keys.

### Requirement: Translation Utility Features
The application SHALL provide a utility function `t()` to retrieve translations with the following features:
- **Nested Key Support**: Support for dot notation (e.g., `t('global.nav.home')`) to access nested JSON objects.
- **Language Fallback**: If a key is missing in the requested language (e.g., `es`), the utility MUST return the value from the default language (`en`).
- **Variable Interpolation**: Support for replacing placeholders with dynamic values (e.g., `t('welcome', { name: 'John' })`).

### Requirement: Dynamic Localized Routing
The application SHALL handle localized routing via a single catch-all dynamic router (`src/pages/[...path].astro`).
- **Route Mapping**: Localized slugs for each language SHALL be mapped to a "Page Key" in `src/lib/i18n/routes.ts`.
- **Static Path Generation**: The system MUST generate static paths for all supported languages at build time. For example, the home page resolves to `/` (EN) and `/es` (ES).

### Requirement: SEO and Accessibility
The application SHALL include proper SEO tags for all localized versions and set the correct HTML `lang` attribute.
- **Hreflang Tags**: Every page MUST include `<link rel="alternate" hreflang="...">` tags for all supported languages, including an `x-default` pointing to the English version.
- **Lang Attribute**: The `<html>` tag MUST have the correct `lang` attribute for the current page.

### Requirement: Validation Tooling
The application SHALL include a validation step to ensure translation files remain in sync.
- **Build-time Validation**: The build process MUST run `npm run validate-i18n`. The build SHALL fail if any keys present in the default language (`en.json`) are missing in any other supported language.

### Requirement: Component Architecture for i18n
- **Decoupled UI Strings**: Components MUST NOT contain hardcoded user-facing strings; all text MUST be retrieved via the translation utility.
- **Prop-driven Localization**: Components SHALL receive the `lang` prop to determine their context and display language.
