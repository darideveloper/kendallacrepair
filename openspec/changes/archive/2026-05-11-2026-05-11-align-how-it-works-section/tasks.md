# Tasks: Align HowItWorks Section

- [x] 1. **Update Translations (Spanish)**
    - Modified `src/messages/es.json`.
    - Updated `how_it_works` keys to match reference text.
    - Added `time` and `badge` properties to steps.
    - Added `trust_items` array.
    - Added `cta` text.

- [x] 2. **Update Translations (English)**
    - Modified `src/messages/en.json`.
    - Updated `how_it_works` keys with translated equivalent of the reference text.
    - Added `time` and `badge` properties to steps.
    - Added `trust_items` array.
    - Added `cta` text.

- [x] 3. **Update Global CSS**
    - Modified `src/styles/global.css`.
    - Defined `.hiw` root styles.
    - Defined `.stg` (Step Grid) grid layout.
    - Defined `.stc` (Step Card) surface and hover effects.
    - Defined `.stn` (Step Number) circle styles.
    - Defined `.time` badge styles.
    - Defined `.wbadge` warranty badge styles.
    - Defined `.tstrip` trust strip layout.
    - Defined `.bp` primary button styles.

- [x] 4. **Update StepCard Molecule**
    - Modified `src/components/molecules/StepCard.astro`.
    - Added `time` and `badge` props.
    - Refactored HTML to use `stc`, `stn`, `time`, and `wbadge` classes.
    - Structure matches: `div.stc > div.stn + h3 + div.time + p + div.wbadge`.

- [x] 5. **Refactor HowItWorks Organism**
    - Modified `src/components/organisms/HowItWorks.astro`.
    - Refactored root to use `section.hiw`.
    - Uses `div.hiw-bg`, `div.si`, and `div.sh`.
    - Uses `div.stg` for the loop.
    - Added `div.tstrip` section.
    - Added CTA button section with `.bp` class.

- [x] 6. **Validation**
    - Build passes.
    - i18n validation passes.
    - Responsive behavior: `stg` uses `grid-cols-1 tablet-lg:grid-cols-3`.
    - All pages build successfully.
