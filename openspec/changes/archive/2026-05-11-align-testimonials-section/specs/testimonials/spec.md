# Testimonials Specification Delta

## ADDED Requirements

### Requirement: Testimonial Photo Support
The `TestimonialCard.astro` component SHALL support displaying a customer profile photo with a fallback to text-based initials and SHALL include trust signals and metadata.

#### Scenario: Display profile image
- Given a `TestimonialCard.astro` component
- When it is rendered with a valid `image` prop
- Then it SHALL display the image within the 44x44px circular container

#### Scenario: Display review metadata and verification
- **GIVEN** a `TestimonialCard.astro` component
- **WHEN** it is rendered with `author`, `location`, and `date`
- **THEN** it SHALL display the `author` in bold
- **AND** it SHALL display `location` and `date` separated by a bullet (•)
- **AND** it SHALL display a "Resena verificada de Google" badge at the bottom with a green checkmark

### Requirement: Testimonials Section Layout
The `Testimonials.astro` organism SHALL provide a structured layout that includes a global rating summary.

#### Scenario: Google Rating Counter
- **GIVEN** the `Testimonials.astro` component
- **WHEN** it is rendered
- **THEN** it SHALL display a centered summary block containing:
  - A 5-star rating visual with the text "4.9/5"
  - The text "Basado en resenas de Google"
  - A link "Ver todas en Google →"
- **AND** this block SHALL be positioned between the section title and the testimonials grid
