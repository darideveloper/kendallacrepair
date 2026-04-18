# Design: Add Missing Meta Tags

## Architecture
The meta tags will be integrated into the existing `BaseSEO.astro` component, which is already responsible for most SEO-related tags (Title, Description, OG, Twitter, JSON-LD).

### Data Flow
1.  **Constants:** `SITE.name` will be used for the `author` tag.
2.  **I18n:** `t('site.keywords')` will provide the localized keywords.
3.  **Component:** `BaseSEO.astro` will receive `lang` as a prop and use it to fetch the correct translations and set the `language` meta tag.

## Technical Details
The following tags will be added:
- `<meta name="keywords" content={t('site.keywords')} />`
- `<meta name="author" content={SITE.name} />`
- `<meta name="robots" content="index, follow" />`
- `<meta name="language" content={lang === 'en' ? 'English' : 'Spanish'} />`

## Implementation Details
No new components or complex logic are required. This is a straightforward enhancement to existing components and translation files.
