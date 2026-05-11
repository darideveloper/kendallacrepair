# Change: Update FAQ Section to Match Client HTML Spec

## Why
The current FAQ section has only 4 questions with shorter answers, missing 6 additional Q&A pairs, the schema.org FAQPage structured data markup, and the bottom CTA bar with phone/WhatsApp links that appear in the approved client HTML (`ui-design/updates-client.html`).

## What Changes
- **Add 6 new FAQ items** (español hablado, arrival time, free diagnostic, brand coverage, warranty, financing) to both `es.json` and `en.json`
- **Update all 10 FAQ answers** to match the exact copy from the client HTML
- **Add schema.org FAQPage markup** (`itemscope`, `itemprop="mainEntity"`, `itemprop="acceptedAnswer"`, etc.) to `FAQItem.astro`
- **Add FAQ CTA section** at the bottom of `FAQ.astro` with phone link and WhatsApp link
- **Update FAQ default open state** — first item starts open
- **Update `FAQ_ITEMS_COUNT`** from 4 to 10 in `src/constants/site.ts`

## Impact
- Affected specs: `ui-components`, `site-configuration`, `i18n`
- Affected code:
  - `src/components/organisms/FAQ.astro` — add CTA section, schema.org wrapper
  - `src/components/molecules/FAQItem.astro` — add schema.org itemprop attributes, fix open state
  - `src/messages/es.json` — add 6 items, update all answers
  - `src/messages/en.json` — add 6 items, update all answers
  - `src/constants/site.ts` — update `FAQ_ITEMS_COUNT` to 10
