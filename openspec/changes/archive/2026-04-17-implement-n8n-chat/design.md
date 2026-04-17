# Design: n8n Chat Integration via Iframe

## Architecture Overview
The integration follows a "Container-Guest" pattern where the existing `ChatButton.astro` component acts as the container (managing visibility, positioning, and triggers) and the n8n chatbot acts as the guest (managing conversation logic and UI).

## Component Breakdown

### 1. The Container (`src/components/molecules/ChatButton.astro`)
- **State Management**: Uses the existing CSS-class-based toggle logic (`popup.classList.toggle('scale-100')`).
- **Layout**: The `#chat-popup` container will be refactored to remove internal padding and headers, allowing the iframe to occupy 100% of the available space.
- **Dimensions**: 
    - Width: Maintains responsive behavior (max-width `calc(100vw - 3rem)`).
    - Height: Fixed height of `550px` (on large screens) and responsive constraints on smaller screens to ensure the iframe is usable.

### 2. The Guest (n8n Iframe)
- **URL**: `https://n8n.apps.darideveloper.com/webhook/1da5e766-56e7-4e76-8cb4-879be56bfdd2/chat`
- **Permissions**: The iframe will require standard sandboxing if necessary, but primarily needs `width="100%"` and `height="100%"`.

## Trade-offs and Considerations

### Pros
- **Decoupling**: The chat interface can be updated in n8n without redeploying the website.
- **Speed**: Replacing complex DOM structures and fetch logic with a single iframe reduces client-side JS bundle size.
- **Reliability**: Leverages a proven, hosted chat UI.

### Cons
- **Limited Customization**: The internal look and feel (colors, fonts) of the chat are controlled by n8n.
- **Loading Time**: The iframe introduces an additional network request before the chat is interactive.

## Alternatives Considered
- **Custom Fetch Implementation**: Would allow for 100% brand alignment but requires significant development effort to handle session management, message history, and rich text/media responses. Given the requirement for a "straightforward, minimal implementation", the iframe is the superior choice.
