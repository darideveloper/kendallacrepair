# Capability: Chat Integration Spec Delta

## MODIFIED Requirements

### Requirement: Global Floating Elements
The application SHALL provide floating action buttons that remain accessible and non-overlapping on all devices.

#### Scenario: Dedicated Close Button for Chat Popup
- Given the `ChatButton.astro` component with the n8n chat iframe
- When the chat popup is opened
- Then it SHALL display a white "x" button at the top right corner of the popup container
- And the close button SHALL use the `Icon.astro` component with the `x` name
- And when the user clicks this close button, the chat popup SHALL be hidden
- And the close button SHALL be positioned with `z-index` higher than the iframe to ensure interactivity
