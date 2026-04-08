# Tasks: Fix MobileCallBar Overlap

## Change: 2026-04-08-fix-mobile-call-bar-overlap

### 1. Update WhatsAppButton mobile positioning
- [x] Modify `src/components/molecules/WhatsAppButton.astro` to change `bottom-6` to `bottom-20`.
- [x] Validate by checking the component's CSS classes.

### 2. Update ChatButton mobile positioning
- [x] Modify `src/components/molecules/ChatButton.astro` to change `bottom-6` to `bottom-20` in the container.
- [x] Update the `chat-popup` bottom positioning from `bottom-24` to `bottom-38` (or `bottom-[152px]`).
- [x] Validate by checking the component's CSS classes.

### 3. Verify mobile layout
- [x] Ensure that on screens larger than 640px (`md:` breakpoint), the buttons revert to their original `bottom-8` positioning.
- [x] Check `src/components/molecules/MobileCallBar.astro` to ensure its fixed positioning remains unchanged.
