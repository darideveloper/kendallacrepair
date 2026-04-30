# Proposal: Maintenance Screen Page

## What Changes
Create a dedicated `/maintenance` page that serves as a full-screen maintenance screen. This new section will not use the standard site header and footer, nor will it contain any contact information or interactive buttons. It will match the current site's visual language by reusing existing components and styles. It will display a primary "On Maintenance" heading in English, immediately followed by the same message translated to Spanish in a smaller font size.

## Why
The business requires a maintenance page that the server infrastructure can redirect traffic to when the site is put into maintenance mode. A dedicated full-screen page provides a cleaner, distraction-free experience without the standard navigation elements, ensuring users clearly understand the site's status. Because the business will not be accessible during this time, all contact methods must be removed from this page.

## Context
- The site is a static export (Astro).
- The server/infrastructure level will handle the routing and domain validation to determine when this page is served.
- This application only needs to provide the visual `/maintenance` page asset.
- The business serves a bilingual audience (English and Spanish), making the bilingual heading necessary.
- **Strict Requirement:** No contact information, phone numbers, or contact buttons should be present on this screen.

## Success Criteria
- [ ] The `/maintenance` page is accessible and renders correctly.
- [ ] The page is full screen and does not display the standard header, footer, or floating action buttons.
- [ ] The page contains absolutely no contact information or buttons.
- [ ] The maintenance screen visually matches the `Hero` section style.
- [ ] The screen features an `h1` indicating maintenance, with a smaller Spanish translation directly below it.
