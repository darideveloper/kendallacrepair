# Proposal: Fix Favicon Configuration

## Why
The website's favicon was not loading correctly across various browsers because the `favicon.ico` file was a mislabeled PNG, and several other icon assets had non-standard dimensions. Additionally, the project lacked modern PWA integration (manifest and theme-color), which resulted in a suboptimal user experience on mobile devices and high-DPI displays.

## What Changes
This change replaces the corrupted `favicon.ico`, standardizes the dimensions of `favicon.png` (32x32) and `apple-touch-icon.png` (180x180), and adds a `site.webmanifest` with corresponding icons (192x192, 512x512). It also refactors the `<head>` in `Layout.astro` to correctly declare these assets along with a `theme-color` meta tag.

## Capabilities
- **Verified Icon Assets**: Ensure all favicon and touch icon files are valid, correctly formatted, and use standard dimensions.
- **Optimized Layout Header**: Update `Layout.astro` to use robust, cross-browser compatible icon declarations, including `theme-color`.
- **Standardized Asset Management**: Move necessary favicon assets to the `public/` directory with proper naming and formatting.
- **PWA Readiness**: Add a `site.webmanifest` file for better integration with Android devices and modern browsers.

## Relationship to Existing Specs
- **Modified `metadata`**: Adds requirements for favicon and app icon declarations in the document head.
- **Modified `assets`**: Adds requirements for the presence and format of core brand identity icons in the `public/` directory.

## Assumptions & Risks
- **Assumptions**: The valid ICO file in `src/assets/images/favicon.ico` contains appropriate resolutions (16x16, 32x32).
- **Risks**: Browser caching might delay the visibility of the new favicon for some users during testing.
