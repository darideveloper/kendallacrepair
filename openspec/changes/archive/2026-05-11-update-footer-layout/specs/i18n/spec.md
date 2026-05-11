## MODIFIED Requirements

### Requirement: Centralized Translation Management
The application SHALL store all user-facing strings in JSON files located in `src/messages/`.

#### Scenario: Footer Translation Keys
- **GIVEN** the `src/messages/` directory
- **WHEN** adding or updating Footer translations
- **THEN** the following keys MUST be present in both `en.json` and `es.json` with matching structures:
  - `footer.about` — Full 2-sentence about text explaining the service coordinator model
    - English: "Connecting homeowners in Kendall with licensed and insured AC technicians. We're not an AC company — we're your service coordinator, making sure the best available technician arrives at your door as fast as possible."
    - Spanish: "Conectamos a los dueños de casa en Kendall con técnicos de AC licenciados y asegurados. No somos una compañía de AC — somos tu coordinador de servicio, asegurándonos de que el mejor técnico disponible llegue a tu puerta lo más rápido posible."
  - `footer.services_title` — Column heading
  - `footer.areas_title` — Column heading
  - `footer.privacy` — Link text
  - `footer.terms` — Link text
- **AND** the `neighborhoods` array in both languages SHALL include "Pinecrest" as the 8th entry
