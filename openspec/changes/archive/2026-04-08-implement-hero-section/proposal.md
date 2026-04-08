---
name: Implement Hero Section and Global Branding
id: implement-hero-section
description: Replicate the hero section design from ui-design/hero/design.html into the Astro project, including necessary global style updates and new UI components.
---

# Proposal: Implement Hero Section and Global Branding

## Purpose
This proposal outlines the implementation of the primary hero section for the Kendall AC Repair website, as designed in `ui-design/hero/design.html`. The goal is to establish a high-conversion entry point for users, ensuring brand consistency and a polished UI across all devices.

## Requirements
- **Global Styles**: Update `src/styles/global.css` with the necessary gradients, animations, and Tailwind 4 theme extensions.
- **UI Components (Atoms & Molecules)**: Create reusable components such as `Button.astro`, `Badge.astro`, `UrgencyBanner.astro`, and `HeroForm.astro`.
- **Hero Section (Organism)**: Implement the `Hero.astro` organism with a 2-column layout (content and form).
- **Responsive Design**: Ensure full responsiveness, including a mobile-only call bar and floating action buttons (WhatsApp and Chat).
- **Performance**: Use WebP for images and ensure optimized font loading.

## Architecture
- **Atomic Design**: Follow the established `atoms`, `molecules`, and `organisms` structure.
- **Astro Components**: Use Astro for the hero section and static components to maximize performance.
- **Tailwind CSS 4**: Leverage Tailwind's native theme extensions for colors, fonts, and custom utilities.

## Spec Deltas
- `openspec/changes/implement-hero-section/specs/global-branding-updates/spec.md`: Extends `global-styles` with specific gradients and animations.
- `openspec/changes/implement-hero-section/specs/ui-components/spec.md`: Defines requirements for the new atom and molecule components.
- `openspec/changes/implement-hero-section/specs/hero-section/spec.md`: Specifies the structure and behavior of the main Hero organism.
