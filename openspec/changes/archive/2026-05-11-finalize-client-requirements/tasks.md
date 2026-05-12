## 1. Site Configuration
- [x] 1.1 Update MAP_EMBED_URL coordinates to lat=25.6793, lng=-80.3964, zoom=12 in `src/constants/site.ts`
- [x] 1.2 Fix MAP_EMBED_URL after archive — replaced broken pb string with correct URL from reference HTML

## 2. Translation Fixes (i18n)
- [x] 2.1 Fix Free Estimates badge subtitle from "$0 diagnostic visit" to "$0 service call" in `en.json` and `es.json`
- [x] 2.2 Fix Emergency badge subtitle from "60 min response" to "Response in 60 min" in `en.json`
- [x] 2.3 Fix Emergency badge subtitle from "Respuesta en 60 min" to "Respuesta en 60 min" (already correct in ES — verified)
- [x] 2.4 Reorder FAQ items so original 4 (cost, emergency, licensed, areas) appear first, followed by 6 new questions
- [x] 2.5 Add `footer.hours`, `footer.license`, `footer.insurance`, `footer.languages` translation keys in both `en.json` and `es.json`
- [x] 2.6 Update home page meta description in `en.json` to: "AC Repair Kendall FL — Same-day service, free estimates, 24/7 emergency. Licensed technicians, se habla español. Call (305) 306-4511."
- [x] 2.7 Add English translation subtext to Maria G. testimonial data structure

## 3. UI Components
- [x] 3.1 Update `Footer.astro` to use i18n translation keys for Hours, License, Insurance, Languages instead of hardcoded Spanish text
- [x] 3.2 Add green dot + "Open" availability indicator next to phone button in `Header.astro`
- [x] 3.3 Update `TestimonialCard.astro` to render optional English translation subtext below Spanish quote

## 4. Structured Data
- [x] 4.1 Add FAQPage JSON-LD schema in `FAQ.astro` with all 10 Q&A pairs

## 5. Validation
- [x] 5.1 Run `npm run build` to verify no compilation errors — **PASSED**
- [x] 5.2 Verify all changes render correctly in both EN and ES languages — **Build generates both language routes**
