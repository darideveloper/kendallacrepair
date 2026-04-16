# Design: Native HTML Contact Form Submission

## Overview
This change implements a "vanilla" HTML `POST` submission for the `HeroForm.astro` component, bypassing any client-side JavaScript libraries or manual `fetch` calls.

## Technical Details

### Form Attributes
The `<form>` element in `HeroForm.astro` is configured as follows:
- `method="POST"`: Sends data to the server as a POST request.
- `action={apiEndpoint}`: The target endpoint for form processing.
- `enctype="multipart/form-data"`: Recommended for compatibility with most contact form processors.

### Hidden Input Fields
The following fields are required by the backend to process the request:
- `api_key`: Backend-specific authentication token.
- `user`: Account/Organization identifier.
- `subject`: The subject of the email to be sent.
- `redirect`: The **absolute** URL for the browser to redirect to upon success.

### Redirection Strategy
- Redirection is handled by the backend server's response (typically a `302 Found` or `303 See Other`).
- The `redirect` parameter must be an absolute URL (e.g., `https://kendallacrepair.com/thank-you`) because the submission is made to a different domain.

## Elimination of Complexity
By removing the `<script>` block entirely, we:
- Avoid intercepting the `submit` event.
- Rely on the browser's native form state management.
- Delegate UI feedback (redirects) back to standard HTTP headers.

## Trade-offs
- **Page Transitions**: Instead of a silent AJAX request, the user will experience a standard page transition. This is appropriate for a contact form leading to a "Thank You" page.
