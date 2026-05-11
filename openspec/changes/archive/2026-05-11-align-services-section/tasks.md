# Tasks: Align Services Section

## Phase 1: Research & Setup
- [x] Verify existing constants and translations for Services <!-- id: 1 -->
- [x] Confirm all images referenced in `FEATURED_SERVICES` are available in `src/assets/images/services/` <!-- id: 2 -->

## Phase 2: Translation Updates
- [x] Update `src/messages/es.json` with the exact marketing copy for featured services from the provided HTML <!-- id: 3 -->
- [x] Add the 6 consolidated service categories and their bullet-separated (·) items to `es.json` <!-- id: 14 -->
- [x] Create/Update `src/messages/en.json` with corresponding English translations for all new keys <!-- id: 4 -->

## Phase 3: Constant & Type Updates
- [x] Update `DETAILED_SERVICES` in `src/constants/site.ts` to reflect the 6 consolidated categories with their specific accent colors <!-- id: 5 -->
- [x] Ensure `DetailedService` interface supports the new structure (title, items string) <!-- id: 6 -->

## Phase 4: Component Refactoring
- [x] Refactor `src/components/molecules/ServiceCard.astro` to match the `sc` structure (si2, sb, sc-cta) and dynamic phone link <!-- id: 7 -->
- [x] Update `src/components/organisms/Services.astro` structure and class names (`svc`, `si`, `sh`, `st`, `sg`) <!-- id: 8 -->
- [x] Implement the detailed services 2-column grid in `Services.astro`, replacing the Accordion <!-- id: 9 -->

## Phase 5: Styling
- [x] Add definitions for `svc`, `si`, `sh`, `st`, `sg`, `sc`, `si2`, `sb`, `sc-cta` in `src/styles/global.css` <!-- id: 10 -->
- [x] Ensure the detailed service cards have the correct colored left borders based on category <!-- id: 11 -->

## Phase 6: Validation
- [x] Run `npm run build` to ensure no regressions in type safety or component rendering <!-- id: 12 -->
- [x] Manually verify the Services section matches the target design in both Spanish and English <!-- id: 13 -->
