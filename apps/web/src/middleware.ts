import createMiddleware from 'next-intl/middleware';

import { locales } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en',
  localeDetection: false,
  localePrefix: 'as-needed',
  pathnames: {
    '/vacancies/[vacancySlug]': {
      en: '/vacancies/[vacancySlug]',
      es: '/vacantes/[vacancySlug]',
    },
  },
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
