## ADDED Requirements
### Requirement: Centralized FAQ Data
The application SHALL store all FAQ data in a centralized configuration file with strict type safety.

#### Scenario: Type-safe FAQ constants
- **WHEN** adding FAQ section data to `src/constants/site.ts`
- **THEN** it SHALL define an interface `FAQItem` with `question` and `answer` string properties
- **AND** the `FAQ_ITEMS` constant SHALL be strictly typed using that interface
