# Spec Delta: Global Styles

## ADDED Requirements

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
