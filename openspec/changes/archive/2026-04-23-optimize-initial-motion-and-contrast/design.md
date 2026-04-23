## Context

The current UI uses `animate-fade-in-up` in hero content, hero form, and several section headers. These effects are visually small, but PageSpeed mobile runs can penalize animation work that starts immediately in the first viewport, especially when LCP-adjacent content begins hidden or translated. PageSpeed lab scores can still vary after the change, so verification should compare multiple runs rather than relying on one score.

Scope was intentionally narrowed to the first 2-3 homepage sections, because those are the sections most likely to influence early-render metrics. Global floating actions and urgency indicators remain unchanged in default mode.

## Goals / Non-Goals

**Goals:**

- Keep above-the-fold LCP candidates visible and stable at initial paint.
- Reduce animation work during the initial page load, especially on mobile.
- Reduce PageSpeed score volatility caused by initial motion or hidden/transformed LCP-adjacent content.
- Preserve interactive hover/focus transitions that do not run automatically on page load.
- Respect `prefers-reduced-motion`.
- Preserve the existing colors, layout, content, and visual hierarchy.

**Non-Goals:**

- No content, copy, translation, metadata, or route changes.
- No layout restructuring.
- No color, contrast, or brand token changes.
- No brand redesign or palette replacement.
- No removal of all motion from the site.
- No new animation library or dependency.
- No guarantee of a specific PageSpeed score, because lab runs vary by network and CPU conditions.

## Decisions

1. Remove initial-load entrance animation from hero/LCP-adjacent content.

   Rationale: `animate-fade-in-up` starts elements at `opacity: 0` and `translateY(30px)`. If applied to the hero heading, hero copy, or form, the browser can render visually important content later than necessary.

   Alternative considered: Shorten the animation duration. This still starts the content hidden/transformed and does not fully remove the LCP risk.

2. Limit optimization scope to early sections only.

   Rationale: The optimization is deliberately limited to early section content that influences initial rendering the most. Keeping floating actions and urgency indicators as-is preserves expected global behavior while avoiding broader UX drift.

   Alternative considered: Remove or defer floating action animations globally. This broadens behavioral impact beyond the requested 2-3 section scope.

3. Keep hover/focus transitions.

   Rationale: Hover/focus transitions do not automatically run during initial load and provide useful feedback. They should remain unless a specific transition causes measurable layout or paint cost.

   Alternative considered: Remove all transitions globally. That would make the UI feel less polished and is broader than needed.

4. Add reduced-motion safeguards globally.

   Rationale: `prefers-reduced-motion` is an accessibility expectation and also gives a clean way to disable nonessential motion for users and test environments that request reduced motion.

## Risks / Trade-offs

- The page may feel less lively on first load -> Mitigate by preserving hover/focus transitions and below-the-fold motion where safe.
- Removing entrance animation can expose elements immediately -> Mitigate by checking mobile/desktop screenshots for polish and hierarchy.
- Overly broad reduced-motion rules can remove useful feedback -> Mitigate by targeting automatic animations and keeping basic state changes functional.

## Migration Plan

1. Inventory initial-load animations.
2. Remove or defer automatic initial animations on hero, hero form, and early section headers in the first 2-3 sections.
3. Add `prefers-reduced-motion` rules for global animation utilities.
4. Run build and inspect mobile/desktop output.
5. Run PageSpeed after deploy and compare score stability across multiple runs or a median score.

Rollback is to restore the prior animation classes.

## Open Questions

- None.
