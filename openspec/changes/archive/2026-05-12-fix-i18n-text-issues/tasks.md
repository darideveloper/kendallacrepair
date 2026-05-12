## 1. Fix es.json orthography (accents + ¿)
- [x] 1.1 Add opening ¿ to all 14 questions, section titles, and form labels
- [x] 1.2 Fix all missing accent marks (técnico, reparación, teléfono, etc.)

## 2. Add new translation keys to en.json
- [x] 2.1 Add `faq.or`
- [x] 2.2 Add `nav.language_label`
- [x] 2.3 Add `ui.close_chat`
- [x] 2.4 Add `pages.404.call_support`
- [x] 2.5 Add `services.cta_call`

## 3. Add matching keys to es.json
- [x] 3.1 Add `faq.or`
- [x] 3.2 Add `nav.language_label`
- [x] 3.3 Add `ui.close_chat`
- [x] 3.4 Add `pages.404.call_support`
- [x] 3.5 Add `services.cta_call`

## 4. Remove dev artifact from es.json
- [x] 4.1 Delete `englishSubtext` field from Maria G. testimonial entry

## 5. Fix hardcoded strings in components
- [x] 5.1 `FAQ.astro:52` — replace `o` with `{t('faq.or')}`
- [x] 5.2 `ChatButton.astro:52` — replace `aria-label='Cerrar chat'` with `aria-label={t('ui.close_chat')}`
- [x] 5.3 `ChatButton.astro:61` — replace `title='Chat con IA'` with `title={t('ui.chat_with_ai')}`
- [x] 5.4 `NotFound.astro:41` — replace `Call Support` with `{t('pages.404.call_support')}`
- [x] 5.5 `Services.astro:53` — replace ternary with `{t('services.cta_call')}`
- [x] 5.6 `Header.astro:103` — replace `Language / Idioma` with `{t('nav.language_label')}`
- [x] 5.7 `Footer.astro:60-63` — replace hardcoded neighborhoods with `t('neighborhoods')` loop

## 6. Validation
- [x] 6.1 Run `npm run validate-i18n` to confirm no missing keys
- [x] 6.2 Run `npm run build` to confirm no build errors
