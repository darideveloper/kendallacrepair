## Context

The project builds successfully, but `npx astro check` fails because icon typing is inconsistent across files. Multiple components and constants import `IconName` from `Icon.astro`, but that type is currently not exported. Additionally, the 404 page uses `alert-triangle`, which is not included in the icon registry/type union used by `Icon.astro`.

This creates a type-safety gap: the icon atom is intended to be centralized, but consumers cannot reliably depend on a shared exported contract.

## Goals / Non-Goals

**Goals:**

- Re-establish a single, exportable icon-name contract for all icon consumers.
- Ensure all icon names used in typed consumers are valid members of the icon registry.
- Make `npx astro check` pass for icon-related errors without changing visual behavior.

**Non-Goals:**

- No redesign of icons or icon styling.
- No layout, content, translation, or route changes.
- No new dependency or framework changes.

## Decisions

1. Export `IconName` from `Icon.astro` and keep it as the source-of-truth union.

Rationale: Existing consumers already import from `Icon.astro`; exporting the type preserves current project structure with minimal code churn.

Alternative considered: Move icon types to a new shared `.ts` module. This is valid, but larger than necessary for the immediate failure and not required to restore checks.

2. Add `alert-triangle` to the supported icon union and SVG registry.

Rationale: `NotFound.astro` already uses this icon semantically. Adding it avoids unnecessary UI/content changes and keeps intent intact.

Alternative considered: Replace `alert-triangle` in `NotFound.astro` with an existing icon. This would alter visual semantics and is less aligned with current page intent.

3. Validate with both `npx astro check` and `npm run build`.

Rationale: `astro check` verifies type contracts while `build` verifies production output remains stable.

## Risks / Trade-offs

- [Risk] Exporting type from `.astro` could be interpreted differently across tooling versions.
  Mitigation: Validate with the repository's current Astro/TypeScript toolchain (`astro check`).
- [Risk] Adding one icon key to the registry could drift from visual consistency if path data is malformed.
  Mitigation: Use a standard alert-triangle path compatible with the existing stroke-based icon style.
