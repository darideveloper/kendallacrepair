# global-styles Specification Delta

## MODIFIED Requirements

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
