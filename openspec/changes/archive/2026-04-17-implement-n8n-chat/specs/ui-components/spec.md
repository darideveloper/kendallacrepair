# Capability: Chat Integration Spec Delta

## MODIFIED Requirements

### Requirement: Global Floating Elements
The application SHALL provide floating action buttons that remain accessible and non-overlapping on all devices.

#### Scenario: Embedded n8n Chat Iframe
- Given the `ChatButton.astro` component
- When the chat popup is opened
- Then it SHALL render a functional `<iframe>` pointing to the configured n8n chat URL
- And the application SHALL NOT render the static mock header, body, or input area

#### Scenario: Responsive Chat Window Dimensions
- Given the `ChatButton.astro` component's `#chat-popup` container
- When rendered on desktop
- Then it SHALL have a fixed height of `550px`
- And when rendered on mobile
- Then it SHALL occupy the maximum available height within the viewport constraints while maintaining its relative positioning above the `MobileCallBar`

#### Scenario: Preserved Toggle and Auto-open Logic
- Given the `ChatButton.astro` component
- When the page loads
- Then the component SHALL automatically open the chat popup after 15 seconds if not already toggled by the user
- And the toggle button SHALL continue to show/hide the iframe container correctly
