# Specification: i18n-core

## ADDED Requirements

### Requirement: Centralized Translation Management
All user-facing text must be stored in JSON files organized by language code.
#### Scenario: Message Storage
Given the `src/messages/` directory.
When adding a new translation.
Then it must be added to both `en.json` and `es.json` with matching keys.

### Requirement: Nested Key Support
The translation utility must support dot notation to access nested objects in the JSON files.
#### Scenario: Accessing Nested Keys
Given a JSON structure `{"global": {"nav": {"home": "Home"}}}`.
When calling `t('global.nav.home')`.
Then the function must return `"Home"`.

### Requirement: Language Fallback
If a key is missing in the requested language (e.g., `es`), the utility must return the value from the default language (`en`).
#### Scenario: Missing Translation Fallback
Given a key `only_in_en` present in `en.json` but missing in `es.json`.
When calling `t('only_in_en', 'es')`.
Then the function must return the value from `en.json`.

### Requirement: Variable Interpolation
The translation utility must support replacing placeholders with dynamic values.
#### Scenario: Dynamic Data in Translations
Given a translation `"Welcome {name}"`.
When calling `t('welcome_msg', { name: 'John' })`.
Then the function must return `"Welcome John"`.
