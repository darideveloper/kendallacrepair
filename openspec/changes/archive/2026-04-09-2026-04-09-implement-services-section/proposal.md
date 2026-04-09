---
name: implement-services-section
description: Implement the Services section with featured cards and a detailed accordion based on the provided design.
---

# Proposal: Implement Services Section

## Problem
The current landing page lacks the "Services" section, which is critical for explaining the company's offerings and improving SEO. The design requires a two-part layout: 4 featured service cards and a detailed 9-category accordion.

## Proposed Solution
- **Featured Services**: Create a `ServiceCard` molecule to display the top 4 services with images and hover effects.
- **Detailed Accordion**: Create an `AccordionItem` atom and a `ServicesAccordion` molecule to handle the 9 service categories.
- **Data-Driven**: Centralize all service data in `src/constants/site.ts` to ensure DRY development and easy maintenance.
- **Styling**: Add missing brand gradients to `global.css` and use Tailwind 4 for all layout and styling.

## Impact
- **User Experience**: Provides clear information about available services.
- **SEO**: Increases keyword density for HVAC services in Kendall.
- **Maintenance**: Using a data-driven approach allows for quick updates to service lists.
