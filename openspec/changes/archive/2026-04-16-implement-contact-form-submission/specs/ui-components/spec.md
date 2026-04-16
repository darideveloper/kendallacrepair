# ui-components Specification

## MODIFIED Requirements
### Requirement: Contact Form Molecule
The application SHALL provide a `HeroForm.astro` component to capture user inquiries using native HTML submission.

#### Scenario: Native form submission behavior
- Given a `HeroForm.astro` component
- When the user submits the form
- Then the browser SHALL perform a native `POST` request to the `apiEndpoint`
- And the application SHALL NOT intercept the submission with client-side JavaScript `fetch` calls

#### Scenario: Form submission redirection
- Given the `HeroForm.astro` is submitted via native HTML `POST`
- When the submission is processed by the backend
- Then the application SHALL redirect the user to `/thank-you` via the server-side redirect response
- And the application SHALL provide a valid page at `/thank-you`

## ADDED Requirements
### Requirement: Contact Form API Integration
The application SHALL provide API integration for the contact form to submit data securely and reliably.

#### Scenario: Form payload structure
- Given a `HeroForm.astro` component
- When the user submits the form
- Then it SHALL send the payload via `POST` as `multipart/form-data`
- And it SHALL include the hidden fields `api_key`, `user`, `subject`, and `redirect` mapped from environment variables
- And it SHALL include user-provided data `name`, `phone`, `email`, and `message`
