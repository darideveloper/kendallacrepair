# Capability: HowItWorks Section Alignment

## ADDED Requirements

### Requirement: how-it-works-ui-alignment
The "How It Works" section MUST match the specific structural and content requirements of the reference HTML.

#### Scenario: Verify Structural Match
- **Given** the user is viewing the "How It Works" section
- **Then** the root element should be a `section` with class `hiw`
- **And** it should contain a background container `div.hiw-bg`
- **And** it should contain an inner container `div.si`
- **And** the inner container should contain a header `div.sh`, a grid `div.stg`, a trust strip `div.tstrip`, and a CTA button `div.bp`.

#### Scenario: Verify Card Content
- **Given** a step card in the "How It Works" section
- **Then** it should display a number in `div.stn`
- **And** it should display a title in `h3`
- **And** it should display a time indicator in `div.time` (if present in data)
- **And** it should display a description in `p`
- **And** it should display a warranty badge in `div.wbadge` (if present in data).

#### Scenario: Verify Responsive Grid
- **Given** a mobile viewport
- **Then** the `div.stg` container should display cards in a single column
- **Given** a desktop viewport (tablet-lg and above)
- **Then** the `div.stg` container should display cards in three columns.
