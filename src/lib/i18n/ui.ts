import en from '../../messages/en.json';
import es from '../../messages/es.json';

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'en';

export const ui = {
  en,
  es,
} as const;

export type Lang = keyof typeof languages;
