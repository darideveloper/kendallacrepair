## MODIFIED Requirements

### Requirement: Component Architecture for i18n
Components MUST follow strict i18n architecture.

#### Scenario: Decoupled UI Strings
- Given a UI component
- Then it MUST NOT contain hardcoded user-facing strings
- And all text MUST be retrieved via the translation utility
- And the component SHALL receive the `lang` prop to determine its context and display language.

#### Scenario: Compliance audit catches hardcoded strings
- **GIVEN** a full-page audit of all templates in both languages
- **WHEN** user-facing text is not wrapped in `t()`
- **THEN** it SHALL be identified as a violation
- **AND** the fix SHALL add the corresponding key to both `en.json` and `es.json`
- **AND** the fix SHALL replace the hardcoded string with `{t('key')}`

### Requirement: FAQ CTA Translation Data
The system SHALL provide translated text for the FAQ CTA section.

#### Scenario: FAQ CTA copy
- **WHEN** the FAQ CTA section is rendered
- **THEN** the text "Mas preguntas?" SHALL appear before the phone and WhatsApp links
- **AND** the phone link SHALL display `(305) 306-4511`
- **AND** the WhatsApp link SHALL display "escribenos por WhatsApp 💬"
- **AND** the connector between phone and WhatsApp SHALL be translatable via `faq.or`
- **AND** all copy SHALL be translatable via the i18n system

## ADDED Requirements

### Requirement: Proper Spanish Orthography
All Spanish translation values in `es.json` MUST use correct Spanish spelling including opening question marks (¿) and all required accent marks (tildes).

#### Scenario: Opening question marks in questions
- **GIVEN** the `es.json` file
- **WHEN** a value contains a question mark `?`
- **THEN** it MUST also include the opening question mark `¿`
- **AND** this applies to FAQ items, section titles, and form labels

#### Scenario: Accent marks on common words
- **GIVEN** the `es.json` file
- **WHEN** a Spanish word requires a written accent per RAE rules
- **THEN** it SHALL include the accent mark
- **AND** the following words MUST be verified: técnico, reparación, teléfono, diagnóstico, garantía, información, español, día, está, rápido, línea, bilingüe, cuánto, qué, llámanos, sección, área, inglés, cotización, diagnóstico, estandar→estándar, feriados→feriados (already correct)

### Requirement: Translation keys for component strings
The application SHALL provide translation keys for all component-level user-facing strings that are currently hardcoded.

#### Scenario: New keys in en.json and es.json
- **GIVEN** the `src/messages/en.json` and `src/messages/es.json` files
- **WHEN** the following keys exist in `en.json`
- **THEN** they MUST also exist in `es.json` with matching Spanish translations:
  - `faq.or` — "or" / "o"
  - `nav.language_label` — "Language" / "Idioma"
  - `ui.close_chat` — "Close chat" / "Cerrar chat"
  - `pages.404.call_support` — "Call Support" / "Llamar a Soporte"
  - `services.cta_call` — "Call" / "Llamar"


### Requirement: Testimonial englishSubtext removal
The `englishSubtext` field in `es.json` SHALL be removed as it leaks English text onto the Spanish page.

#### Scenario: No englishSubtext in es.json
- **GIVEN** the `es.json` file
- **WHEN** the testimonials section renders in Spanish
- **THEN** no English text SHALL appear as a subtext
- **AND** the `englishSubtext` field SHALL NOT exist in any testimonial item in `es.json`
