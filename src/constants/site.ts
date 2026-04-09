import type { IconName } from '../components/atoms/Icon.astro';
import type { ImageMetadata } from 'astro';
import emergencyImg from '../assets/images/services/foto-tecnico-emergencia.png';
import repairImg from '../assets/images/services/foto-tecnico-reparacion.jpg';
import installationImg from '../assets/images/services/foto-trane-dual.jpg';
import maintenanceImg from '../assets/images/services/foto-carrier-unit.jpg';

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

export interface FeaturedService {
  id: string;
  title: string;
  description: string;
  image: ImageMetadata;
  icon: string;
}

export const FEATURED_SERVICES: FeaturedService[] = [
  {
    id: 'emergency',
    title: 'Emergencia AC 24/7',
    description: '¿Tu AC dejó de funcionar a medianoche? Un técnico en tu puerta en menos de una hora.',
    image: emergencyImg,
    icon: '🚨'
  },
  {
    id: 'repair',
    title: 'Reparación de AC',
    description: 'Diagnóstico experto y reparación el mismo día. No enfría, hace ruidos, gotea.',
    image: repairImg,
    icon: '🔧'
  },
  {
    id: 'installation',
    title: 'Instalación de AC',
    description: 'Instalación profesional de sistemas nuevos, mini splits y termostatos.',
    image: installationImg,
    icon: '🏠'
  },
  {
    id: 'maintenance',
    title: 'Mantenimiento Preventivo',
    description: 'Planes mensuales, trimestrales y anuales para evitar fallas costosas.',
    image: maintenanceImg,
    icon: '🔍'
  }
];

export interface DetailedService {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  icon: IconName;
  items: string[];
}

export const DETAILED_SERVICES: DetailedService[] = [
  {
    id: 'diag',
    title: 'Servicios de Diagnóstico',
    subtitle: 'Evaluación completa de tu sistema',
    category: 'diag',
    icon: 'search',
    items: [
      'Inspección completa del sistema de A/C',
      'Análisis de flujo de aire y rendimiento',
      'Pruebas de componentes eléctricos',
      'Revisión de nivel y presión de refrigerante',
      'Detección de fugas'
    ]
  },
  {
    id: 'repair',
    title: 'Servicios de Reparación',
    subtitle: 'Soluciones rápidas y confiables',
    category: 'repair',
    icon: 'tool',
    items: [
      'Reparación de A/C que no enfría',
      'Reemplazo de capacitor, contactor y relay',
      'Reparación y reemplazo de compresor',
      'Reparación de motores de ventilador',
      'Reparación de fugas de refrigerante',
      'Limpieza y reparación de drenaje'
    ]
  },
  {
    id: 'refrig',
    title: 'Servicios de Refrigerante',
    subtitle: 'Rendimiento de enfriamiento óptimo',
    category: 'refrig',
    icon: 'snowflake',
    items: [
      'Recarga de refrigerante',
      'Detección y sellado de fugas',
      'Optimización de presión del sistema'
    ]
  },
  {
    id: 'maint',
    title: 'Mantenimiento Preventivo',
    subtitle: 'Planes mensuales, trimestrales y anuales',
    category: 'maint',
    icon: 'calendar',
    items: [
      'Limpieza de serpentines',
      'Cambio de filtros',
      'Inspección y ajuste eléctrico',
      'Calibración del termostato',
      'Limpieza de drenaje',
      'Planes mensuales, trimestrales y anuales'
    ]
  },
  {
    id: 'install',
    title: 'Servicios de Instalación',
    subtitle: 'Sistemas nuevos y reemplazos',
    category: 'install',
    icon: 'home',
    items: [
      'Instalación de sistemas nuevos',
      'Sistemas de aire central',
      'Sistemas mini split',
      'Instalación de termostatos inteligentes',
      'Actualización y reemplazo de equipos'
    ]
  },
  {
    id: 'air',
    title: 'Calidad de Aire Interior',
    subtitle: 'Purificación y filtración avanzada',
    category: 'air',
    icon: 'wind',
    items: [
      'Instalación de purificadores de aire',
      'Sistemas avanzados de filtración',
      'Sistemas de luz UV',
      'Instalación de deshumidificadores',
      'Soluciones para prevenir moho'
    ]
  },
  {
    id: 'duct',
    title: 'Servicios de Ductos',
    subtitle: 'Instalación, limpieza y sellado',
    category: 'duct',
    icon: 'activity',
    items: [
      'Instalación y reemplazo de ductos',
      'Limpieza de ductos',
      'Sellado de fugas de aire',
      'Balanceo de aire'
    ]
  },
  {
    id: 'elec',
    title: 'Servicios Eléctricos HVAC',
    subtitle: 'Operación segura y confiable',
    category: 'elec',
    icon: 'zap',
    items: [
      'Reemplazo de breakers y fusibles',
      'Reparación de cableado',
      'Diagnóstico eléctrico'
    ]
  },
  {
    id: 'comm',
    title: 'Servicios Comerciales',
    subtitle: 'Soluciones para negocios',
    category: 'comm',
    icon: 'truck',
    items: [
      'Servicio de unidades rooftop',
      'Programas de mantenimiento',
      'Diagnóstico y solución de problemas',
      'Instalación y reemplazo de equipos',
      'Servicio prioritario'
    ]
  }
];

export interface HowItWorksStep {
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    title: 'Llama o Escríbenos',
    description: 'Por teléfono, formulario, WhatsApp o chat. Cuéntanos el problema.'
  },
  {
    title: 'Diagnóstico Rápido',
    description: 'Un técnico llega a tu hogar y te da un estimado gratis.'
  },
  {
    title: 'Problema Resuelto',
    description: 'Aprueba y reparamos tu AC el mismo día con garantía.'
  }
];

