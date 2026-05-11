# Proposal: Align Hero Section with New HTML Design

## Problem
The current Hero section does not match the latest high-conversion design provided in HTML. Specifically:
- The subheadline and value propositions are not optimized for urgency.
- There is no direct WhatsApp CTA, which is a preferred communication channel for many customers.
- The Hero form contains an optional email field that adds friction.
- The trust indicators (Licensed, Same-day, Estimates) need wording updates and updated icons.

## Solution
Update the Hero section to achieve visual and content parity with the provided HTML design while maintaining the project's architectural standards (Astro, Tailwind 4.0, Atomic Design, and i18n).

Key changes:
1.  **Refine Copy**: Update all localized strings to match the "Fast. Reliable. Today." and "5-minute response" messaging.
2.  **Add WhatsApp CTA**: Implement a brand-consistent WhatsApp button in the Hero section.
3.  **Streamline Form**: Remove the email field and update the form header/footer to emphasize immediate response.
4.  **Update Visuals**: Add a live status indicator (pulsing dot) to the availability badge and update trust row icons.

## Scope
- `src/messages/en.json` & `src/messages/es.json`: Update strings for hero and form.
- `src/components/atoms/Button.astro`: Add `whatsapp` variant.
- `src/components/atoms/Icon.astro`: Add `whatsapp` filled icon.
- `src/components/molecules/HeroForm.astro`: Remove email field, update header and privacy note.
- `src/components/organisms/Hero.astro`: Update badge, subheadline, CTAs, and trust row.
- `src/styles/global.css`: Add pulse animation for the live status dot.
