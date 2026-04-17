# Spec: Performance Optimization

## ADDED Requirements

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
