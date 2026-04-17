# site-configuration Specification

## Purpose
TBD - created by archiving change implement-coverage-section. Update Purpose after archive.
## Requirements
### Requirement: Centralized Service Area Configuration
The application SHALL store geographic configuration in `src/constants/site.ts`, while localized names and labels SHALL be stored in translation files.

#### Scenario: Type-safe coverage constants
- Given the `src/constants/site.ts` file
- When defining `COVERAGE_BADGES` or `NEIGHBORHOODS`
- Then it SHALL use structural configuration (icons, categories) in the constant
- And localized labels SHALL be retrieved via the i18n system

### Requirement: Centralized Services Configuration
The application SHALL store service-related structural data (images, icons) in a centralized configuration file.

#### Scenario: Type-safe services configuration
- Given the `src/constants/site.ts` file
- When defining `FEATURED_SERVICES` and `DETAILED_SERVICES`
- Then it SHALL include image metadata and icon definitions
- And all user-facing text for these services SHALL be managed via translation files

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

