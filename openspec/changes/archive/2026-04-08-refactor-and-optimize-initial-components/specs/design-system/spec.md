## ADDED Requirements
### Requirement: Mandatory DRY and Atomic Design Patterns
The application MUST follow DRY (Don't Repeat Yourself) and Atomic Design patterns for all UI development.

#### Scenario: Shared component usage
- Given a requirement for a new UI element
- When a similar visual or functional pattern already exists in the project
- Then the developer MUST refactor the existing code into a reusable atom or molecule rather than duplicating it

#### Scenario: Loop rendering for repeated elements
- Given a list of repeated UI elements (e.g., navigation links, service cards, team members)
- When those elements are rendered
- Then the application MUST use an array and a `.map()` loop to render them from a single source of truth

#### Scenario: Centralized Constants
- Given site-wide configuration values (e.g., phone numbers, addresses, social media links)
- When those values are used in multiple components
- Then they MUST be stored in a centralized configuration file (e.g., `src/constants/site.ts`)

#### Scenario: Dynamic Class Management with `clsx`
- Given a component requiring conditional styling or variant-based classes
- When those classes are applied
- Then the application MUST use the `clsx` library instead of template literals or Astro's `class:list` to ensure readability and consistency
