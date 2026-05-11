# Change: Adapt Urgency Banner content and styling to match new design

## Why
The current UrgencyBanner component uses a generic blinking `●` dot and translation-only text that differs from the approved high-conversion HTML design. The target design uses a `⚡` emoji, explicit emergency text with phone number inline, and updated styling (cursor-pointer wrapper, flex-centered link without underline, mobile-responsive sizing).

## What Changes
- Replace blinking `●` dot with `⚡` emoji
- Update banner text to include both the emergency message and phone number inline
- Change wrapper cursor behavior (add `cursor-pointer`)
- Restyle the anchor tag: remove `hover:underline`, add flex centering with gap
- Remove redundant `aria-label` on the link (text is now self-explanatory)
- Update translation keys in both `es.json` and `en.json`
- Ensure mobile responsiveness matches target design (reduced padding/font at <640px)

## Impact
- Affected specs: `ui-components` (ADDED), `i18n` (ADDED)
- Affected code:
  - `src/components/molecules/UrgencyBanner.astro` — restructured markup and classes
  - `src/messages/en.json` — updated `ui.emergency_call_banner`
  - `src/messages/es.json` — updated `ui.emergency_call_banner`
