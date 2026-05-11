# Change: Update Footer Layout and Content

## Why
The current footer does not match the approved client design. It is missing a 4th "Information" column, uses shorter about text (which fails to explain the service coordinator model), has a different bottom bar structure (includes "Powered by DariDeveloper" and a `V 1.8` badge), and differs in the service areas presentation format.

## What Changes
- **About text**: Replace the short about paragraph with the full 2-sentence description explaining the service coordinator model
- **Grid layout**: Expand from 3 columns to 4 columns (About, Services, Service Areas, Information)
- **Add Information column**: New column with hours, license, insurance, Spanish language note, and privacy/terms links
- **Service Areas formatting**: Change from flex-wrap bullet layout to 4 static lines with 2 areas each (bullet-separated)
- **Add Pinecrest** to service areas list
- **Bottom bar**: Replace "Powered by DariDeveloper" + privacy/terms links with "DHY Solutions LLC." + "kendallacrepairs.com" text
- **Remove `V 1.8`** badge from the footer
- **Update translation strings** in `en.json` and `es.json` for the new footer content

## Impact
- Affected specs: `ui-components` (Footer requirement), `i18n` (footer translation keys)
- Affected code:
  - `src/components/organisms/Footer.astro` — structural and content changes
  - `src/messages/en.json` — updated about text, added info column strings
  - `src/messages/es.json` — updated about text, added info column strings
- No new files or dependencies needed
