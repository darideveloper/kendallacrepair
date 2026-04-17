# Specification: i18n-validation

## ADDED Requirements

### Requirement: Translation Parity Check
A validation script must ensure that all keys present in the default language file (`en.json`) are also present in other language files (`es.json`).
#### Scenario: Missing Key Detection
Given a key `new_feature` added to `en.json`.
When running `npm run validate-i18n`.
Then the script must exit with an error if `new_feature` is missing from `es.json`.
