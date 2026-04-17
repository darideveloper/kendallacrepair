# ui-components Spec Delta: implement-testimonial-photos

## ADDED Requirements

### Requirement: Testimonial Photo Support
The `TestimonialCard.astro` component SHALL support displaying a customer profile photo with a fallback to text-based initials.

#### Scenario: Display profile image
- Given a `TestimonialCard.astro` component
- When it is rendered with a valid `image` prop (Astro ImageMetadata)
- Then it SHALL display the image within the 44x44px circular container
- And it SHALL apply `object-fit: cover` to ensure the photo fills the container correctly

#### Scenario: Fallback to initials
- Given a `TestimonialCard.astro` component
- When it is rendered without an `image` prop
- Then it SHALL display the customer's `initials` as text within the circular container
- And it SHALL apply the brand blue gradient as the background for the container
