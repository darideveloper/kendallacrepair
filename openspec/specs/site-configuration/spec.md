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

### Requirement: Environment Variable Configuration
The application SHALL utilize environment variables to securely store and inject API credentials and endpoints for form submission.

#### Scenario: Contact form environment variables
- Given the application build or runtime
- When evaluating environment variables
- Then it SHALL expect `CONTACT_FORM_ENDPOINT`, `CONTACT_FORM_USER`, `CONTACT_FORM_API_KEY`, and `SITE_URL` to be defined
- And these variables SHALL be documented in a `.env.example` file

### Requirement: Centralized Configuration for Company Phone Number
The application SHALL use a centralized configuration for the company phone number.

#### Scenario: Update company phone number site-wide
- **Given** the `SITE` configuration object in `src/constants/site.ts`.
- **When** the `phone` and `whatsapp` properties are updated.
- **Then** all components referencing these values (e.g., `Header`, `Hero`, `Footer`, `WhatsAppButton`) MUST reflect the new number.
- **And** the new number MUST be `(305) 306-4511` for display and `+13053064511` for links.

### Requirement: SVG Logo Asset Phone Number Display
The SVG logo assets SHALL display the correct company phone number as text.

#### Scenario: SVG logos render the updated phone number
- **Given** the `logo-stacked-color.svg` or `logo-stacked-white.svg` files in `public/images/logos/`.
- **When** these assets are rendered in the browser.
- **Then** the embedded text content MUST display `(305) 306-4511`.

