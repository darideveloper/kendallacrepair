## RENAMED Requirements
- FROM: `### Requirement: Centralized Logo Management`
- TO: `### Requirement: Centralized Asset Management`

## MODIFIED Requirements
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
