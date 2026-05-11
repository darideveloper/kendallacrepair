## ADDED Requirements

### Requirement: Urgency Banner Translation Keys
The system SHALL provide translated text for the urgency banner component via the `ui.emergency_call_banner` key.

#### Scenario: Urgency Banner Spanish copy
- Given the `src/messages/es.json` file
- When the `UrgencyBanner` component renders in Spanish
- Then the `ui.emergency_call_banner` value SHALL be: `⚡ EMERGENCIA 24/7 — TOCA PARA LLAMAR ☎️ (305) 306-4511`

#### Scenario: Urgency Banner English copy
- Given the `src/messages/en.json` file
- When the `UrgencyBanner` component renders in English
- Then the `ui.emergency_call_banner` value SHALL be: `⚡ 24/7 EMERGENCY — TAP TO CALL ☎️ (305) 306-4511`
