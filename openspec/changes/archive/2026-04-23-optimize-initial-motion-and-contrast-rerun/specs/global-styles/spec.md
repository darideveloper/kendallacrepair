## ADDED Requirements

### Requirement: Global Reduced Motion Utility Safety
Global motion utilities SHALL honor reduced-motion preferences without hiding content.

#### Scenario: Reduced motion disables nonessential automatic movement
- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** global utility animations used for entrance, blink, or pulse SHALL disable automatic movement effects

#### Scenario: Reduced motion preserves content visibility
- **WHEN** reduced-motion rules apply to animated elements
- **THEN** affected content SHALL remain visible and readable without waiting for animation completion
