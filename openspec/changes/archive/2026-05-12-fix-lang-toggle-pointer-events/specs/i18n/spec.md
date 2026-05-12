## MODIFIED Requirements

### Requirement: Dynamic Localized Routing
The application SHALL handle localized routing via a single catch-all dynamic router (`src/pages/[...path].astro`).

#### Scenario: Localized Slugs
- Given localized slugs for each language
- Then they SHALL be mapped to a "Page Key" in `src/lib/i18n/routes.ts`
- And the system MUST generate static paths for all supported languages at build time.

#### Scenario: Language toggle navigates bidirectionally
- **GIVEN** the `LangToggle` component renders on any page
- **WHEN** the user clicks a language button for a language different from the current `lang` prop
- **THEN** the browser SHALL navigate to the localized path for that language
- **AND** the active language button SHALL have `pointer-events-none` applied so it is non-interactive
- **AND** the inactive language button SHALL NOT have `pointer-events-none` so it is clickable
