# Design: Phone Number Format

To maintain consistency throughout the website, the following formats will be used for the company phone number: **+1 (305) 306-4511**.

## Format Specifications
- **Display Format**: `(305) 306-4511`
- **Internal Link Value (`tel:`)**: `+13053064511`
- **WhatsApp Phone ID**: `13053064511`
- **Placeholder Format**: `(305) 000-0000` (unchanged, but ensuring it matches the expected input pattern).

## Centralized Configuration (`src/constants/site.ts`)
The `SITE` object will hold these values to ensure a single source of truth:
```typescript
export const SITE = {
  // ...
  phone: {
    display: "(305) 306-4511",
    value: "+13053064511"
  },
  whatsapp: {
    phone: "13053064511",
    message: "Hola, necesito reparacion de AC en Kendall"
  },
  // ...
}
```

## Refactoring Components
Components currently using hardcoded defaults will be refactored to prioritize values from `SITE` if props are not provided.
- `MobileCallBar.astro`: Update default `phone` prop.
- `WhatsAppButton.astro`: Update default `phone` prop.
- `UrgencyBanner.astro`: Replace hardcoded `tel:` link with `SITE.phone.value`.
