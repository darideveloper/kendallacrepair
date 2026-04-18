# Tasks: Fix Favicon Configuration

- [x] **Task 1: Correct the ICO file**
  - Replace `public/favicon.ico` (which is a PNG) with the valid ICO file from `src/assets/images/favicon.ico`.
  - Verify the file type of `public/favicon.ico` using `file` command.
  - *Validation*: `file public/favicon.ico` should return "MS Windows icon resource".

- [x] **Task 2: Standardize PNG icons**
  - Resize/regenerate `public/favicon.png` to exactly 32x32 pixels.
  - Resize/regenerate `public/apple-touch-icon.png` to exactly 180x180 pixels.
  - *Validation*: `identify public/favicon.png` and `identify public/apple-touch-icon.png` should show correct dimensions.

- [x] **Task 3: Create Web App Manifest**
  - Create `public/site.webmanifest` with the following:
    - Name and short name (Kendall AC Repairs).
    - Link to icons (192x192 and 512x512).
    - Theme and background colors (#1A6FAF and #ffffff).
  - Add 192x192 and 512x512 icons to `public/` (resize from high-res source).
  - *Validation*: `cat public/site.webmanifest` and verify JSON structure.

- [x] **Task 4: Update Layout declarations**
  - Modify `src/layouts/Layout.astro` to use standardized icon links.
  - Add `<link rel="manifest" href="/site.webmanifest">`.
  - Add `<meta name="theme-color" content="#1A6FAF">`.
  - *Validation*: Inspect the rendered `<head>` to confirm tag structure and presence of new tags.

- [x] **Task 5: Cleanup redundant assets**
  - Remove redundant `src/assets/images/favicon.ico` and `src/assets/images/favicon.png`.
  - *Validation*: `ls src/assets/images/favicon.*` should return no results.
