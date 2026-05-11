## MODIFIED Requirements

### Requirement: Centralized FAQ Data
The application SHALL store all FAQ data in translation files (`src/messages/*.json`) with type-safe `FAQItem` interface usage.

#### Scenario: Type-safe FAQ constants
- **WHEN** adding FAQ section data to translation files
- **THEN** each FAQ item SHALL define `question` and `answer` string properties
- **AND** the `FAQ_ITEMS_COUNT` constant in `src/constants/site.ts` SHALL be set to `10`
- **AND** each language file SHALL contain exactly 10 FAQ items
- **AND** the first FAQ item SHALL start with the `open` class by default when rendered
