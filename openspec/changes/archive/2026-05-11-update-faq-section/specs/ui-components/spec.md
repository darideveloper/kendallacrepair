## MODIFIED Requirements

### Requirement: FAQ Item Molecule
The application SHALL provide an `FAQItem.astro` component to represent a single question and answer in an accordion format.

#### Scenario: Expandable FAQ details with schema.org markup
- **WHEN** the `FAQItem` component is rendered
- **THEN** the outer div SHALL include `itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"`
- **AND** the question text SHALL be wrapped in a `<span itemprop="name">` element
- **AND** the answer div SHALL include `itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"`
- **AND** the answer paragraph SHALL include `itemprop="text"`
- **WHEN** the user clicks on the question header
- **THEN** it SHALL toggle the visibility of its answer content using a `max-height` transition
- **AND** it SHALL rotate the chevron icon to indicate its open/closed state
- **AND** the `onclick` SHALL toggle the `open` class on the parent `faq-item` div

### Requirement: FAQ Organism
The application SHALL provide an `FAQ.astro` organism that acts as the container for the FAQ section.

#### Scenario: Integrated FAQ section with CTA
- **WHEN** the `FAQ.astro` component is rendered
- **THEN** it SHALL display the section tag "PREGUNTAS FRECUENTES"
- **AND** it SHALL render a list of 10 `FAQItem` molecules mapped from the i18n data
- **AND** the list wrapper div SHALL include `itemscope="" itemtype="https://schema.org/FAQPage"`
- **AND** a CTA section SHALL appear below the FAQ list containing:
  - Text "Mas preguntas?" followed by phone link and WhatsApp link
  - Phone link using `href="tel:{SITE.phone.value}"` with display `SITE.phone.display`
  - WhatsApp link using `href="https://wa.me/{SITE.whatsapp.phone}"` with `target="_blank"`
  - The CTA container SHALL use the `faq-cta` class with blue background styling


