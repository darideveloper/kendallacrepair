# global-styles Specification Delta

## ADDED Requirements

### Requirement: Service-Specific Gradients
The application SHALL provide specific brand gradients for different service categories in its global CSS theme.

#### Scenario: Category-specific background gradients
- Given the `src/styles/global.css` file
- When defining brand color tokens
- Then it SHALL define background gradients for all service categories (diag, repair, refrig, maint, install, air, duct, elec, comm, emerg)
- And it SHALL map these to utility classes for easy access in components
