# site-configuration Specification

## Purpose
The application centralizes all site-wide constants to ensure data consistency and ease of maintenance across components.

## ADDED Requirements

### Requirement: Centralized Service Area Data
The application SHALL store all geographic and service area data in a centralized configuration file.

#### Scenario: Coverage section constants
- Given the `src/constants/site.ts` file
- When adding coverage section data
- Then it SHALL define an array of `NEIGHBORHOODS` strings
- And it SHALL define a `MAP_EMBED_URL` string
- And it SHALL define a `COVERAGE_BADGES` array of objects with `icon`, `title`, `subtitle`, and `gradient` fields
