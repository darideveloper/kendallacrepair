# Design: HowItWorks Section Alignment

## Architecture
The "How It Works" section follows the "Short-Class" pattern established in the project (e.g., in the Services section). This pattern involves mapping complex Tailwind configurations to short, semantic classes in `global.css` to keep the HTML clean and maintainable.

### Components
1.  **HowItWorks (Organism):**
    - High-level layout.
    - Uses `hiw` as the root class.
    - Uses `si` (Section Inner) for containment.
    - Uses `sh` (Section Header) for the title and subtitle.
    - Uses `stg` (Step Grid) for the cards.
    - Includes a `tstrip` (Trust Strip) below the grid.
    - Includes a primary CTA button (`bp`).

2.  **StepCard (Molecule):**
    - Renders an individual step.
    - Uses `stc` as the card container.
    - Uses `stn` for the number.
    - Supports an optional `time` badge.
    - Supports an optional `wbadge` (Warranty Badge).

### Data Flow
- Translations are pulled from `how_it_works` key in the locale JSON files.
- The `steps` array will be expanded to include `time` and optionally `badge` (for the warranty info).

### Styles
- `hiw`: Padding, relative position, dark background (reuse `bg-how-overlay`).
- `stg`: Grid layout (3 columns on desktop, 1 on mobile).
- `stc`: Glassmorphism surface, rounded corners, padding.
- `stn`: Circular orange background with white text.
- `time`: Inline-block badge with clock icon (text-based emoji ⏱).
- `tstrip`: Horizontal flexbox with checkmarks and spacing.
- `bp`: Large orange button with hover effects.
