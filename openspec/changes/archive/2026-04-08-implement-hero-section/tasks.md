# Tasks: Implement Hero Section and Global Branding

## Global Styling
- [x] Update `src/styles/global.css` with required animations (`fadeInUp`, `pulse`, `blink`)
- [x] Define custom gradients as CSS variables in `src/styles/global.css` within the `@theme` block
- [x] Add Tailwind 4 `@utility` for the hero overlay gradient

## UI Components (Atoms)
- [x] Create `src/components/atoms/Button.astro` with variants (`primary`, `secondary`, `navy`)
- [x] Create `src/components/atoms/Badge.astro` for status indicators (includes the pulsing dot)
- [x] Create `src/components/atoms/Input.astro` and `src/components/atoms/Textarea.astro` for forms

## UI Components (Molecules)
- [x] Create `src/components/molecules/UrgencyBanner.astro` with the blinking effect
- [x] Create `src/components/molecules/HeroForm.astro` (Name, Phone, Email, Problem)
- [x] Create `src/components/molecules/TrustItem.astro` (icon + text pairs)
- [x] Create `src/components/molecules/LangToggle.astro` for language switching
- [x] Create `src/components/molecules/WhatsAppButton.astro` (floating)
- [x] Create `src/components/molecules/ChatButton.astro` (floating)
- [x] Create `src/components/molecules/MobileCallBar.astro` (fixed bottom)

## UI Components (Organisms)
- [x] Create `src/components/organisms/Header.astro` with logo, navigation, and CTA
- [x] Create `src/components/organisms/Hero.astro` implementing the 2-column layout

## Integration
- [x] Update `src/layouts/Layout.astro` to include `UrgencyBanner` and `Header`
- [x] Implement the `Hero` organism in `src/pages/index.astro`
- [x] Add the mobile-only fixed call bar to `src/layouts/Layout.astro`
- [x] Add the floating action buttons (WhatsApp, Chat) to `src/layouts/Layout.astro`

## Optimization
- [x] Optimize the background image and convert to WebP (Manual verification done)
- [x] Verify responsive behavior on mobile and tablet viewports
- [x] Ensure all form fields are properly labeled and accessible
