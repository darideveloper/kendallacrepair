import { ui, defaultLang, type Lang } from './ui';
import { routes } from './routes';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string, vars?: Record<string, string | number>) {
    const keys = key.split('.');
    let translation: any = ui[lang];

    for (const k of keys) {
      translation = translation?.[k];
    }

    if (translation === undefined && lang !== defaultLang) {
      translation = ui[defaultLang];
      for (const k of keys) {
        translation = translation?.[k];
      }
    }

    if (translation === undefined) return key;

    if (vars) {
      Object.entries(vars).forEach(([name, value]) => {
        translation = translation.replace(`{${name}}`, String(value));
      });
    }

    return translation;
  };
}

export function getLocalizedPath(pageKey: keyof typeof routes, lang: Lang) {
  const path = routes[pageKey][lang];
  return path === "" ? "/" : `/${path}`;
}
