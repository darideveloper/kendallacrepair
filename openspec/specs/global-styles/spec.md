# global-styles Specification

## Purpose
TBD - created by archiving change apply-global-branding. Update Purpose after archive.
## Requirements
### Requirement: Global Color Palette
The application SHALL have a centralized color palette accessible via Tailwind utilities and CSS variables.

#### Scenario: Using brand colors in Tailwind
- Given the application uses Tailwind 4.0
- When a developer uses `text-brand-navy` or `bg-brand-orange`
- Then the correct brand hex code should be applied

### Requirement: Typography Configuration
The application SHALL provide font families for headings and body text.

#### Scenario: Applying font families
- Given the fonts are loaded via Fontsource
- When a developer uses `font-heading` or `font-body`
- Then the respective "Plus Jakarta Sans Variable" or "DM Sans Variable" font should be applied

### Requirement: Centralized Theme Definitions
The application SHALL define all brand colors, fonts, and gradients in the global CSS theme.

#### Scenario: Brand Green Gradient
- Given the `src/styles/global.css` file
- When adding a new brand color variant
- Then it SHALL define a `--background-brand-green-grad` CSS variable with a linear gradient from `#1b8a50` to `#27ae60`
- And it SHALL expose a `.bg-brand-green-grad` utility class

