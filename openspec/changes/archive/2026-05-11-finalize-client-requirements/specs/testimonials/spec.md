## MODIFIED Requirements

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

#### Scenario: English translation subtext rendered below Spanish quote
- **GIVEN** the `TestimonialCard.astro` component
- **WHEN** it receives an `englishSubtext` prop with a non-empty string
- **THEN** it SHALL display the subtext below the primary `quote` in gray (`text-gray-400`) at `text-[12px]`
- **AND** the subtext SHALL be formatted as `"(English: {englishSubtext})"`

## ADDED Requirements

### Requirement: The testimonials data model SHALL support an optional `englishSubtext` field.
The testimonial items in translation files SHALL support an optional `englishSubtext` field for bilingual display of Spanish testimonials.

#### Scenario: Maria G. Spanish testimonial includes English subtext
- **GIVEN** Maria G.'s testimonial data in `es.json`
- **WHEN** the testimonial card renders
- **THEN** its `englishSubtext` value SHALL be: `"My AC broke on a Sunday and I thought I'd suffer the whole weekend. I called and within 45 minutes I had a technician at my house. He speaks Spanish, was very honest about the price. Incredible service."`
