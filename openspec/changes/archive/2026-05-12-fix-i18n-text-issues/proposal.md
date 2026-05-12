# Change: Fix all i18n text issues — hardcoded strings, Spanish orthography, dev artifacts

## Why
A full Playwright crawl of all pages in both languages revealed 8 hardcoded strings (6 showing wrong language), 1 dev artifact leaking English text onto the Spanish page, 14 missing opening Spanish question marks (¿), and 30+ missing accents in es.json. Translation coverage is complete — no missing keys — but quality and correctness have gaps.

## What Changes

### A. Replace hardcoded strings with translation keys (8 components)
| Component | Current | Fix |
|---|---|---|
| `FAQ.astro:52` | `o` (Spanish) | `{t('faq.or')}` — add `faq.or` to both JSONs |
| `ChatButton.astro:52` | `aria-label='Cerrar chat'` | `aria-label={t('ui.close_chat')}` |
| `ChatButton.astro:61` | `title='Chat con IA'` | `title={t('ui.chat_with_ai')}` (key exists) |
| `NotFound.astro:41` | `Call Support` | `{t('pages.404.call_support')}` |
| `Services.astro:53` | `lang === 'es' ? 'Llamar' : 'Call'` | `{t('services.cta_call')}` |
| `Header.astro:103` | `Language / Idioma` | `{t('nav.language_label')}` |
| `Footer.astro:60-63` | Hardcoded neighborhoods | `t('neighborhoods')` — reuse array |
| `TestimonialCard.astro:29` | `(English: ...)` | Make prefix translatable via `t()` |

### B. Remove dev artifact
- Delete `englishSubtext` field from Maria G. testimonial in `es.json` (shows English quote on Spanish page)

### C. Fix Spanish orthography in es.json
- Add `¿` to 14 questions and titles (FAQ items, section titles, form labels)
- Fix 30+ accent/tilde errors (técnico, reparación, teléfono, diagnóstico, garantía, información, español, día, está, etc.)

### D. Add new translation keys to en.json + es.json
- `faq.or` — "or" / "o"
- `nav.language_label` — "Language" / "Idioma"
- `ui.close_chat` — "Close chat" / "Cerrar chat"
- `pages.404.call_support` — "Call Support" / "Llamar a Soporte"
- `services.cta_call` — "Call" / "Llamar"

## Impact
- **Affected specs:** `i18n` (new requirements for orthography, hardcoded strings, new keys)
- **Affected code:** 8 component files, 2 JSON translation files
- **No new dependencies, no routing changes, no data model changes.**
