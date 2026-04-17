# Proposal: Implement n8n Chat Integration

## Why
The current AI chat in the application is a static mockup (`src/components/molecules/ChatButton.astro`) that does not provide functional interactivity. It serves only as a visual placeholder and lacks a connection to a real backend. Replacing it with a functional n8n chatbot provides immediate value to users and reduces client-side complexity.

## What Changes
- Refactor `ChatButton.astro` to remove mock UI elements.
- Embed n8n chatbot via `<iframe>`.
- Update popup styling for height and overflow.
- Maintain toggle and auto-open logic.

## Impact
- **User Experience**: Users will be able to interact with a functional AI assistant.
- **Maintenance**: Reduced client-side logic as the chat interface is managed by n8n.
- **Consistency**: Maintains the established branding and floating element positioning.

## Proposed Changes

### UI Components
- **ChatButton.astro**: 
    - Remove static header, body, and input elements.
    - Inject an `<iframe>` pointing to the n8n chat URL.
    - Adjust container styling to support the iframe's dimensions and scrolling.
    - Preserve the toggle and auto-open (15s) JavaScript logic.

### Configuration
- Add the n8n chat URL to centralized site constants or environment variables for maintainability.
