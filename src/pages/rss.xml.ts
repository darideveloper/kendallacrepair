import rss from '@astrojs/rss';
import { SITE } from '../constants/site';
import { useTranslations } from '../lib/i18n/utils';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const tEn = useTranslations('en');
  const featuredServices = tEn('services.featured') as Record<string, any>;

  return rss({
    title: SITE.name,
    description: tEn('pages.home.description'),
    site: context.site || SITE.url,
    items: Object.entries(featuredServices).map(([key, service]) => ({
      title: service.title,
      description: service.description,
      link: `/#servicios`,
      pubDate: new Date(),
    })),
    customData: `<language>en-us</language>`,
  });
};
