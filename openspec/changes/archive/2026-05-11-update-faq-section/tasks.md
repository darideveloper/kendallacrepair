## 1. Implementation
- [x] 1.1 Update `src/constants/site.ts` — change `FAQ_ITEMS_COUNT` from 4 to 10
- [x] 1.2 Update `src/messages/es.json` — replace all 4 existing FAQ items with the 10 exact Q&A pairs from the HTML, add CTA text
- [x] 1.3 Update `src/messages/en.json` — add the 6 new FAQ items with English translations matching the HTML's Spanish copy, update/resize existing 4 answers, add CTA text
- [x] 1.4 Update `src/components/molecules/FAQItem.astro` — add schema.org `itemscope`/`itemprop` attributes (`FAQItem` → `mainEntity`/`Question`, `acceptedAnswer`/`Answer`, `itemprop="text"`, `itemprop="name"`), fix `onclick` target, wrap question in `<span itemprop="name">`
- [x] 1.5 Update `src/components/organisms/FAQ.astro` — add `itemscope="FAQPage"` on list wrapper, add `itemprop="mainEntity"` pass-through, add `faq-cta` section below the list with phone and WhatsApp links from `SITE` constants
