## Context

The homepage currently uses automatic entrance animations that can delay or destabilize perceived first paint, especially around hero/LCP-adjacent content on mobile PageSpeed runs. Prior feedback requires this optimization to stay strictly scoped: no UI redesign, no content edits, and no global motion removal outside the first 2-3 sections.

## Goals / Non-Goals

**Goals:**

- Keep hero/LCP-adjacent content visible immediately at initial paint.
- Reduce automatic startup animation work in the first 2-3 homepage sections.
- Preserve user-triggered interaction feedback (hover/focus) where it does not run at startup.
- Enforce reduced-motion behavior that keeps content readable and visible.
- Preserve visual identity and all existing content.

**Non-Goals:**

- No color or contrast redesign.
- No copy, translation, metadata, route, or layout changes.
- No removal of all animations site-wide.
- No dependency changes.

## Decisions

1. Remove automatic entrance motion from hero/LCP-adjacent content.

   Rationale: LCP-sensitive elements should not begin hidden or translated by animation.

   Alternative considered: keep animation but shorten duration. Rejected because content still starts in a delayed/animated state.

2. Restrict scope to first 2-3 sections.

   Rationale: This is where startup metrics are most affected and matches project requirements.

   Alternative considered: remove motion across all sections. Rejected because it broadens UX impact beyond requested scope.

3. Keep interaction transitions that are event-driven.

   Rationale: Hover/focus states improve usability and do not necessarily affect startup rendering when not auto-run.

   Alternative considered: remove all transitions globally. Rejected as unnecessary and too broad.

4. Enforce reduced-motion safety for shared animation utilities.

   Rationale: Accessibility and performance both benefit when reduced-motion mode avoids hidden/transformed startup content.

## Risks / Trade-offs

- First load may feel less dynamic -> Mitigation: keep event-driven interactive feedback.
- Over-scoping can unintentionally alter visual rhythm in later sections -> Mitigation: limit changes to first 2-3 sections only.
- False confidence from one PageSpeed run -> Mitigation: compare multiple runs and median trend.

## Migration Plan

1. Identify startup animations applied to hero and first 2-3 sections.
2. Remove/defer nonessential automatic entrance animations in that scope only.
3. Keep interaction transitions and verify behavior on desktop/mobile.
4. Confirm no UI/content/metadata/color/route changes.
5. Re-run PageSpeed in multiple runs and compare trend/median.

Rollback: restore original animation class usage for targeted sections.

## Open Questions

- None.
