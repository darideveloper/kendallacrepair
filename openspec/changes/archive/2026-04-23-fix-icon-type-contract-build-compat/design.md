## Context

The icon typing issue was partially fixed in a prior attempt, but the approach (`export type` from `Icon.astro`) is not compatible with the current Astro build pipeline. As a result, `npx astro check` can pass while `npm run build` fails with a parse error.

A build-safe contract is needed so both toolchains consume the same `IconName` source without relying on `.astro` module exports.

## Goals / Non-Goals

**Goals:**

- Define `IconName` in a shared TypeScript module that is build-safe.
- Keep `Icon.astro` and all typed consumers aligned with the shared contract.
- Ensure both `npx astro check` and `npm run build` pass.
- Preserve existing UI and content behavior.

**Non-Goals:**

- No icon redesign, animation changes, or layout updates.
- No dependency changes.
- No route/content/metadata changes.

## Decisions

1. Move icon-name type contract to a `.ts` file under `src/types/`.

Rationale: Type-only exports from `.ts` files are stable across both type-check and build stages.

Alternative considered: Keep type in `Icon.astro` with exported type declarations. Rejected due current build parse failure.

2. Import `IconName` into `Icon.astro` and typed consumers from the shared contract.

Rationale: Ensures one source-of-truth and prevents type drift.

Alternative considered: Duplicate local unions in each consumer. Rejected due DRY and consistency risks.

3. Keep `alert-triangle` in the union and icon registry to preserve NotFound semantics.

Rationale: Avoids visual/content changes while keeping typed usage valid.

## Risks / Trade-offs

- [Risk] Type union and icon registry can diverge over time.
  Mitigation: Keep both in the same change and validate via `astro check` and `build`.
- [Risk] Import path mistakes could shift errors to runtime build.
  Mitigation: Use direct explicit paths and verify with full production build.
