# Design: Fix JSON-LD Validation Warnings

## Architecture Update

### 1. Ordered List in OfferCatalog
To resolve the warning "The property position is not recognised by the schema for an object of type Offer", we must follow the `ItemList` pattern recommended by Schema.org and Google.

**Current (Problematic):**
```json
{
  "@type": "OfferCatalog",
  "itemListElement": [
    {
      "@type": "Offer",
      "position": 1,
      "itemOffered": { ... }
    }
  ]
}
```

**New (Correct):**
```json
{
  "@type": "OfferCatalog",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Offer",
        "itemOffered": { ... }
      }
    }
  ]
}
```

### 2. Modernizing Business Properties
- **areaServed**: Replacing `serviceArea` ensures compatibility with modern Schema.org consumers.
- **image**: Switching from `og-image.png` (typically 1200x630) to `logo-icon-512.png` (512x512) helps search engines display a clear logo in mobile and local results.

## Alternatives Considered
- **Removing position**: We could just remove the `position` property from the `Offer`, but keeping it via `ListItem` is better for SEO as it explicitly defines the order of services shown in the Catalog.
