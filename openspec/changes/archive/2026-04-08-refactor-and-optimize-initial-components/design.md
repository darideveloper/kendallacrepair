## Context
The initial implementation contains several critical bugs and DRY (Don't Repeat Yourself) violations. The project requires a more robust structure for asset management and component reusability.

## Goals
- Fix build-breaking dependency issues.
- Resolve broken asset paths.
- Centralize site-wide configuration.
- Reduce component redundancy.
- Implement missing core functionalities.

## Decisions

### Shared Form Wrapper
Create a `FormField.astro` component to handle shared logic for `Input` and `Textarea` (labels, required markers, error states). This ensures consistent styling and behavior across all form elements.

### Centralized Icons
Implement an `Icon.astro` atom to handle SVG rendering. This replaces inlined SVGs and allows for easier management of colors, sizes, and styles.

### Global Configuration
Move site-wide constants (e.g., phone numbers, addresses, social links) to `src/constants/site.ts`. This makes global updates much simpler and less error-prone.

### Mandatory DRY Guidelines
Update `openspec/project.md` to include a strict requirement for DRY practices. This ensures that any future additions or changes follow the established reusability patterns.

## Risks / Trade-offs
- **Refactoring Effort**: Refactoring existing components requires careful testing to avoid regressions.
- **Complexity**: Adding a shared `FormField` or `Icon` component introduces a small layer of abstraction, but significantly improves maintainability.

## Migration Plan
1. Move images to `public/`.
2. Update `package.json`.
3. Create `src/constants/site.ts`.
4. Refactor components one by one (`FormField`, `Icon`, then `Input`/`Textarea`).
5. Update existing organisms (`Hero`, `Header`) to use new components and constants.
6. Implement the `Thank You` page and mobile menu functionality.
