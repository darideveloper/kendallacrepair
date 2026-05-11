# Tasks: Align Hero Section with New HTML Design

## Phase 1: Localized Messaging
- [x] Update `es.json` with new Hero and Form strings @src/messages/es.json
- [x] Update `en.json` with new Hero and Form strings @src/messages/en.json

## Phase 2: Component Infrastructure
- [x] Add `whatsapp` variant to `Button.astro` @src/components/atoms/Button.astro
- [x] Add filled WhatsApp icon to `Icon.astro` @src/components/atoms/Icon.astro
- [x] Implement pulse animation keyframes in `global.css` @src/styles/global.css
- [x] Apply `.animate-pulse-green` or similar to the dot in `Badge.astro` @src/components/atoms/Badge.astro

## Phase 3: Hero Form Alignment
- [x] Remove email field from `HeroForm.astro` @src/components/molecules/HeroForm.astro
- [x] Update `HeroForm.astro` header and footer styling/content @src/components/molecules/HeroForm.astro

## Phase 4: Hero Section Alignment
- [x] Update badge, headline, and subheadline in `Hero.astro` @src/components/organisms/Hero.astro
- [x] Implement the dual CTA (Call + WhatsApp) in `Hero.astro` @src/components/organisms/Hero.astro
- [x] Update trust row items with new icons/text in `Hero.astro` @src/components/organisms/Hero.astro

## Phase 5: Validation
- [x] Verify visual alignment with target HTML on mobile
- [x] Verify visual alignment with target HTML on desktop
- [x] Ensure all links (Call, WhatsApp, Form Submit) work correctly
