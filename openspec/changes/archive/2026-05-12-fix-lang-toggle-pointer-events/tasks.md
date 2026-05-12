## 1. Spec update
- [x] 1.1 Add scenario "Language toggle navigates bidirectionally" to the `Dynamic Localized Routing` requirement in `specs/i18n/spec.md` (spec delta already created in `changes/fix-lang-toggle-pointer-events/specs/i18n/spec.md`)

## 2. Implementation
- [x] 2.1 Make `pointer-events-none` conditional on the EN `<a>` tag in `LangToggle.astro` — only apply when `lang === 'en'`
- [x] 2.2 Make `pointer-events-none` conditional on the ES `<a>` tag in `LangToggle.astro` — only apply when `lang === 'es'`

## 3. Validation
- [x] 3.1 Verify `npm run build` succeeds
- [ ] 3.2 Manually confirm EN→ES navigation works from an English page
- [ ] 3.3 Manually confirm ES→EN navigation works from a Spanish page
- [ ] 3.4 Manually confirm active language button is non-interactive (has `pointer-events-none`) on both language versions
