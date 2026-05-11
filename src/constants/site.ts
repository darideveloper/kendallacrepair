import type { IconName } from '../types/icon-name'
import type { ImageMetadata } from 'astro'
import emergencyImg from '../assets/images/services/foto-tecnico-emergencia.webp'
import repairImg from '../assets/images/services/foto-tecnico-reparacion.webp'
import installationImg from '../assets/images/services/foto-trane-dual.webp'
import maintenanceImg from '../assets/images/services/foto-carrier-unit.webp'
import mariaImg from '../assets/images/clients/client-maria.webp'
import carlosImg from '../assets/images/clients/client-carlos.webp'
import anaImg from '../assets/images/clients/client-ana.webp'

export const SITE = {
  name: 'Kendall AC Repairs',
  url: 'https://kendallacrepairs.com',
  phone: {
    display: '(305) 306-4511',
    value: '+13053064511',
  },
  whatsapp: {
    phone: '13053064511',
  },
  location: 'Kendall, FL',
  email: 'info@kendallacrepairs.com',
}

export const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57486.10!2d-80.39!3d25.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'

export interface FeaturedService {
  id: string
  image: ImageMetadata
  icon: string
}

export const FEATURED_SERVICES: FeaturedService[] = [
  {
    id: 'emergency',
    image: emergencyImg,
    icon: '🚨',
  },
  {
    id: 'repair',
    image: repairImg,
    icon: '🔧',
  },
  {
    id: 'installation',
    image: installationImg,
    icon: '🏠',
  },
  {
    id: 'maintenance',
    image: maintenanceImg,
    icon: '🔍',
  },
]

export interface DetailedService {
  id: string
  accentColor: string
}

export const DETAILED_SERVICES: DetailedService[] = [
  { id: 'repair', accentColor: '#1A6FAF' },
  { id: 'emergency', accentColor: '#E03131' },
  { id: 'installation', accentColor: '#27AE60' },
  { id: 'maintenance', accentColor: '#F59F00' },
  { id: 'ducts', accentColor: '#7F77DD' },
  { id: 'quality', accentColor: '#868E96' },
]

export interface Testimonial {
  quote: string
  author: string
  location: string
  initials: string
  image?: ImageMetadata
  date?: string
  isVerified?: boolean
}

export const CLIENT_IMAGES: Record<string, ImageMetadata> = {
  'Maria G.': mariaImg,
  'Carlos R.': carlosImg,
  'Ana S.': anaImg,
}

export const HOW_IT_WORKS_STEPS_COUNT = 3
export const TESTIMONIALS_COUNT = 3
export const FAQ_ITEMS_COUNT = 4
