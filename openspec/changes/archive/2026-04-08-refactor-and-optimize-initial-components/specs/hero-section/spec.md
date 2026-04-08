## MODIFIED Requirements
### Requirement: Hero Layout
The application SHALL provide a `Hero.astro` organism as the primary landing section.

#### Scenario: Visual structure
- Given the `Hero.astro` component
- When rendered on desktop
- Then it SHALL display a background image with a dark navy gradient overlay
- And it SHALL show two main columns: a content area on the left and a form card on the right

#### Scenario: Mobile responsiveness
- Given the `Hero.astro` component
- When rendered on mobile (max-width: 900px)
- Then the columns SHALL stack vertically with the form card below the content area

#### Scenario: Image optimization
- Given the `Hero.astro` component
- When rendered on any device
- Then it SHALL use Astro's native `<Image />` component for background image rendering
- And it SHALL provide a valid background image at `src/assets/images/hero/foto-trane-single.jpg`
