## 1. Configuration
- [x] 1.1 Add `HOW_IT_WORKS_STEPS` constant array to `src/constants/site.ts` containing the title and description for each of the 3 steps.

## 2. Components
- [x] 2.1 Create `src/components/molecules/StepCard.astro` accepting `number`, `title`, and `description` props, matching the styling from the design (white semi-transparent background, orange gradient number badge).
- [x] 2.2 Create `src/components/organisms/HowItWorks.astro`.
- [x] 2.3 Implement the layout in `HowItWorks.astro` using `astro:assets` `<Image />` for the background, the dark navy overlay, and rendering the header with `<Badge variant="tag" class="border-none uppercase mb-4">ASI DE FACIL</Badge>`.
- [x] 2.4 Map over `HOW_IT_WORKS_STEPS` in `HowItWorks.astro` to render the `StepCard` components in a CSS grid (`grid-cols-1 md:grid-cols-3`).

## 3. Styling & Integration
- [x] 3.1 Add `--background-how-overlay` custom property to `src/styles/global.css` and a corresponding `.bg-how-overlay` utility class if needed, or use Tailwind arbitrary values for the dark navy gradient overlay.
- [x] 3.2 Import and render `<HowItWorks />` in `src/pages/index.astro` below the `<Services />` or `<Coverage />` sections.
