## ADDED Requirements

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

### Requirement: FAQ CTA Translation Data
The system SHALL provide translated text for the FAQ CTA section.

#### Scenario: FAQ CTA copy
- **WHEN** the FAQ CTA section is rendered
- **THEN** the text "Mas preguntas?" SHALL appear before the phone and WhatsApp links
- **AND** the phone link SHALL display `(305) 306-4511`
- **AND** the WhatsApp link SHALL display "escribenos por WhatsApp 💬"
- **AND** all copy SHALL be translatable via the i18n system
