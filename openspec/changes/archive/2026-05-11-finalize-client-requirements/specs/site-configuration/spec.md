## MODIFIED Requirements

### Requirement: Centralized Service Area Configuration
The application SHALL store geographic configuration in `src/constants/site.ts`, while localized names and labels SHALL be stored in translation files.

#### Scenario: Type-safe coverage constants
- Given the `src/constants/site.ts` file
- When defining `COVERAGE_BADGES` or `NEIGHBORHOODS`
- Then it SHALL use structural configuration (icons, categories) in the constant
- And localized labels SHALL be retrieved via the i18n system

#### Scenario: Map embed centered on Kendall
- **GIVEN** the `MAP_EMBED_URL` constant in `src/constants/site.ts`
- **WHEN** the Coverage section map renders
- **THEN** the URL SHALL use latitude `25.6793`, longitude `-80.3964`, and zoom level `12`
- **AND** the URL SHALL match: `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28740!2d-80.3964!3d25.6793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000`
- **AND** the coordinates SHALL center on Kendall, FL
