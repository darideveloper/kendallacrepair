import type { IconName } from '../components/atoms/Icon.astro';

export const SITE = {
  name: "Kendall AC Repairs",
  description: "Servicio de reparacion de aire acondicionado el mismo dia en Kendall. Tecnicos licenciados, estimados gratis y servicio de emergencia 24/7.",
  url: "https://kendallacrepair.com",
  phone: {
    display: "(305) 555-1234",
    value: "+13055551234"
  },
  whatsapp: {
    message: "Hola! Necesito una reparacion de AC en Kendall.",
    phone: "13055551234"
  },
  location: "Kendall, FL",
  email: "info@kendallacrepair.com"
};

export const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#testimonios', label: 'Resenas' },
  { href: '#faq', label: 'FAQ' },
];

export const NEIGHBORHOODS = [
  'Kendall', 'The Hammocks', 'Kendale Lakes', 'Tamiami', 'Country Walk', 'Three Lakes', 'Richmond West'
];

export const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57486.10!2d-80.39!3d25.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

export interface CoverageBadgeItem {
  icon: IconName;
  title: string;
  subtitle: string;
  gradient: 'blue' | 'orange' | 'green';
}

export const COVERAGE_BADGES: CoverageBadgeItem[] = [
  {
    icon: 'check-circle',
    title: 'Licenciado',
    subtitle: 'Estado de Florida',
    gradient: 'blue'
  },
  {
    icon: 'shield',
    title: 'Asegurado',
    subtitle: 'Cobertura completa',
    gradient: 'blue'
  },
  {
    icon: 'clock',
    title: 'Emergencia 24/7',
    subtitle: 'Siempre disponibles',
    gradient: 'orange'
  },
  {
    icon: 'dollar-sign',
    title: 'Estimados Gratis',
    subtitle: 'Sin compromiso',
    gradient: 'green'
  }
];
