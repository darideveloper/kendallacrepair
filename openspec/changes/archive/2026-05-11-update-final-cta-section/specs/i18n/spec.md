## MODIFIED Requirements

### Requirement: Centralized Translation Management
The application SHALL store all user-facing strings in JSON files located in `src/messages/`.

#### Scenario: FinalCTA Translation Keys
- Given the `src/messages/` directory
- When adding or updating FinalCTA translations
- Then the following keys MUST be present in both `en.json` and `es.json` with matching structures:
    - `final_cta.available_agents` — Availability indicator text (e.g., "Available now — agents attending" / "Disponible ahora — agentes atendiendo")
    - `final_cta.title` — Heading text (e.g., "Your AC Broken? Don't Wait Until Tomorrow." / "Tu AC esta Roto? No Esperes Hasta Manana.")
    - `final_cta.benefits` — Subtitle text (e.g., "Free estimates &bull; Same-day service &bull; Available 24/7" / "Estimados gratis &bull; Servicio el mismo dia &bull; Disponible 24/7")
    - `final_cta.cta_whatsapp` — WhatsApp button text (e.g., "WhatsApp")
