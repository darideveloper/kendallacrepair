## 1. Baseline and Scope Lock

- [ ] 1.1 Capture current PageSpeed baseline for homepage (multiple runs) including forced reflow, render-blocking CSS, and unused Maps JS evidence.
- [ ] 1.2 Confirm and document no-UI/no-content-change guardrails for this change.
- [ ] 1.3 Identify current startup path files impacting the reported audits (`Layout`, `Coverage`, global styles, startup scripts).

## 2. Deferred Map Loading

- [ ] 2.1 Implement on-demand map embed activation so Google Maps requests do not start during initial homepage startup.
- [ ] 2.2 Preserve current map container dimensions and styling before activation to avoid CLS or visual drift.
- [ ] 2.3 Verify map still resolves to the same location/context and remains functional when reached by users.
- [ ] 2.4 Remove or defer eager map preconnect hints from initial head while map loading is deferred.

## 3. Startup CSS Critical Path Reduction

- [ ] 3.1 Separate first-viewport-critical styles from non-critical/decorative/later-section styles.
- [ ] 3.2 Defer non-critical style loading after first paint without changing final visuals.
- [ ] 3.3 Verify no regression in desktop/mobile rendering parity after style path split.

## 4. Startup Reflow Safety

- [ ] 4.1 Audit startup scripts for read-after-write layout-thrashing patterns and remove any that can force synchronous reflow.
- [ ] 4.2 Ensure interaction-related DOM mutations are bound to user events instead of startup execution.
- [ ] 4.3 Confirm no UI behavior regressions for header/menu/chat interactions.

## 5. Verification and Validation

- [ ] 5.1 Run production build and verify generated startup resources align with deferred map and minimized critical CSS behavior.
- [ ] 5.2 Re-run PageSpeed multiple times and compare medians vs baseline for LCP/FCP and relevant diagnostics.
- [ ] 5.3 Verify no changes to UI structure, copy, translations, metadata, or route behavior.
- [ ] 5.4 Verify initial head does not include unnecessary map preconnect hints before map demand.
- [ ] 5.5 Run OpenSpec validation in strict mode for this change.
