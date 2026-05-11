# Proposal: Align Testimonials Section with High-Conversion Design

## Problem
The current Testimonials section is a simplified version of the desired high-conversion design. It lacks key trust signals (Google rating counter, verification badges) and detailed customer feedback that are present in the target HTML snippet.

## Proposed Solution
Update the `Testimonials` organism and `TestimonialCard` molecule to support the additional structural elements and metadata required by the target design. This includes adding a Google Review counter, verification badges, and timestamps for each review. The i18n data will also be expanded to include the richer testimonial text.

## Scope
- `src/messages/es.json` & `src/messages/en.json`: Update testimonial content and add metadata fields (timestamp).
- `src/components/organisms/Testimonials.astro`: Add Google Review counter block.
- `src/components/molecules/TestimonialCard.astro`: Add verification badge, bold author names, and combined location/time/timestamp display.
- `src/constants/site.ts`: Update types to include optional timestamp and verification fields.

## Alternatives Considered
- Hardcoding the content: Rejected in favor of maintaining i18n support.
- Creating a new component: Rejected as the current components can be easily extended to match the design.
