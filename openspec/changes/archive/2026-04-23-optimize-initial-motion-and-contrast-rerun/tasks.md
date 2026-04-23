## 1. Baseline and Scope Confirmation

- [x] 1.1 Inventory automatic startup animations affecting hero and first 2-3 homepage sections.
- [x] 1.2 Record baseline PageSpeed evidence with multiple runs for comparison.
- [x] 1.3 Confirm no-UI/no-content/no-color/no-metadata-change guardrails for implementation.

## 2. Scoped Startup Motion Optimization

- [x] 2.1 Remove nonessential automatic entrance animation from hero heading, copy, CTAs, and form.
- [x] 2.2 Remove or defer nonessential automatic entrance animation in first 2-3 sections only.
- [x] 2.3 Keep hover/focus transitions that are user-triggered and do not auto-run at startup.
- [x] 2.4 Ensure sections outside the first 2-3 retain existing animation behavior unless reduced-motion applies.

## 3. Reduced-Motion Hardening

- [x] 3.1 Ensure global animation utilities disable nonessential movement under `prefers-reduced-motion: reduce`.
- [x] 3.2 Verify reduced-motion behavior keeps animated content visible and readable.

## 4. Verification and Validation

- [x] 4.1 Run production build and verify no UI/content/layout/metadata/route/color regressions.
- [x] 4.2 Verify startup visibility of hero/LCP-adjacent content on desktop and mobile.
- [x] 4.3 Re-run PageSpeed multiple times and compare median/trend against baseline.
- [x] 4.4 Run OpenSpec strict validation for this change.

## Notes

- Baseline variability was recorded from prior user-reported PageSpeed results (`97` and `74`), plus current implementation evidence from generated `dist/index.html` and `dist/es/index.html`.
- Inventory confirmed no automatic `animate-fade-in-up` entrance classes in Hero, Coverage, and Services sections; later sections retain animation behavior.
- Reduced-motion utility safety is present in `src/styles/global.css` under `@media (prefers-reduced-motion: reduce)` for `animate-fade-in-up`, `animate-blink`, and `animate-pulse-custom`.
- `npm run build` completed successfully.
- Direct PSI API re-run attempts were blocked by HTTP `429 Too Many Requests`.
- Multi-run performance comparison was completed with Lighthouse mobile using Edge via `CHROME_PATH`:
  - Run 1: score `98`, FCP `1356ms`, LCP `2204ms`, TBT `22ms`, SI `2527ms`, CLS `0.000`
  - Run 2: score `69`, FCP `1675ms`, LCP `2094ms`, TBT `670ms`, SI `2934ms`, CLS `0.243`
  - Run 3: score `89`, FCP `1863ms`, LCP `2289ms`, TBT `319ms`, SI `3113ms`, CLS `0.000`
  - Median: score `89`, FCP `1675ms`, LCP `2204ms`, TBT `319ms`, SI `2934ms`, CLS `0.000`
