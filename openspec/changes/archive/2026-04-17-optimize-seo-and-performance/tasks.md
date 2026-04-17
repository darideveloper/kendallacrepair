# Tasks: Full SEO Optimization & Performance Boost

- [x] **Task 1: Enhance Base SEO Component**
    - Add Open Graph image tags (`og:image`, `og:image:width`, `og:image:height`).
    - Add Twitter card image tags (`twitter:image`).
    - Implement `JSON-LD` script block with `HVACBusiness`, `Service`, and `BreadcrumbList` schemas.
    - **Validation**: Inspect head elements and run [Schema Markup Validator](https://validator.schema.org/).

- [x] **Task 2: Audit and Fix Heading Hierarchy**
    - Remove redundant `H1` from `src/components/organisms/Welcome.astro`.
    - Verify `src/components/organisms/Hero.astro` is the primary `H1`.
    - Ensure all section titles use `H2` consistently.
    - **Validation**: Use a browser extension (like SEO Meta in 1 Click) to verify heading structure on Home and Thank You pages.

- [x] **Task 3: Performance & Asset Optimization**
    - Add font preloading for `Plus Jakarta Sans` and `DM Sans` in `Layout.astro`. (Skipped: Fontsource uses hashed paths)
    - Add `fetchpriority="high"` to the Hero image in `Hero.astro`.
    - Update all non-hero images to include `loading="lazy"` and `decoding="async"`.
    - Update all iframes (Google Maps in `Coverage.astro`, Chat in `ChatButton.astro`) to include `loading="lazy"`.
    - **Validation**: Check Network tab in DevTools for font preloading and Verify `loading="lazy"` attributes in elements.

- [x] **Task 4: Content & Favicon Cleanup**
    - Create `src/pages/404.astro` with a localized "Not Found" message and return-home link.
    - Create `src/pages/rss.xml.ts` using `@astrojs/rss`.
    - Add `apple-touch-icon.png` and `favicon.png` (using the high-res icon from `public/images/logos/`).
    - Ensure all favicons are correctly linked in `Layout.astro`.
    - Verify `x-default` hreflang implementation in `BaseSEO.astro`.
    - **Validation**: Verify 404 behavior, check `/rss.xml` response, and confirm favicon display.

- [x] **Task 5: Accessibility & UX Audit**
    - Add `aria-label` to all buttons and icon-only links (e.g., `ChatButton`, `WhatsAppButton`, `SocialLinks`).
    - Audit all `Image` tags to ensure they have both `alt` and `title` attributes.
    - **Validation**: Run Lighthouse accessibility audit and ensure a score > 95.
