import type { IconName } from '../components/atoms/Icon.astro'
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
  category: string
  icon: IconName
}

export const DETAILED_SERVICES: DetailedService[] = [
  { id: 'diag', category: 'diag', icon: 'search' },
  { id: 'repair', category: 'repair', icon: 'tool' },
  { id: 'refrig', category: 'refrig', icon: 'snowflake' },
  { id: 'maint', category: 'maint', icon: 'calendar' },
  { id: 'install', category: 'install', icon: 'home' },
  { id: 'air', category: 'air', icon: 'wind' },
  { id: 'duct', category: 'duct', icon: 'activity' },
  { id: 'elec', category: 'elec', icon: 'zap' },
  { id: 'comm', category: 'comm', icon: 'truck' },
]

export interface Testimonial {
  quote: string
  author: string
  location: string
  initials: string
  image?: ImageMetadata
}

export const CLIENT_IMAGES: Record<string, ImageMetadata> = {
  'Maria G.': mariaImg,
  'Carlos R.': carlosImg,
  'Ana S.': anaImg,
}

export const HOW_IT_WORKS_STEPS_COUNT = 3
export const TESTIMONIALS_COUNT = 3
export const FAQ_ITEMS_COUNT = 4
