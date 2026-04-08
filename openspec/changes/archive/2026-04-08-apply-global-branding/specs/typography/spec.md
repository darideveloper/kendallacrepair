# Spec Delta: Typography

## ADDED Requirements

### Requirement: Variable Font Loading
The application SHALL load variable fonts to support all weights with minimal network overhead.

#### Scenario: Loading Plus Jakarta Sans
- Given the `@fontsource-variable/plus-jakarta-sans` package is installed
- When the application is built
- Then the variable font files should be included in the bundle

#### Scenario: Loading DM Sans
- Given the `@fontsource-variable/dm-sans` package is installed
- When the application is built
- Then the variable font files should be included in the bundle
