## 1. Preparation
- [x] 1.1 Open `src/components/organisms/Footer.astro` for editing

## 2. Grid & Column Structure
- [x] 2.1 Change grid from 3 columns (`md:grid-cols-[1.2fr_1fr_1fr]`) to 4 columns (`md:grid-cols-[1.5fr_1fr_1fr_1fr]`)
- [x] 2.2 Add the 4th "Information" column with: hours (24/7 Emergencias), license (Florida CAC#), insurance ($1M cobertura), Spanish spoken, and privacy/terms links

## 3. Content Updates
- [x] 3.1 Update about paragraph text in `Footer.astro` — longer copy explaining service coordinator model (via i18n keys `footer.about`)
- [x] 3.2 Restructure service areas from dynamic flex-wrap dots layout to 4 static `<p>` lines with 2 areas each and bullet separators
- [x] 3.3 Add Pinecrest to the service areas (in `en.json` and `es.json` neighborhoods array)

## 4. Bottom Bar
- [x] 4.1 Replace "Powered by DariDeveloper" link with "DHY Solutions LLC." plain text
- [x] 4.2 Replace right-side privacy/terms links with "kendallacrepairs.com" plain text
- [x] 4.3 Update copyright text to include "DHY Solutions LLC." after company name

## 5. Cleanup
- [x] 5.1 Remove the `<div>V 1.8</div>` badge

## 6. Translation Files
- [x] 6.1 Update `src/messages/en.json` footer.about text to the full 2-sentence description
- [x] 6.2 Update `src/messages/es.json` footer.about text to match the Spanish reference text
- [x] 6.3 Add `footer.info_title` key (`"Information"` / `"Informacion"`) for the Information column heading

## 7. Component Updates
- [x] 7.1 Update logo SVG: dimensions to 360x80, font-family to match reference (`'Plus Jakarta Sans','Segoe UI',system-ui,sans-serif`)

## 8. Validation
- [x] 8.1 Build passes successfully
- [x] 8.2 All 4 columns render correctly in both EN and ES (verified via built output)
- [x] 8.3 Bottom bar matches reference layout (DHY Solutions LLC + kendallacrepairs.com)
- [x] 8.4 `V 1.8` badge is completely removed
- [x] 8.5 "Powered by DariDeveloper" is removed
