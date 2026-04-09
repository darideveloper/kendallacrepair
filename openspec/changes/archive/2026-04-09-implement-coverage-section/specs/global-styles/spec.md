# global-styles Specification Delta

## ADDED Requirements

### Requirement: Centralized Theme Definitions
The application SHALL define all brand colors, fonts, and gradients in the global CSS theme.

#### Scenario: Brand Green Gradient
- Given the `src/styles/global.css` file
- When adding a new brand color variant
- Then it SHALL define a `--background-brand-green-grad` CSS variable with a linear gradient from `#1b8a50` to `#27ae60`
- And it SHALL expose a `.bg-brand-green-grad` utility class
