# Design: Coverage Section Quality Refactor

## Architectural Reasoning

### 1. Brand Tokens over Literal Values
The current hardcoded `bg-white/6` and `border-white/10` in `CoverageBadge.astro` should be moved to the Tailwind 4.0 `@theme` block in `global.css`. This follows the "Brand First" philosophy by naming tokens based on their purpose (e.g., `--color-glass-surface`) rather than their implementation. This makes future design adjustments (like changing the opacity of all cards) trivial.

### 2. Standardized Breakpoints
The `900px` breakpoint is currently a "magic number" used in a media query in `Coverage.astro`. By defining `tablet-lg: 900px` in the Tailwind theme, we:
- Ensure consistency if other sections need a similar layout shift.
- Can use standard Tailwind syntax (e.g., `tablet-lg:grid-cols-2`) instead of `min-[900px]:grid-cols-2`.

### 3. Type-Safe Component Contracts
- **`IconName` Export**: Currently, `Icon.astro` defines its names in a literal type. By exporting `type IconName`, other components (like `CoverageBadge`) can import and use it for their props, providing full IDE autocompletion and compile-time validation.
- **Stronger Constants**: Refactoring `COVERAGE_BADGES` in `site.ts` to use the `IconName` type ensures that adding a badge with an invalid icon name is caught early.

### 4. Semantic Atomic Variants
Refactoring `Badge.astro` to use `variant="status"` (with dot) and `variant="tag"` (no dot) is more semantic than toggling a `showDot` boolean. This makes the intent of the component clearer at the call site and simplifies its internal logic.

## Detailed Plan

### `global.css`
- Add `--color-glass-surface: color-mix(in srgb, var(--color-white) 6%, transparent);`
- Add `--color-glass-border: color-mix(in srgb, var(--color-white) 10%, transparent);`
- Add custom screen `tablet-lg: 900px` (or use a media query if V4 theme doesn't support screens directly in that way, but V4 supports `@theme { --breakpoint-tablet-lg: 900px; }`).

### `Badge.astro`
- Update props to include `variant: 'status' | 'tag'`.
- Map `showDot` to `variant === 'status'`.

### `CoverageBadge.astro`
- Import `IconName` from `Icon.astro`.
- Replace hardcoded `bg-white/6` with `bg-glass-surface`.
- Replace hardcoded `border-white/10` with `border-glass-border`.
