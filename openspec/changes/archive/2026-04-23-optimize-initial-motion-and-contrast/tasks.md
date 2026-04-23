## 1. Baseline Review

- [x] 1.1 Inventory automatic initial-load animations in hero, hero form, and section headers within the first 2-3 homepage sections.
- [x] 1.2 Capture current mobile and desktop screenshots or build output before motion adjustments.

## 2. Initial Motion Optimization

- [x] 2.1 Remove initial entrance animation from hero content that includes the H1, supporting copy, CTAs, and trust row.
- [x] 2.2 Remove initial entrance animation from the hero form while preserving its layout and styling.
- [x] 2.3 Remove or defer initial entrance animation in early section headers within the first 2-3 homepage sections.
- [x] 2.4 Keep hover/focus transitions for interactive controls where they do not run automatically on page load.
- [x] 2.5 Add reduced-motion rules for global animation utilities so content remains visible when motion is disabled.

## 3. Scope Guardrails

- [x] 3.1 Avoid layout changes, content changes, route changes, metadata changes, and color/contrast changes.
- [x] 3.2 Confirm core brand colors and existing visual hierarchy remain unchanged.

## 4. Verification

- [x] 4.1 Run the production build.
- [x] 4.2 Inspect mobile and desktop output for no broken layout or overlapping text.
- [x] 4.3 Verify hero/LCP-adjacent content is visible at initial paint and not hidden by animation.
- [x] 4.4 Verify reduced-motion mode keeps animated content visible and readable.
- [x] 4.5 Run OpenSpec validation for the change.
- [x] 4.6 Record that PageSpeed should be re-run after deploy and compared using multiple runs or a median score because lab results are variable.

## Notes

- PageSpeed should be re-run after deployment using multiple runs or a median score because lab results can vary.
- Browser screenshots were not captured because no Chrome or Edge CLI binary was available in the local environment; verification used production build output, generated HTML/CSS inspection, and scoped diffs.
