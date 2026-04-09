# site-configuration Specification Delta

## MODIFIED Requirements

### Requirement: Centralized Service Area Data
The application SHALL store all geographic and service area data in a centralized configuration file with strict type safety.

#### Scenario: Type-safe coverage constants
- Given the `src/constants/site.ts` file
- When adding coverage section data
- Then it SHALL define an interface `CoverageBadgeData` using `IconName` from `Icon.astro`
- And the `COVERAGE_BADGES` constant SHALL be strictly typed using that interface
