# Proposal: Full SEO Optimization & Performance Boost

## Why
The Kendall AC Repairs website currently lacks comprehensive SEO metadata and structured data, which limits its visibility in search engine results and social media shares. Additionally, performance bottlenecks such as missing preloading for critical assets and unoptimized asset loading (images/iframes) negatively impact user experience and Core Web Vitals scores.

## What Changes
This change implements a full SEO and performance overhaul by:
1.  **Metadata Enhancement**: Adding Open Graph and Twitter image tags to `BaseSEO.astro`.
2.  **Structured Data**: Implementing `HVACBusiness`, `Service`, and `BreadcrumbList` schemas.
3.  **Heading Audit**: Correcting the heading hierarchy across the site (e.g., fixing redundant H1s).
4.  **Content Expansion**: Creating a localized 404 page and an RSS feed for better indexation.
5.  **Performance Optimization**: Adding preconnect hints, preloading LCP elements, and enforcing lazy loading for non-critical assets.
6.  **Accessibility**: Adding `aria-label` to interactive elements and ensuring images have proper attributes.

## Problem
- **Missing Metadata**: The site lacks Open Graph and Twitter images, which reduces visibility on social platforms.
- **No Structured Data**: Search engines do not have access to JSON-LD schemas like `LocalBusiness` or `Service`, which are crucial for local HVAC services.
- **Heading Hierarchy Issues**: Some components (e.g., `Welcome.astro`) contain redundant or incorrect heading levels (H1).
- **Performance Gaps**: Critical assets (fonts, hero images) are not preloaded, and some images/iframes lack explicit lazy loading or performance-focused attributes.
- **Iframe Delays**: Iframes (Google Maps, Chat) can delay page interaction if not managed correctly.

## Proposed Solution
- **Dynamic Metadata**: Update `BaseSEO.astro` to include high-quality OG/Twitter images based on the brand kit.
- **Structured Data (JSON-LD)**: Implement `HVACBusiness` (specialized `LocalBusiness`), `BreadcrumbList`, and `Service` schemas.
- **Heading Audit & Fix**: Standardize the heading hierarchy across all components, removing redundant H1s.
- **Content & Pages**:
    - Implement a custom `404.astro` page with helpful links.
    - Implement an `rss.xml.ts` feed for service updates and blog content.
- **Performance Overhaul**:
    - Preload fonts and above-the-fold hero images in `Layout.astro`.
    - Enforce lazy loading and async decoding for all below-the-fold images.
    - Optimize iframe loading (Google Maps, Chat) using `loading="lazy"`.
- **Favicon & Asset Cleanup**:
    - Add and link missing `apple-touch-icon.png` and `favicon.png` assets.
- **Accessibility & UX**:
    - Perform an accessibility pass to ensure all interactive elements have `aria-label`.
    - Ensure all images have descriptive `alt` and `title` tags.

## Impact
- **Higher CTR**: Rich snippets in search results (via JSON-LD) and attractive social previews.
- **Improved SEO Ranking**: Proper heading hierarchy and semantic HTML.
- **Better Core Web Vitals**: Faster LCP (via preloading) and reduced Main Thread work (via lazy loading iframes/images).
