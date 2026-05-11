# Design: Coverage Section Alignment

## Content Strategy
The messaging is shifted to focus on specific response times and liability details.
- **Title**: "Nuestra Zona de Servicio"
- **Subtitle**: "⏰ Tecnico en tu puerta en 1-3 horas en todo Kendall"
- **Badge Subtitles**: 
    - Licensed: "Florida State CAC#"
    - Insured: "$1M responsabilidad"
    - Emergency: "Respuesta en 60 min"
    - Estimates: "$0 visita diagnostica"

## Visual Refinement

### 1. Neighborhood Tags
The neighborhood items in `Coverage.astro` will be modified to include a leading emoji.
- Pattern: `📍 {area}`

### 2. Badge Icon Colors and Gradients
The `CoverageBadge.astro` component uses brand gradients. We will ensure the mapping matches the intent of the HTML design:
- **Blue** (`bl`): Licensed, Insured.
- **Orange** (`or`): Emergency 24/7.
- **Green** (`gr`): Estimados Gratis.

### 3. Text and Icon Sizing
We will ensure `Icon.astro` uses the correct stroke width (2.5) to match the bold look of the HTML version where applicable, or adjust via Tailwind classes.

## i18n Mapping
Strings will be updated in `src/messages/es.json` and `src/messages/en.json` to ensure localized versions of the new copy are available.
