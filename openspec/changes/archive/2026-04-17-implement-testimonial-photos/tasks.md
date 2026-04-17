# Tasks: Implement Real Photos for Testimonials

- [x] **Infrastructure**
    - [x] Create directory `src/assets/images/clients/`.
- [x] **Assets**
    - [x] Download a royalty-free photo of a woman for "Maria G." and save as `client-maria.jpg`.
    - [x] Download a royalty-free photo of a man for "Carlos R." and save as `client-carlos.jpg`.
    - [x] Download a royalty-free photo of a woman for "Ana S." and save as `client-ana.jpg`.
- [x] **Data & Types**
    - [x] Update `Testimonial` interface in `src/constants/site.ts` to include optional `image` (ImageMetadata) and ensure `initials` are part of the type.
    - [x] Update `en.json` and `es.json` to include the `initials` property for each testimonial (fixing current bug).
    - [x] Import client images in `src/constants/site.ts` and create a `CLIENT_IMAGES` mapping object.
- [x] **Components**
    - [x] Update `TestimonialCard.astro` to accept the `image` prop and implement the conditional rendering logic (Image vs. Initials).
    - [x] Update `Testimonials.astro` to map the `CLIENT_IMAGES` to the testimonial items based on the author's name or a unique ID before passing them to the cards.
- [x] **Validation**
    - [x] Verify that all three testimonials display the correct photos on the home page.
    - [x] Verify that the initials fallback still works by temporarily removing an image prop.
    - [x] Run `npm run build` to ensure image optimization works correctly.
