## 1. Shared Icon Contract

- [x] 1.1 Create a shared `IconName` type module in `src/types/`.
- [x] 1.2 Update `Icon.astro` to import `IconName` from the shared module and remove build-incompatible type exports.
- [x] 1.3 Ensure `alert-triangle` is present in both the shared `IconName` union and `Icon.astro` SVG registry.

## 2. Consumer Alignment

- [x] 2.1 Update typed icon consumers (`AccordionItem`, `CoverageBadge`, `site.ts`) to import `IconName` from the shared type module.
- [x] 2.2 Verify `NotFound` icon usage remains valid against the shared icon contract without changing page content.

## 3. Verification

- [x] 3.1 Run `npx astro check` and confirm zero errors.
- [x] 3.2 Run `npm run build` and confirm production build passes.
- [x] 3.3 Confirm no UI/content/layout/route/metadata changes were introduced.
