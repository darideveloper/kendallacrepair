## 1. Setup & Infrastructure
- [x] 1.1 Add `clsx` to `package.json` and move `astro-show-tailwindcss-breakpoint` to `devDependencies`
- [x] 1.2 Move `foto-trane-single.jpg` from `ui-design/` to `src/assets/images/hero/`
- [x] 1.3 Update `openspec/project.md` with mandatory DRY, `clsx` (for dynamic classes), and image optimization (Astro `<Image />`) requirements

## 2. Shared Utilities & Config
- [x] 2.1 Create `src/constants/site.ts` with phone numbers and site-wide metadata
- [x] 2.2 Create `src/components/atoms/Icon.astro` for centralized SVG icons
- [x] 2.3 Create `src/components/atoms/FormField.astro` as a shared form wrapper

## 3. Component Refactoring
- [x] 3.1 Refactor `src/components/atoms/Input.astro` to use `FormField.astro`
- [x] 3.2 Refactor `src/components/atoms/Textarea.astro` to use `FormField.astro`
- [x] 3.3 Refactor `src/components/organisms/Hero.astro` to use Astro's `<Image />` component and centralized icons
- [x] 3.4 Refactor `src/components/organisms/Header.astro` to use centralized icons and site constants

## 4. New Functionality
- [x] 4.1 Create `src/pages/thank-you.astro`
- [x] 4.2 Implement mobile menu toggle script in `src/components/organisms/Header.astro`
- [x] 4.3 Update `src/components/molecules/HeroForm.astro` to use refactored inputs and ensure redirect logic works

## 5. Validation
- [x] 5.1 Run `npm run build` to verify no more dependency or asset issues
- [x] 5.2 Manually verify the mobile menu toggle works
- [x] 5.3 Verify form submission redirects to `/thank-you`
