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
The application SHALL define all brand colors, fonts, and responsive breakpoints in the global CSS theme.

#### Scenario: Custom Tablet-LG Breakpoint
- Given the `src/styles/global.css` file
- When defining responsive variants
- Then it SHALL define a `--breakpoint-tablet-lg` with a value of `900px`

#### Scenario: Glassmorphism Design Tokens
- Given the `src/styles/global.css` file
- When defining brand color tokens
- Then it SHALL define `--color-glass-surface` as a 6% white blend
- And it SHALL define `--color-glass-border` as a 10% white blend

### Requirement: Service-Specific Gradients
The application SHALL provide specific brand gradients for different service categories in its global CSS theme.

#### Scenario: Category-specific background gradients
- Given the `src/styles/global.css` file
- When defining brand color tokens
- Then it SHALL define background gradients for all service categories (diag, repair, refrig, maint, install, air, duct, elec, comm, emerg)
- And it SHALL map these to utility classes for easy access in components

### Requirement: Footer CSS Variables
The global CSS theme MUST be updated to include the colors required for the footer component.

#### Scenario: Add footer theme colors
Add the following CSS variables to the `@theme` block in `src/styles/global.css` to match the footer design:
```css
  --color-footer-bg: #060d18;
  --color-footer-text: rgba(255, 255, 255, 0.5);
  --color-footer-border: rgba(255, 255, 255, 0.06);
```

### Requirement: Global Reduced Motion Support
The global styles SHALL provide reduced-motion behavior for nonessential animation utilities.

#### Scenario: Reduced motion disables automatic movement
- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** automatic animation utilities SHALL avoid movement, blinking, pulsing, and delayed opacity reveals

#### Scenario: Reduced motion keeps content visible
- **WHEN** reduced-motion rules are applied
- **THEN** affected content SHALL remain visible and readable without waiting for animation completion

