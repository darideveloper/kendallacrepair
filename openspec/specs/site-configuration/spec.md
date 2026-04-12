# site-configuration Specification

## Purpose
TBD - created by archiving change implement-coverage-section. Update Purpose after archive.
## Requirements
### Requirement: Centralized Service Area Data
The application SHALL store all geographic and service area data in a centralized configuration file with strict type safety.

#### Scenario: Type-safe coverage constants
- Given the `src/constants/site.ts` file
- When adding coverage section data
- Then it SHALL define an interface `CoverageBadgeData` using `IconName` from `Icon.astro`
- And the `COVERAGE_BADGES` constant SHALL be strictly typed using that interface

### Requirement: Centralized Services Data
The application SHALL store all service-related information in a centralized configuration file with strict type safety.

#### Scenario: Type-safe services configuration
- Given the `src/constants/site.ts` file
- When defining `FEATURED_SERVICES` and `DETAILED_SERVICES`
- Then it SHALL use specialized interfaces to define the structure of each object
- And it SHALL include `iconName` (using `IconName` from `Icon.astro`) and image paths for all services

### Requirement: How It Works Content Configuration
The site configuration SHALL include the content for the "How it works" steps.

#### Scenario: Access how it works steps
- **WHEN** the site constants are accessed
- **THEN** the `HOW_IT_WORKS_STEPS` array is available containing the title and description for each step.

### Requirement: Centralized FAQ Data
The application SHALL store all FAQ data in a centralized configuration file with strict type safety.

#### Scenario: Type-safe FAQ constants
- **WHEN** adding FAQ section data to `src/constants/site.ts`
- **THEN** it SHALL define an interface `FAQItem` with `question` and `answer` string properties
- **AND** the `FAQ_ITEMS` constant SHALL be strictly typed using that interface

