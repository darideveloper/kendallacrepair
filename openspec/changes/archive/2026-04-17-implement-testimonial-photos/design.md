# Design: Implement Real Photos for Testimonials

## Architecture
The implementation follows the existing pattern for images in the project, utilizing Astro's built-in optimization tools.

### 1. Asset Management
New images will be stored in `src/assets/images/clients/`.
- `client-maria.jpg`
- `client-carlos.jpg`
- `client-ana.jpg`

These will be imported in `src/constants/site.ts` to leverage Astro's `ImageMetadata` for type safety and optimization.

### 2. Component Logic (`TestimonialCard.astro`)
The component will be updated to handle an optional `image` prop of type `ImageMetadata`.

```astro
---
import { Image } from 'astro:assets';
// ...
const { quote, author, location, initials, image, class: className } = Astro.props;
---
<!-- ... -->
<div class="w-11 h-11 rounded-full bg-brand-blue-grad overflow-hidden shrink-0 flex items-center justify-center">
  {image ? (
    <Image 
      src={image} 
      alt={author} 
      width={44} 
      height={44} 
      class="w-full h-full object-cover"
    />
  ) : (
    <span class="text-white font-bold text-[16px] font-heading">{initials}</span>
  )}
</div>
```

### 3. Data Flow
1.  **Constants**: `src/constants/site.ts` will define a mapping of testimonial IDs to their respective imported images.
2.  **Organism**: `Testimonials.astro` will use the customer name or a new ID from the translation strings to look up the correct image from the constants before passing it to the `TestimonialCard`.

## Trade-offs
- **Initial Load**: Adding three small optimized images has a negligible impact on LCP compared to the trust benefits.
- **Complexity**: Slightly increases the data mapping logic in `Testimonials.astro` to connect translated strings with imported assets.
