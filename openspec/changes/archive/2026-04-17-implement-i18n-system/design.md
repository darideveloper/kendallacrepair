# Design: i18n System Implementation

## Overview
The i18n system uses a centralized JSON-based translation approach with dynamic routing in Astro. English is the default language (`/`), and Spanish is localized under the `/es/` prefix.

## Architecture

### 1. Translation Flow
- **Messages**: Stored in `src/messages/`. Files: `en.json`, `es.json`.
- **UI Logic**: `src/lib/i18n/ui.ts` defines `languages` and `defaultLang`.
- **Utilities**: `src/lib/i18n/utils.ts` provides the `t()` function. It supports:
    - Nested keys using dot notation (e.g., `global.nav.home`).
    - Fallback to `defaultLang` if a key is missing in the requested language.
    - Variable interpolation (e.g., `t('welcome', { name: 'John' })`).

### 2. Routing Strategy
- **Localized Slugs**: `src/lib/i18n/routes.ts` maps page keys to slugs.
    - Home (EN): `/`
    - Home (ES): `/es`
    - Thank You (EN): `/thank-you`
    - Thank You (ES): `/es/gracias`
- **Dynamic Router**: `src/pages/[...path].astro` uses `getStaticPaths` to iterate over all routes and languages. This avoids file duplication.
- **Components**: Page-level components are moved to `src/components/pages/` to be used by the dynamic router.

### 3. SEO and Metadata
- **BaseSEO Component**: A new `src/components/atoms/BaseSEO.astro` will handle meta tags and hreflang alternates.
- **Hreflang Tags**: The `Layout.astro` component will use `BaseSEO` to generate `<link rel="alternate" hreflang="..." href="...">` tags for all supported languages.
- **Language Detection**: The `<html lang="...">` attribute in `Layout.astro` is set based on the current page's language.

### 4. Components Integration
- Components receive `lang` as a prop.
- They fetch translations using `const t = getTranslations(lang)`.
- Client-side React components receive their required translations as props to maintain simplicity and performance.

## Data Structures

### Translation JSON Example
```json
{
  "global": {
    "nav": {
      "services": "Services"
    }
  }
}
```

### Route Mapping Example
```typescript
export const routes = {
  home: { en: "", es: "es" },
  thank_you: { en: "thank-you", es: "es/gracias" }
};
```

## Trade-offs
- **Complexity vs. Maintainability**: Dynamic routing adds a layer of abstraction but significantly reduces maintenance overhead compared to duplicating `.astro` files for each language.
- **Client-side i18n**: Passing translations as props to React components avoids the need for a complex context-based i18n library on the client, keeping the bundle size small.
