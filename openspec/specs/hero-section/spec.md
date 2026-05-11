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

#### Scenario: Image optimization
- Given the `Hero.astro` component
- When rendered on any device
- Then it SHALL use Astro's native `<Image />` component for background image rendering
- And it SHALL provide a valid background image at `src/assets/images/hero/foto-trane-single.jpg`

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

### Requirement: Hero Content and Layout Alignment
The Hero section SHALL align with the provided high-conversion design to prioritize speed and reliability messaging.

#### Scenario: User visits the home page
- **GIVEN** the user is on the landing page
- **THEN** they see a headline emphasizing speed ("Rápido. Confiable. Hoy Mismo.")
- **AND** they see a subheadline highlighting no upfront payments
- **AND** they see two prominent CTAs: "Llamar Ahora" and "WhatsApp"
- **AND** they see a trust row with "Respuesta en 60 min"

### Requirement: Hero Form Conversion Optimization
The form SHALL be optimized for speed and conversion by reducing friction.

#### Scenario: User attempts to fill the hero form
- **GIVEN** the user interacts with the Hero form
- **THEN** they only see fields for Name, Phone, and Problem
- **AND** they see a clear value proposition in the form header ("Presupuesto en 5 Minutos")
- **AND** the submit button copy encourages action ("Solicita Tu Presupuesto Gratis")

### Requirement: Live Availability Indicators
Visual cues MUST reinforce real-time availability through motion and brand-specific coloring.

#### Scenario: Visual inspection of the Hero badge
- **GIVEN** the availability badge is displayed
- **THEN** the status dot exhibits a pulse animation to indicate "live" status
- **AND** the WhatsApp button uses the brand-specific green color

