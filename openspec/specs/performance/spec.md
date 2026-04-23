# performance Specification

## Purpose
TBD - created by archiving change optimize-seo-and-performance. Update Purpose after archive.
## Requirements
### Requirement: Asset Preloading
The system SHALL preload critical assets to improve the Largest Contentful Paint (LCP) and prevent layout shifts.

#### Scenario: Font and Hero Preloading
- Given the `Layout.astro` component
- When the head is rendered
- Then it SHALL include `<link rel="preload">` for all variable fonts used in the project
- And it SHALL include `<link rel="preload">` for the hero image if it is the LCP element.

#### Scenario: Preconnect Hints
- Given the `Layout.astro` component
- When the head is rendered
- Then it SHALL include `<link rel="preconnect">` tags for critical third-party domains (e.g., Google Maps).

### Requirement: Lazy Loading and Decoding
The system SHALL optimize the loading of images and iframes to reduce initial page load time and main thread work.

#### Scenario: Lazy Images and Iframes
- Given a component with an image or iframe (excluding above-the-fold content)
- When the component is rendered
- Then it SHALL include `loading="lazy"` attribute
- And images SHALL include `decoding="async"` attribute.

#### Scenario: Optimized Hero Image
- Given the `Hero.astro` component
- When the hero image is rendered
- Then it SHALL include `loading="eager"` and `fetchpriority="high"` attributes.

### Requirement: Accessibility and Image Attributes
The system SHALL ensure all interactive and visual elements are accessible and SEO-friendly.

#### Scenario: ARIA Labels for Interactive Elements
- Given a button or icon-only link (e.g., `ChatButton`)
- When the element is rendered
- Then it SHALL include an `aria-label` attribute with a descriptive, localized value.

#### Scenario: Image Alt and Title Attributes
- Given an `Image` component
- When the image is rendered
- Then it SHALL include both an `alt` attribute and a `title` attribute.

### Requirement: Critical Request Chain Reduction
The system SHALL avoid unnecessary critical request chains during initial navigation by excluding non-rendered route assets and exposing critical same-origin font resources early.

#### Scenario: Homepage excludes 404-only CSS
- **WHEN** the production homepage HTML is generated
- **THEN** it SHALL NOT reference a `NotFound.*.css` stylesheet

#### Scenario: Spanish homepage excludes 404-only CSS
- **WHEN** the production Spanish homepage HTML is generated
- **THEN** it SHALL NOT reference a `NotFound.*.css` stylesheet

#### Scenario: Thank-you pages exclude 404-only CSS
- **WHEN** the production English and Spanish thank-you page HTML is generated
- **THEN** neither page SHALL reference a `NotFound.*.css` stylesheet

#### Scenario: Critical fonts are discoverable early
- **WHEN** the production document head is generated for initial navigation pages
- **THEN** the existing Plus Jakarta Sans and DM Sans variable font resources SHALL be discoverable before any non-rendered route stylesheet dependency

#### Scenario: No unnecessary preconnect origins
- **WHEN** performance hints are rendered in the document head
- **THEN** they SHALL NOT add extra preconnect origins beyond origins that are required by initial page rendering

#### Scenario: 404 routes remain functional
- **WHEN** the production 404 pages are generated
- **THEN** `/404` and `/es/404` SHALL preserve their existing route behavior

#### Scenario: Visual output remains unchanged
- **WHEN** critical request chain reduction is implemented
- **THEN** visible UI, layout, typography families, copy, translations, metadata behavior, and page content SHALL remain unchanged

### Requirement: Initial Load Motion Safety
The system SHALL avoid nonessential automatic animation on LCP-adjacent content during the initial viewport render without changing colors, copy, layout, routes, metadata, translations, or brand identity.

#### Scenario: Hero content is visible at initial paint
- **WHEN** the homepage initial viewport is rendered
- **THEN** the hero heading, supporting copy, primary CTAs, and hero form SHALL NOT begin hidden or translated by an entrance animation

#### Scenario: Early sections avoid startup entrance motion
- **WHEN** the first 2-3 homepage sections render during initial load
- **THEN** targeted early section headings and primary text blocks SHALL NOT run nonessential entrance animations before main content is visible

#### Scenario: Hover and focus feedback remains available
- **WHEN** a user hovers or focuses interactive elements
- **THEN** transition feedback MAY remain as long as it does not run automatically during initial page load

#### Scenario: Reduced motion is respected
- **WHEN** the user agent requests reduced motion
- **THEN** nonessential animations SHALL be disabled or reduced without hiding content

#### Scenario: PageSpeed validation uses multiple runs
- **WHEN** the change is verified after deployment
- **THEN** PageSpeed results SHALL be compared using multiple runs or a median score rather than treating one run as definitive

