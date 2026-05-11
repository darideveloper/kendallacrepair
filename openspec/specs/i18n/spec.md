# Internationalization (i18n) Specification

## Purpose
The application SHALL support multiple languages (English and Spanish) using a centralized, type-safe, and SEO-friendly system.
## Requirements
### Requirement: Centralized Translation Management
The application SHALL store all user-facing strings in JSON files located in `src/messages/`.

#### Scenario: Message Storage
- Given the `src/messages/` directory
- When adding a new translation
- Then it MUST be added to both `en.json` and `es.json` with matching keys.

### Requirement: Translation Utility Features
The application SHALL provide a utility function `t()` to retrieve translations with specific features.

#### Scenario: Retrieval Features
- Given the `t()` utility
- Then it SHALL support dot notation (e.g., `t('global.nav.home')`) to access nested JSON objects
- And it SHALL fallback to the default language (`en`) if a key is missing in the requested language (e.g., `es`)
- And it SHALL support replacing placeholders with dynamic values (e.g., `t('welcome', { name: 'John' })`).

### Requirement: Dynamic Localized Routing
The application SHALL handle localized routing via a single catch-all dynamic router (`src/pages/[...path].astro`).

#### Scenario: Localized Slugs
- Given localized slugs for each language
- Then they SHALL be mapped to a "Page Key" in `src/lib/i18n/routes.ts`
- And the system MUST generate static paths for all supported languages at build time.

### Requirement: SEO and Accessibility
The application SHALL include proper SEO tags for all localized versions and set the correct HTML `lang` attribute.

#### Scenario: SEO i18n Tags
- Given a page rendered in any language
- Then it MUST include `<link rel="alternate" hreflang="...">` tags for all supported languages, including an `x-default` pointing to the English version
- And the `<html>` tag MUST have the correct `lang` attribute for the current page.

### Requirement: Validation Tooling
The application SHALL include a validation step to ensure translation files remain in sync.

#### Scenario: Build-time Validation
- Given the build process
- When `npm run validate-i18n` is executed
- Then the build SHALL fail if any keys present in the default language (`en.json`) are missing in any other supported language.

### Requirement: Component Architecture for i18n
Components MUST follow strict i18n architecture.

#### Scenario: Decoupled UI Strings
- Given a UI component
- Then it MUST NOT contain hardcoded user-facing strings
- And all text MUST be retrieved via the translation utility
- And the component SHALL receive the `lang` prop to determine its context and display language.

### Requirement: FAQ Item Content Translation
The system SHALL store all FAQ content in translation files with 10 Q&A pairs matching the approved client HTML.

#### Scenario: Spanish FAQ data
- **WHEN** the FAQ section renders in Spanish (`es.json`)
- **THEN** the `faq.items` array SHALL contain exactly 10 items
- **AND** the questions and answers SHALL match the copy from `ui-design/updates-client.html` lines 445-454
- **AND** section_tag SHALL be "PREGUNTAS FRECUENTES"
- **AND** section_title SHALL be "Preguntas? Tenemos Respuestas"

#### Scenario: English FAQ data
- **WHEN** the FAQ section renders in English (`en.json`)
- **THEN** the `faq.items` array SHALL contain exactly 10 items
- **AND** the questions SHALL be English translations of the Spanish originals
- **AND** the answers SHALL be English translations preserving the meaning and urgency of the Spanish copy

### Requirement: FAQ CTA Translation Data
The system SHALL provide translated text for the FAQ CTA section.

#### Scenario: FAQ CTA copy
- **WHEN** the FAQ CTA section is rendered
- **THEN** the text "Mas preguntas?" SHALL appear before the phone and WhatsApp links
- **AND** the phone link SHALL display `(305) 306-4511`
- **AND** the WhatsApp link SHALL display "escribenos por WhatsApp 💬"
- **AND** all copy SHALL be translatable via the i18n system

