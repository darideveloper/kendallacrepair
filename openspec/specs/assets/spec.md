# assets Specification

## Purpose
TBD - created by archiving change apply-global-branding. Update Purpose after archive.
## Requirements
### Requirement: Centralized Asset Management
Asset files SHALL be organized in specialized directories for use in layouts and components.

#### Scenario: Referencing logos
- Given the logo SVGs are in `public/images/logos/`
- When a component references `/images/logos/logo-horizontal-color.svg`
- Then the logo should be served correctly (SVGs are handled as static assets)

#### Scenario: Image optimization with Astro `<Image />`
- Given an image asset (JPG, PNG, WebP) required in a component
- When the image is rendered
- Then it MUST be stored in `src/assets/images/`
- And it MUST be rendered using Astro's native `<Image />` component to ensure automatic optimization and WebP conversion

### Requirement: Service Image Assets
The application SHALL include optimized image assets for all featured services in its local assets directory.

#### Scenario: Optimized service images
- Given a `src/assets/images/services/` directory
- When adding images for featured services
- Then it SHALL contain the following images (reformatted to WebP where appropriate):
  - `emergencia-ac-24-7.png`
  - `reparacion-de-ac.jpg`
  - `instalacion-de-ac.jpg`
  - `mantenimiento-preventivo.jpg`

### Requirement: Branded Icon Assets
The application SHALL include core brand identity icons in the `public/` directory with specific formats and dimensions.

#### Scenario: Essential brand icons
- Given the `public/` directory
- When the application is deployed
- Then it SHALL contain the following files:
  - `favicon.ico`: A valid MS Windows icon resource (32x32)
  - `favicon.svg`: A scalable vector version of the icon
  - `favicon.png`: A 32x32 PNG version of the icon
  - `apple-touch-icon.png`: A 180x180 PNG version for iOS devices
  - `site.webmanifest`: A JSON manifest file defining the app's name, icons, and theme colors.

