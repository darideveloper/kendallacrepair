# Design: Fix MobileCallBar Overlap

## Architecture Reasoning
The overlap is a layout conflict in the global fixed-position UI elements. By increasing the `bottom` offset on mobile for the floating action buttons, we can resolve this without impacting larger screens (where `MobileCallBar` is hidden).

## Key Components

### 1. WhatsAppButton.astro
- Update the `fixed` class to use `bottom-20` for mobile and `md:bottom-8` for medium and larger screens.
- Current mobile `bottom` is `bottom-6` (24px).
- Proposed mobile `bottom` is `bottom-20` (80px).

### 2. ChatButton.astro
- Update the container class to use `bottom-20` for mobile and `md:bottom-8` for medium and larger screens.
- Current mobile `bottom` is `bottom-6` (24px).
- Proposed mobile `bottom` is `bottom-20` (80px).
- The `chat-popup` also needs to be adjusted to maintain its relative position above the toggle button.
- Current `chat-popup` mobile `bottom` is `bottom-24` (96px).
- Proposed `chat-popup` mobile `bottom` is `bottom-[152px]` (approx 80px + toggle height + 16px gap).
- We can use Tailwind's arbitrary value syntax `bottom-[152px]` for precision, or `bottom-38` if we want to stay within the 4px grid.

## Constraints
- Keep consistency between `WhatsAppButton` and `ChatButton` positioning.
- Ensure the `MobileCallBar` remains fully visible and interactive.
