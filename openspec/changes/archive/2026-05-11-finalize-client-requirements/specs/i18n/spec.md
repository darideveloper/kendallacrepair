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

#### Scenario: Badge subtitle keys updated
- **GIVEN** the `src/messages/en.json` file
- **WHEN** the Coverage section renders badges
- **THEN** `badges.estimates.subtitle` SHALL be `"$0 service call"`
- **AND** `badges.emergency.subtitle` SHALL be `"Response in 60 min"`

#### Scenario: Footer info column translation keys added
- **GIVEN** the footer translation keys in `src/messages/en.json` and `src/messages/es.json`
- **WHEN** the Footer component renders the Information column
- **THEN** `footer.hours` SHALL exist with EN text `"Hours: 24/7 Emergency Service"` and ES text `"Horario: 24/7 Emergencias"`
- **AND** `footer.license` SHALL exist with EN text `"License: Florida State CAC# (pending)"` and ES text `"Licencia: Florida CAC# (pendiente)"`
- **AND** `footer.insurance` SHALL exist with EN text `"Insurance: $1M Liability"` and ES text `"Seguro: $1M cobertura"`
- **AND** `footer.languages` SHALL exist with EN text `"Languages: English · Español"` and ES text `"Idiomas: English · Español"`

#### Scenario: Home page meta description updated
- **GIVEN** the `pages.home.description` key in `en.json`
- **WHEN** the home page renders in English
- **THEN** the value SHALL be: `"AC Repair Kendall FL — Same-day service, free estimates, 24/7 emergency. Licensed technicians, se habla español. Call (305) 306-4511."`

#### Scenario: Nav availability key added
- **GIVEN** the navigation translation keys in both language files
- **WHEN** the Header component renders the availability indicator
- **THEN** `nav.open` SHALL exist with EN text `"Open"` and ES text `"Disponible"`

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

#### Scenario: FAQ items in correct order
- **GIVEN** the `faq.items` array in translation files
- **WHEN** the FAQ section renders
- **THEN** items 1-4 SHALL be the original questions: cost, emergency service, licensed technicians, areas covered
- **AND** items 5-10 SHALL be the new questions: Spanish, arrival time, diagnostic charge, all brands, warranty, financing
