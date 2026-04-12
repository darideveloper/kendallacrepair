---
change-id: add-final-cta
title: Add Final CTA Section
description: Implement the high-conversion Final CTA banner as seen in the UI design.
status: completed
author: Gemini CLI
date: 2025-05-15
---

# Proposal: Add Final CTA Section

## Objective
Implement a high-conversion "Final CTA" banner at the bottom of the landing page (after the FAQ section) to drive service calls and inquiries. This section must follow the established design language and reuse existing components for consistency and maintainability.

## Rationale
The landing page requires a clear and compelling closing statement that summarizes the value proposition (Free Estimates, Same-Day Service, 24/7 Availability) and provides immediate contact options (Phone and Form link). This section is critical for maximizing user conversion at the end of their scrolling journey.

## Capabilities
- **final-cta-section**: A new organism component providing a responsive, high-impact banner with background imagery, fluid typography, and primary/secondary CTAs.

## Related Specs
- `ui-components`: Reuses `Button` and `Icon` atoms.
- `site-configuration`: Reuses `SITE` constants for phone and links.
- `global-styles`: Reuses brand gradients and animations.
