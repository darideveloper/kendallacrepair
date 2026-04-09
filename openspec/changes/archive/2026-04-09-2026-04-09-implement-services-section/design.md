# Design: Services Section

## Overview
The "Services" section is a key part of the landing page, consisting of two main parts:
1.  **Featured Services Grid**: 4 cards with images and descriptions.
2.  **Detailed Services Accordion**: 9 categories with specific lists of services.

## Architecture
- **Data Layer**: Store all service information in `src/constants/site.ts`.
- **UI Layer**:
    - `src/components/atoms/AccordionItem.astro`: Handles the toggle logic and icon styling.
    - `src/components/molecules/ServiceCard.astro`: Displays image, title, and description.
    - `src/components/organisms/Services.astro`: Combines the featured grid and accordion.
- **Interactivity**: Use vanilla JavaScript for the accordion's `open` state, attached to the `onclick` attribute for minimal JS footprint.

## Visual Styling
- **Gradients**: Each category in the accordion uses a unique background gradient for its icon container.
- **Hover Effects**: Featured service cards use a top border gradient and a lift animation.
- **Typography**: Header tags (h2, h3) follow the `Plus Jakarta Sans` font family.

## Scalability
The content is entirely data-driven, making it easy to add more categories or change featured services by only modifying `src/constants/site.ts`.
