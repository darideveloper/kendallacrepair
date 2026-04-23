## Context

Current PageSpeed findings show four related startup bottlenecks:

1. Forced reflow (~107 ms, unattributed) during initial navigation.
2. Render-blocking stylesheet participation in LCP path (`/_astro/Layout.*.css`).
3. Large unused Google Maps JavaScript payload (~191 KiB estimated) loaded from third-party map resources.
4. Variability across runs that makes one-off scores unreliable.

The existing UX must remain visually and structurally unchanged. This design therefore targets *when* resources execute/load, not *what* users see.

## Goals / Non-Goals

**Goals:**

- Move non-critical Google Maps work out of the initial critical path.
- Reduce initial style and script pressure that can delay LCP/FCP.
- Prevent startup layout-thrashing patterns associated with forced reflow.
- Preserve current UI, layout, copy, metadata, localization, and route behavior.
- Validate improvements with repeated measurements, not a single run.

**Non-Goals:**

- No redesign or content rewrite.
- No change to business logic, forms, SEO copy, or translation strings.
- No replacement of brand fonts or core typography system.
- No dependency-heavy framework migration.

## Decisions

1. Defer interactive map loading until real need is detected.

   Rationale: The coverage map is below the first viewport on typical entry flows, but currently causes third-party script activity that appears in PageSpeed unused-JS and reflow reports. Deferring actual map initialization until viewport proximity or user intent removes this from startup.

   Alternative considered: Keep eager map initialization and only rely on `loading="lazy"`. This is insufficient because browser heuristics can still start fetches earlier than desired.

2. Keep map container geometry stable before map activation.

   Rationale: A fixed-size map shell preserves existing visual layout and avoids introducing layout shift while the embed is deferred.

   Alternative considered: Collapsing map area until load. Rejected because it changes layout behavior and risks CLS.

3. Split style delivery into critical and deferred layers.

   Rationale: The startup stylesheet should prioritize first-viewport typography/layout essentials. Non-critical section/motion rules can be loaded after first paint while keeping the same final visual output.

   Alternative considered: Leave all styles in one blocking bundle. Rejected because it keeps avoidable CSS on the critical path.

4. Enforce reflow-safe startup scripting.

   Rationale: Startup scripts should avoid read-after-write geometry patterns and avoid unnecessary style invalidations during initial render. Interaction scripts can remain event-driven and isolated to user actions.

   Alternative considered: Ignore forced-reflow signal as tooling noise. Rejected because consistent perf regressions were observed across runs.

5. Align preconnect strategy with deferred map activation.

   Rationale: If map loading is deferred, unconditional `maps.googleapis.com`/`maps.gstatic.com` preconnect in the initial head can spend early connection work on non-critical resources.

   Alternative considered: Keep existing eager preconnect tags permanently. Rejected because it conflicts with the goal of minimizing third-party startup work.

6. Treat third-party cache TTL as constrained and optimize request timing instead.

   Rationale: Cache TTL values for Google-hosted scripts are externally controlled. The practical optimization is to avoid fetching them during startup when they are not needed.

   Alternative considered: Attempt to tune Google-hosted TTL behavior. Rejected because it is outside application control.

## Risks / Trade-offs

- Deferred map activation can delay interactivity when user reaches the section quickly -> Mitigation: trigger load by viewport proximity (not only explicit click).
- CSS layering can cause temporary style mismatch if critical/deferred boundaries are wrong -> Mitigation: define strict critical-set criteria and verify visual parity on mobile/desktop.
- Third-party behavior can still vary between test runs -> Mitigation: use median across multiple PageSpeed runs and compare trend, not a single score.
- Over-constraining script behavior can complicate small interactions -> Mitigation: limit rules to startup path and keep interaction handlers straightforward.
- Removing eager preconnect can slightly delay first map interaction -> Mitigation: trigger preconnect/load on viewport proximity before direct interaction point.

## Migration Plan

1. Capture baseline with production build and multiple PageSpeed runs.
2. Implement deferred map activation with stable map container rendering.
3. Reorganize style delivery into critical vs deferred startup path without visual drift.
4. Align map preconnect behavior with deferred map activation.
5. Audit startup scripts for potential forced-reflow patterns and adjust where needed.
6. Rebuild and verify visual parity (desktop/mobile) plus no content/metadata changes.
7. Re-run PageSpeed multiple times and compare median metrics against baseline.

Rollback strategy: revert deferred map loading and style split changes, restoring previous load order.

## Open Questions

- None. The implementation can proceed with current constraints.
