# Spec Delta: Favicon and App Metadata

## MODIFIED Requirements
### Requirement: Favicon and App Icons
The system SHALL provide standard favicon and app icon declarations in the document head for maximum browser and device compatibility.

#### Scenario: Cross-browser favicon support
- Given the `Layout.astro` component
- When the page is rendered
- Then it SHALL include a `<link rel="icon" href="/favicon.ico" sizes="32x32">` tag as a fallback
- And it SHALL include a `<link rel="icon" href="/favicon.svg" type="image/svg+xml">` tag for modern browsers
- And it SHALL include a `<link rel="apple-touch-icon" href="/apple-touch-icon.png">` tag for iOS devices
- And it SHALL include a `<link rel="manifest" href="/site.webmanifest">` tag for Android and PWA support
- And it SHALL include a `<meta name="theme-color" content="#1A6FAF">` tag to match the branded brand color.
