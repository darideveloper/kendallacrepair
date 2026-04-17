# Design: SEO and Performance Optimization

This document details the architectural and technical decisions for the SEO and performance overhaul.

## 1. Structured Data Strategy
We will use JSON-LD to provide semantic context to search engines.
- **HVACBusiness**: A more specific subtype of `LocalBusiness` suitable for AC repair. It will include:
    - Name, address, and geo-coordinates.
    - Phone number and URL.
    - `serviceArea` (Kendall and surrounding neighborhoods).
    - `openingHours` (24/7 as per site content).
- **Service Schema**: To list specific offerings (Repair, Installation, Maintenance).
- **BreadcrumbList**: To map the site hierarchy (Home > [Service]).

## 2. Heading Hierarchy
The audit revealed issues in `Welcome.astro` and potential inconsistencies in nested components.
- **Rule**: Exactly one `H1` per page (Hero).
- **Standardization**:
    - `H2` for top-level section titles (Services, How it Works, etc.).
    - `H3` for component-level titles (Service cards, Step numbers).
    - `H4` for secondary metadata (Footer headings).

## 3. Metadata & Social Previews
- **Images**: We will use a dedicated OG image (e.g., a branded banner with "Kendall AC Repairs" and the main phone number).
- **Dynamic Title/Description**: Ensure every page (Home, Thank You) has unique and localized meta tags.

## 4. Performance Optimizations
- **Font Preloading**: Use `<link rel="preload" as="font">` for `Plus Jakarta Sans` and `DM Sans` to prevent layout shifts.
- **Above-the-fold Optimization**: The Hero image will use `loading="eager"` and `fetchpriority="high"`.
- **Lazy Loading**: 
    - Images: Enforce `loading="lazy"` and `decoding="async"` for all non-critical images.
    - Iframes: Enforce `loading="lazy"`. For high-impact iframes like Google Maps, we will ensure they are only loaded when they enter the viewport.

## 5. Iframe Performance (Spotify/Substack)
While not currently in the project, any future Spotify or Substack iframes will be implemented using:
- `loading="lazy"`.
- Attributes to prevent blocking (e.g., `importance="low"` if supported).
- Placeholder images or "Click-to-Load" facades if they significantly impact initial page load.
