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

