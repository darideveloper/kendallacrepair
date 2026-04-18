# Design: Fix Favicon Configuration

## Background
The current favicon setup fails to load because `public/favicon.ico` is a PNG file mislabeled as an ICO, and several icon files have non-standard dimensions. Additionally, the ordering and attributes of the `<link rel="icon">` tags in `Layout.astro` do not follow modern best practices for cross-browser compatibility.

## Solution Architecture

### Asset Corrections
The project currently has a valid ICO file at `src/assets/images/favicon.ico` which will be moved to `public/favicon.ico`. This file will serve as the primary fallback for older browsers.
The SVG icon at `public/favicon.svg` is valid and will be the preferred version for modern browsers due to its scalability and smaller file size.
The `apple-touch-icon.png` and `favicon.png` will be regenerated to standard sizes (180x180 and 32x32/48x48 respectively) to ensure proper display on mobile devices and browser tabs.

### Layout Header Refactoring
The `<head>` section of `Layout.astro` will be updated to:
1.  Prioritize the `.ico` file with a explicit `sizes` attribute to satisfy older browsers early.
2.  Provide the SVG icon for modern, high-DPI displays.
3.  Include a standard Apple Touch Icon for iOS home screen integration.

## Trade-offs and Considerations
- **Why `/public` instead of `src/assets`?**: Favicons are often requested by browsers at the root path (`/favicon.ico`) without being explicitly linked in the HTML. Using the `public/` directory ensures they are always available at the root and have predictable, unhashed filenames.
- **SVG vs ICO**: SVG is preferred for quality and performance, but ICO is mandatory for broad compatibility (especially in enterprise environments and older systems).
