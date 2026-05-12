# Change: Fix language toggle buttons being unclickable (one-way switch)

## Why
The language switcher only works from English→Spanish. Clicking EN from a Spanish page does nothing because `pointer-events-none` is unconditionally applied to the EN button. This was an oversight when the mid-April "disable buttons" commit was partially reverted in `b203f16` — the ES button was restored but the EN button was left permanently disabled.

## What Changes
- Make `pointer-events-none` conditional on both toggle buttons so only the **active** language button is non-interactive
  - ES button: `pointer-events-none` only when `lang === 'es'`
  - EN button: `pointer-events-none` only when `lang === 'en'`
- Add a "Language toggle navigates bidirectionally" scenario to the Dynamic Localized Routing requirement in the i18n spec

## Impact
- **Affected specs:** `i18n` (one scenario added)
- **Affected code:**
  - `src/components/molecules/LangToggle.astro:37` — one class string change
- **No new dependencies, no data model changes, no API changes.**
