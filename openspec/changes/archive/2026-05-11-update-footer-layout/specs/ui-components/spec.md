## MODIFIED Requirements

### Requirement: Footer component integration
The Layout component MUST include the global footer component. The Footer component SHALL render as a 4-column layout with About, Services, Service Areas, and Information columns, displaying specific content for each section.

#### Scenario: Integrate Footer in Layout
Update `src/layouts/Layout.astro` to import and render the `Footer` component.
- Import `Footer` from `../components/organisms/Footer.astro`.
- Place `<Footer />` immediately after the closing `</main>` tag, before the global floating elements.

#### Scenario: Footer displays 4 columns
- **GIVEN** the Footer component renders
- **THEN** it SHALL display a 4-column grid layout with columns: About, Services, Service Areas, Information
- **AND** the grid SHALL collapse to a single column on mobile (`grid-cols-1`)
- **AND** the grid SHALL expand to 4 columns on desktop (`md:grid-cols-[1.5fr_1fr_1fr_1fr]`)

#### Scenario: About column content
- **GIVEN** the first column of the footer
- **THEN** it SHALL contain the full SVG logo (KENDALL AC REPAIRS)
- **AND** it SHALL contain the about paragraph explaining the service coordinator model (translated via i18n)
- **AND** it SHALL contain the phone number link with the number "(305) 306-4511"

#### Scenario: Services column content
- **GIVEN** the second column of the footer
- **THEN** it SHALL have a heading "Services" ("Servicios" in Spanish) translated via i18n
- **AND** it SHALL list the featured services as links (AC Repair, Emergency, Installation, Maintenance)

#### Scenario: Service Areas column content
- **GIVEN** the third column of the footer
- **THEN** it SHALL have a heading "Service Areas" ("Áreas de Servicio" in Spanish) translated via i18n
- **AND** it SHALL display the service areas in 4 lines with 2 areas per line, separated by bullets
- **AND** the areas SHALL include Kendall, The Hammocks, Kendale Lakes, Tamiami, Country Walk, Three Lakes, Richmond West, and Pinecrest

#### Scenario: Information column content
- **GIVEN** the fourth column of the footer
- **THEN** it SHALL have a heading "Informacion" ("Information" in English)
- **AND** it SHALL display: hours (24/7 Emergencias), license (Florida CAC#), insurance ($1M cobertura), "Se habla espanol"
- **AND** it SHALL display "Privacidad" and "Terminos" links ("Privacy" / "Terms" in English) separated by a bullet

#### Scenario: Bottom bar content
- **GIVEN** the footer bottom bar
- **THEN** it SHALL display the copyright line: "© {year} Kendall AC Repairs. DHY Solutions LLC."
- **AND** it SHALL display "kendallacrepairs.com" on the right side
- **AND** it SHALL NOT contain a "Powered by" credit
- **AND** it SHALL NOT contain a version badge (e.g., "V 1.8")

#### Scenario: Logo SVG dimensions
- **GIVEN** the logo SVG in the footer
- **THEN** it SHALL render at width 360 and height 80 (as specified in the reference HTML)
- **AND** the SVG SHALL use `font-family="'Plus Jakarta Sans','Segoe UI',system-ui,sans-serif"`
