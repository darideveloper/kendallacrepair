# Tasks: Implement n8n Chat Integration

- [x] **Task 1: Refactor ChatButton.astro structure**
    - Remove the static HTML elements (`.chat-hdr`, `.chat-body`, `.chat-input-area`) inside `#chat-popup`.
    - **Validation**: Inspect the component to ensure only the toggle button and the empty popup container remain.

- [x] **Task 2: Integrate n8n Chat Iframe**
    - Add the `<iframe>` tag inside the `#chat-popup` container.
    - Set the `src` attribute to `https://n8n.apps.darideveloper.com/webhook/1da5e766-56e7-4e76-8cb4-879be56bfdd2/chat`.
    - Apply `width="100%"` and `height="100%"` with `frameborder="0"`.
    - **Validation**: Verify the iframe loads the n8n chat UI when the popup is toggled.

- [x] **Task 3: Adjust Popup Container Styling**
    - Update the CSS for `#chat-popup` in `ChatButton.astro`.
    - Add `height: 550px;` for desktop visibility.
    - Ensure `overflow: hidden;` and appropriate border-radius are applied to the container or iframe.
    - **Validation**: Check that the chat window has a consistent height and look on desktop and mobile.

- [x] **Task 4: Final Verification and Cleanup**
    - Confirm the 15-second auto-open trigger still works.
    - Verify the chat popup does not overlap with the `MobileCallBar` on mobile resolutions (<640px).
    - **Validation**: Manual test on different screen sizes and wait for the auto-open trigger.
