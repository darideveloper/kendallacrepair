# Tasks: Fix JSON-LD Validation Warnings

## Implementation

- [x] **Task 1: Update BaseSEO.astro JSON-LD Logic**
  - Replace `serviceArea` with `areaServed` in the `HVACBusiness` object.
  - Update the `image` property in the `HVACBusiness` object to use the square logo icon.
  - Update `hasOfferCatalog.itemListElement` mapping to wrap `Offer` inside a `ListItem` with a `position` property.

- [x] **Task 2: Apply Spec Delta**
  - Incorporate the changes from the `fix-json-ld-warnings` spec delta into the main `openspec/specs/structured-data/spec.md`.

## Validation

- [x] **Validation 1: Component Rendering**
  - Verify that the page renders correctly with the new JSON-LD structure.
  - Inspect the generated `<script type="application/ld+json">` in the browser or via build output.

- [x] **Validation 2: Schema Validation (External)**
  - Use the Google Rich Results Test or Schema Markup Validator to confirm that the warnings are gone and the structure is valid.
