# Specification: i18n-content

## MODIFIED Requirements

### Requirement: Decoupled UI Strings
Components must not contain hardcoded user-facing strings in a specific language.
#### Scenario: String Migration
Given a component with `<h1>Reparación de AC</h1>`.
When applying i18n.
Then the string must be replaced with `{t('pages.home.hero.title')}`.

### Requirement: Prop-driven Localization
Atoms, molecules, and organisms must receive the `lang` prop to determine their display language.
#### Scenario: Prop Propagation
Given the `Header` component.
When rendered in the Spanish route.
Then it must receive `lang="es"` and display Spanish navigation links.
