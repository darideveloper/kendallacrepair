# Proposal: Fix JSON-LD Validation Warnings

## Why
The current structured data implementation in `BaseSEO.astro` triggers 4 warnings in Schema validators because the `position` property is used directly within `Offer` objects inside an `OfferCatalog`. Schema.org and Google require ordered lists to wrap items in `ListItem` containers. Additionally, some properties like `serviceArea` are deprecated, and the business image could be better optimized for search result snippets to improve local SEO.

## What Changes

### Structured Data (src/components/atoms/BaseSEO.astro)
- Update `OfferCatalog` to wrap `Offer` objects inside `ListItem` elements to correctly support the `position` property.
- Replace the deprecated `serviceArea` property with `areaServed` in the `HVACBusiness` schema.
- Update the `HVACBusiness` image to use a square logo icon (512x512) instead of the wide Open Graph image for better visibility in Local Business snippets.

### Specifications (openspec/specs/structured-data/spec.md)
- Update requirements to reflect the fix and modern standards.

## Proposed Solution
- Update `OfferCatalog` to wrap `Offer` objects inside `ListItem` elements to correctly support the `position` property.
- Replace the deprecated `serviceArea` property with `areaServed` in the `HVACBusiness` schema.
- Update the `HVACBusiness` image to use a square logo icon (512x512) instead of the wide Open Graph image for better visibility in Local Business snippets.

## Scope
- `src/components/atoms/BaseSEO.astro`: Update JSON-LD generation logic.
- `openspec/specs/structured-data/spec.md`: Update requirements to reflect the fix and modern standards.
