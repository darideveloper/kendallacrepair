# Spec Delta: Company Phone Number Configuration

This delta updates the site-wide configuration requirements for the company phone number.

## ADDED Requirements
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
