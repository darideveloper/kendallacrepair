## 1. Icon Contract Updates

- [x] 1.1 Export `IconName` from `src/components/atoms/Icon.astro` so typed consumers can import it.
- [x] 1.2 Add `alert-triangle` to the `IconName` union and icon SVG registry in `Icon.astro`.
- [x] 1.3 Verify existing icon consumers (`AccordionItem`, `CoverageBadge`, `site.ts`, `NotFound`) stay aligned with the icon contract.

## 2. Verification

- [x] 2.1 Run `npx astro check` and confirm icon-related type errors are resolved.
- [x] 2.2 Run `npm run build` and confirm production build still passes.
- [x] 2.3 Confirm no UI/content/layout/route/metadata changes were introduced.

## Notes

- This change was superseded by `fix-icon-type-contract-build-compat`, which implemented the build-compatible final solution.
