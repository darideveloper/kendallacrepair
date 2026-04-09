# site-configuration Specification Delta

## ADDED Requirements

### Requirement: Centralized Services Data
The application SHALL store all service-related information in a centralized configuration file with strict type safety.

#### Scenario: Type-safe services configuration
- Given the `src/constants/site.ts` file
- When defining `FEATURED_SERVICES` and `DETAILED_SERVICES`
- Then it SHALL use specialized interfaces to define the structure of each object
- And it SHALL include `iconName` (using `IconName` from `Icon.astro`) and image paths for all services
