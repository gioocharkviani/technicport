import createMiddleware from 'next-intl/middleware';
import { Pathnames } from 'next-intl/navigation';

export const locales = ['ge', 'uk', 'ru'];

export const pathnames = {
  '/': '/',
  '/pathnames': {
    ge: '/pathnames',
    uk: '/pathnames',
    ru: '/pathnames',
  }
};

export const config = {
  matcher: [
    '/',
    '/(ge|uk|ru)/:path*',
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ]
};

export const localePrefix = undefined;
export const localeDetection = undefined;
export const defaultLocale = 'ge';

export default createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix,
  localeDetection
});

export type AppPathnames = keyof typeof pathnames;
