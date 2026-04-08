# assets Specification

## Purpose
TBD - created by archiving change apply-global-branding. Update Purpose after archive.
## Requirements
### Requirement: Centralized Logo Management
Logo assets SHALL be organized in a public directory for use in layouts and components.

#### Scenario: Referencing logos
- Given the logo SVGs are in `public/images/logos/`
- When a component references `/images/logos/logo-horizontal-color.svg`
- Then the logo should be served correctly

