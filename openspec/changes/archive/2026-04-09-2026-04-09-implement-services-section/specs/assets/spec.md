# assets Specification Delta

## ADDED Requirements

### Requirement: Service Image Assets
The application SHALL include optimized image assets for all featured services in its local assets directory.

#### Scenario: Optimized service images
- Given a `src/assets/images/services/` directory
- When adding images for featured services
- Then it SHALL contain the following images (reformatted to WebP where appropriate):
  - `emergencia-ac-24-7.png`
  - `reparacion-de-ac.jpg`
  - `instalacion-de-ac.jpg`
  - `mantenimiento-preventivo.jpg`
