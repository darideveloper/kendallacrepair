# Proposal: Add Close Button to Chat Iframe

## Why
The recently implemented n8n chat iframe integration in `ChatButton.astro` lacks a dedicated close button within the popup container. Currently, users must click the floating toggle button again to close the chat. Adding an "x" close button at the top right of the iframe improves accessibility and user experience by providing a familiar way to dismiss the chat window.

## What Changes
- Add a close button (`<button>`) to the `ChatButton.astro` component, positioned at the top right of the `#chat-popup` container.
- Use a white color for the "x" icon.
- Update the JavaScript logic in `ChatButton.astro` to handle the close button click event.
- Ensure the close button is layered above the iframe.

## Impact
- **User Experience**: Provides a clear and standard way to close the chat window.
- **UI Consistency**: Follows the common pattern for modal/popup windows.
