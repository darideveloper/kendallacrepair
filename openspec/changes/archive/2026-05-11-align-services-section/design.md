# Design: Services Section Alignment

## Architectural Decisions

### 1. Class Naming & Tailwind Integration
The target HTML uses specific "short" classes (`svc`, `si`, `sh`, etc.). To maintain project conventions (Tailwind 4), we will define these classes in `src/styles/global.css` using the `@theme` block or `@layer utilities`. This allows the HTML to remain clean and "identical" to the target while leveraging Tailwind's utility system.

### 2. Detailed Services Grid
The categories will be consolidated into 6 items with specific styling:
1.  **Reparación** (`#1A6FAF`): Items: Compresor · Capacitor · Contactor · Motores ventilador · Fugas refrigerante · Drenaje
2.  **Emergencia y diagnóstico** (`#E03131`): Items: Respuesta 24/7 · Fallas totales · Inspeccion completa · Componentes electricos · Deteccion fugas
3.  **Instalación** (`#27AE60`): Items: Sistemas centrales · Mini split · Termostatos Nest y Ecobee · Actualizacion de equipos
4.  **Mantenimiento preventivo** (`#F59F00`): Items: Serpentines · Filtros · Ajuste electrico · Termostato · Drenaje · Planes mensuales y anuales
5.  **Ductos y eléctrico** (`#7F77DD`): Items: Instalacion ductos · Limpieza · Sellado fugas · Balanceo aire · Breakers · Cableado HVAC
6.  **Calidad de aire y comercial** (`#868E96`): Items: Purificadores · Luz UV · Deshumidificadores · Moho · Rooftop units · Servicio prioritario

**Styling Requirements:**
- Grid: 2 columns, 14px gap.
- Cards: White background, 1px solid `#E9ECEF` border, 4px solid left border of the category color.
- Padding: `20px 20px 20px 24px`.
- Title: Font size 15px, weight 700, color `#212529`.
- Items: Font size 13px, color `#6C757D`, line height 1.7, separated by ` · `.

### 3. ServiceCard Molecule
- Wrapper class: `sc`.
- Image class: `si2`.
- Body class: `sb`.
- CTA class: `sc-cta`.
- CTA Text: `Llamar {SITE.phone.display} →`.
- CTA Link: `tel:{SITE.phone.value}`.

### 4. i18n Strategy
New translation keys will be added to `services` and `detailed_services` in `es.json` and `en.json`.
- `services.featured.<id>.cta`: "Llamar (305) 306-4511 →"
- `detailed_services_v2`: A new key to store the 6 consolidated categories to avoid breaking existing code if needed, or simply replacing `detailed_services`.

## Component Structure

```astro
<!-- Services.astro -->
<section class="svc">
  <div class="si">
    <div class="sh">
      <span class="st">...</span>
      <h2>...</h2>
      <p>...</p>
    </div>
    <div class="sg">
      {featuredServices.map(svc => <ServiceCard ... />)}
    </div>
    <div class="detailed-grid-container">
      <div class="detailed-header">...</div>
      <div class="detailed-grid">
         {v2Categories.map(cat => <DetailedServiceCard ... />)}
      </div>
    </div>
  </div>
</section>
```
