# hero-section Specification

## Purpose
TBD - created by archiving change implement-hero-section. Update Purpose after archive.
## Requirements
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

### Requirement: Fixed Mobile Interaction
The application SHALL provide fixed interaction points for mobile users.

#### Scenario: Bottom call bar visibility
- Given the application is viewed on a mobile device (max-width: 640px)
- When the user scrolls the page
- Then a fixed orange bar with a "Call Now" link SHALL be visible at the bottom of the viewport

#### Scenario: Floating action buttons
- Given the application is active
- When rendered on any device
- Then a floating WhatsApp button SHALL be anchored to the bottom-left corner
- And a floating Chat button SHALL be anchored to the bottom-right corner

