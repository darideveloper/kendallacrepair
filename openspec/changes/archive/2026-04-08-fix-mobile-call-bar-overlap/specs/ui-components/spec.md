# MODIFIED: ui-components Specification

## ADDED Requirements

### ADDED Requirement: Mobile Call Bar
The application SHALL provide a `MobileCallBar.astro` component that is fixed at the bottom for quick access to phone calls.

#### Scenario: Displaying the call bar on mobile
- Given a `MobileCallBar.astro` component
- When viewed on a screen smaller than 640px
- Then it SHALL be fixed to the bottom of the viewport
- And it SHALL display the brand orange gradient and a clickable phone link

## MODIFIED Requirements

### MODIFIED Requirement: Global Floating Elements
The application SHALL provide floating action buttons that remain accessible and non-overlapping on all devices.

#### Scenario: Mobile positioning above Call Bar
- Given the `WhatsAppButton` and `ChatButton` components
- When viewed on a mobile device (screen width < 640px)
- Then they SHALL be positioned at least 80px (`bottom-20`) from the bottom to avoid overlap with the `MobileCallBar`

#### Scenario: Relative positioning of Chat Popup on mobile
- Given the `ChatButton` component with an active `chat-popup`
- When viewed on a mobile device
- Then the `chat-popup` SHALL be positioned relative to the toggle button (at least 152px from the bottom) to maintain visibility
