# Design: Testimonials Alignment

## Architectural Overview
The Testimonials section follows the Atomic Design pattern (Organism -> Molecule -> Atom). We will extend the existing `Testimonials.astro` (Organism) and `TestimonialCard.astro` (Molecule) components.

## Data Model Updates
The `Testimonial` type in `src/constants/site.ts` needs to be updated to support the new metadata:
```typescript
export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  initials: string;
  image?: ImageMetadata;
  date?: string; // e.g., "Hace 2 semanas"
  isVerified?: boolean; // defaults to true for this section
}
```

## Component Enhancements

### `Testimonials.astro`
- **Google Rating Counter**: A new block will be inserted between the header and the testimonials grid. It will feature:
  - Star ratings (`⭐⭐⭐⭐⭐ 4.9/5`)
  - Subtext indicating the source ("Basado en resenas de Google")
  - Link to view all reviews on Google.

### `TestimonialCard.astro`
- **Header**: Use standard star characters (`★★★★★`).
- **Body**: The quote will remain as is but with updated content from i18n.
- **Footer**:
  - Author name will be bold (`<strong>`).
  - Location and Date will be displayed on the same line, separated by a bullet.
- **Verification Badge**: A new `div` at the bottom of the card with a checkmark icon and "Resena verificada de Google" text.

## Styling
We will use Tailwind CSS classes that map to the visual intent of the original HTML classes:
- `rev-counter` -> A flexbox container for the rating summary.
- `rv-badge` -> A small, muted badge at the bottom of the card.
- `ra-info` -> Updated font sizes and colors for author metadata.

## i18n
New keys will be added to `testimonials` in `en.json` and `es.json`:
- `rating_summary`: "4.9/5"
- `rating_count_text`: "Basado en resenas de Google"
- `view_all_link`: "Ver todas en Google →"
- `verified_text`: "Resena verificada de Google"
- Items in `items` will get a `date` field.
