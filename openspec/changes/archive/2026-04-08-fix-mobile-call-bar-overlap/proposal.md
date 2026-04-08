---
change-id: 2026-04-08-fix-mobile-call-bar-overlap
description: Fix MobileCallBar overlap with WhatsApp and Chat buttons on mobile
status: draft
---

# Proposal: Fix MobileCallBar Overlap

## Problem Statement
On mobile devices, the `MobileCallBar` (fixed at the bottom) overlaps with the `WhatsAppButton` and `ChatButton` (also fixed at the bottom). This prevents users from easily accessing the floating action buttons and obscures important call-to-action elements.

## Proposed Solution
Adjust the bottom positioning of the `WhatsAppButton` and `ChatButton` on mobile screens to ensure they appear above the `MobileCallBar`. The `MobileCallBar` has a height of approximately 50-55px. Moving the buttons to `bottom-20` (80px) on mobile will provide sufficient clearance.

## Goals
- [x] Prevent overlap between `MobileCallBar` and floating buttons on mobile.
- [x] Maintain accessibility and usability of all bottom-fixed elements.
- [x] Ensure the change only affects mobile layouts (screens < 640px).

## Non-Goals
- [ ] Changing the visual design of the buttons or the call bar.
- [ ] Adding new functionality to the components.
