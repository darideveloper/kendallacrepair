## Why

Above-the-fold entrance animations and infinite motion can delay or destabilize perceived initial rendering, especially on mobile PageSpeed runs where LCP and main-thread timing are more sensitive. Recent PageSpeed runs can vary, so the goal is to reduce initial-render risk and improve score stability, not to guarantee a fixed score.

## What Changes

- Remove or defer initial-load entrance animations from LCP-adjacent hero content and the first 2-3 homepage sections that most affect early render.
- Keep hover/focus transitions that do not run during initial page load.
- Limit or avoid infinite animations only within the targeted early sections, while keeping global behavior unchanged outside that scope and respecting reduced-motion preferences.
- Keep global floating actions and urgency indicators with their default behavior outside the targeted first sections.
- Verify that visual hierarchy, colors, content, layout, translations, metadata, and brand identity remain unchanged.
- Verify mobile and desktop builds after the motion adjustments.
- Record that PageSpeed must be re-run after deploy using multiple runs or a median comparison because lab results are naturally variable.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `performance`: Add requirements for initial-load motion to avoid delaying LCP or creating unnecessary animation work.
- `global-styles`: Add requirements for motion safety and reduced-motion behavior.

## Impact

- Affects selected above-the-fold and early-section component class usage (first 2-3 sections).
- Keeps global floating actions and urgency animation behavior unchanged by default.
- Does not affect color opacity, brand tokens, copy, translation, route, metadata, dependency, or layout.
- The intended visual result is the same site with calmer initial load behavior.
