---
change-id: implement-testimonial-photos
title: Implement Real Photos for Testimonials
status: proposed
author: Gemini CLI
date: 2026-04-17
---

# Proposal: Implement Real Photos for Testimonials

## Problem
The testimonials section currently uses text-based initials within a colored circle. While this was the original design choice, it lacks the "human touch" and visual trust that real profile photos provide for a service-oriented landing page.

## Proposed Solution
We will replace the initials-based avatars with real, royalty-free profile photos for each testimonial.

1.  **Asset Sourcing**: Download three high-quality, royalty-free profile images (representing "Maria G.", "Carlos R.", and "Ana S.") from a source like Unsplash.
2.  **Storage**: Place these images in `src/assets/images/clients/`.
3.  **Component Enhancement**: Modify `TestimonialCard.astro` to accept an optional `image` property. If provided, it will render the image; otherwise, it will fall back to the initials (preserving backward compatibility).
4.  **Data Integration**: Update the i18n message files (`en.json`, `es.json`) and the `site.ts` constants to include the image information.

## Impact
- **User Interface**: More visually appealing and trustworthy testimonials section.
- **Performance**: Minimal impact as images will be optimized using Astro's `<Image />` component.
- **Maintainability**: The component will remain flexible, supporting both images and initials.
