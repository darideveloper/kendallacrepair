# Design: Hero Section Alignment

## Content Strategy
The messaging is shifted to focus on "Today" and "5 Minutes".
- **Headline**: "Reparacion de AC en Kendall / Rapido. Confiable. Hoy Mismo."
- **Subheadline**: "Tecnicos licenciados en tu puerta HOY. Presupuesto gratis. Sin pagos por adelantado."
- **Form Footer**: "Te llamamos en menos de 5 minutos."

## Component Refactoring

### 1. Button Variant (`Button.astro`)
A new `whatsapp` variant will be added to the base `Button` atom:
- Background: `#25d366`
- Hover: `#20bd5a`
- Icon: WhatsApp filled logo.

### 2. Live Status Badge (`Badge.astro`)
The `status` variant of the `Badge` component will be updated to include a CSS pulse animation on the dot.
- Keyframes `pulse-green` will be added to `global.css`.

### 3. Hero Form (`HeroForm.astro`)
The form will be simplified to capture the bare minimum to maximize conversion.
- Fields: `name`, `phone`, `message`.
- Header: Centered layout with updated translations.

## i18n Considerations
All new strings will be added to `en.json` and `es.json` under the `hero` and `forms.hero` keys to maintain full localization support.
