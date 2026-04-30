# Tasks: Maintenance Screen Page

## 1. Create Blank Layout
- [x] Create `src/layouts/BlankLayout.astro`.
- [x] Implement a bare-bones HTML skeleton (`<!doctype html>`, `<head>`, `<body>`) that includes global CSS (`import '../styles/global.css'`) and font links, but **omits** all global UI components (Header, Footer, UrgencyBanner, WhatsAppButton, etc.).
- [x] Ensure `<slot />` is present in the `<body>`.

## 2. Create Maintenance Page
- [x] Create `src/pages/maintenance.astro`.
- [x] Import `BlankLayout` from `src/layouts/BlankLayout.astro`.
- [x] Import `clsx`, `Image` from `astro:assets`, and `Badge`.
- [x] Import a suitable background image (e.g., `src/assets/images/hero/foto-trane-single.webp`).
- [x] Build the layout mirroring `Hero.astro` but simplified to a full-screen flex center experience.
- [x] Add an English `h1` ("On Maintenance").
- [x] Add the Spanish translation ("Sitio en mantenimiento") directly below the `h1` in a smaller font size (`text-sm` or similar).

