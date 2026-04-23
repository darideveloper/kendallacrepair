## ADDED Requirements

### Requirement: Global Reduced Motion Support
The global styles SHALL provide reduced-motion behavior for nonessential animation utilities.

#### Scenario: Reduced motion disables automatic movement
- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** automatic animation utilities SHALL avoid movement, blinking, pulsing, and delayed opacity reveals

#### Scenario: Reduced motion keeps content visible
- **WHEN** reduced-motion rules are applied
- **THEN** affected content SHALL remain visible and readable without waiting for animation completion
