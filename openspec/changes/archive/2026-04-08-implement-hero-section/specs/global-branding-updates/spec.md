# global-branding-updates Specification Delta

## Description
Extends the `global-styles` specification with specific gradients and animations required for the hero section and overall brand feel.

## ADDED Requirements

### Requirement: Brand Gradients
The application SHALL provide CSS variables for standard brand gradients.

#### Scenario: Using orange gradient
- Given the application uses Tailwind 4.0
- When a developer applies the orange gradient utility
- Then the background should display a linear gradient from #f76707 to #e8590c

### Requirement: Keyframe Animations
The application SHALL provide standard animations for interactive and static elements.

#### Scenario: Blinking text in urgency banner
- Given the urgency banner is displayed
- When the application is active
- Then the "LIVE" indicator should blink with an opacity between 0.6 and 1 every 1.5 seconds

#### Scenario: Pulse animation on live indicators
- Given a live tech badge is displayed
- When the application is active
- Then the dot indicator should pulse with a green box shadow every 2 seconds

#### Scenario: Fade-in up entrance
- Given a hero content or form is mounted
- When the page loads
- Then the element should translate 30px upwards while fading from 0 to 1 opacity over 0.8 seconds
