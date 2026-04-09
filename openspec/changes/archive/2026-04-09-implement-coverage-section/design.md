# Design: Coverage Map Section Architecture

## Architectural Reasoning

### 1. Data-Driven Section
The `Coverage` organism will be entirely data-driven. Instead of hardcoding neighborhood names or trust badge text, it will map over arrays imported from `src/constants/site.ts`. This ensures:
- **Easy Maintenance**: Updating a service area or changing a badge title happens in one place.
- **Scalability**: New neighborhoods or badges can be added without modifying the JSX structure.

### 2. Atomic Component Reuse
- **`Badge.astro` Refactoring**: By adding a `showDot` prop to the existing `Badge` atom, we avoid creating a redundant `Tag.astro` component. This keeps the atomic library lean and maintains a consistent look for small metadata elements.
- **`Icon.astro` Expansion**: Adding `check-circle` and `dollar-sign` paths to the shared icon atom centralizes SVG management and ensures consistent styling (stroke weight, sizing) across the project.

### 3. Layout and Styling
- **CSS Gradients**: New brand gradients (especially the green variant) will be added to `global.css` as CSS variables and Tailwind utilities to maintain the "Brand First" styling philosophy.
- **Responsiveness**: The section will use a CSS Grid layout that shifts from two columns (desktop) to one column (mobile) with consistent padding and gap values based on the existing design tokens.
- **Dark Theme Contrast**: The section uses the `brand-navy` background, requiring trust badges to use high-contrast glassmorphism (semi-transparent backgrounds and borders).

## Implementation Details

### `CoverageBadge.astro` (Molecule)
This component will accept:
- `icon`: The name of the icon from `Icon.astro`.
- `title`: Primary text (e.g., "Licenciado").
- `subtitle`: Secondary text (e.g., "Estado de Florida").
- `gradient`: A string mapped to a brand gradient class (`blue`, `orange`, `green`).

### `Coverage.astro` (Organism)
This container will manage the section structure:
- **Left Column**: Google Maps iframe embedded with an Aspect Ratio utility or fixed height.
- **Right Column**: Header (Title/Subtitle), 2x2 Grid of `CoverageBadge` molecules, and a flex-wrap container for `Badge` atoms (tags).
