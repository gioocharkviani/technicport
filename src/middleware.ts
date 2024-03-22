import createMiddleware from 'next-intl/middleware';
import {pathnames, locales, localePrefix , localeDetection , defaultLocale} from './config';
export default createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix,
  localeDetection
}) ;



export const config = {
  matcher: [
    '/',
    '/(ge|uk|ru)/:path*',
    // (e.g. `/pathnames` -> `/en/pathnames`)
    // '/((?!_next|_vercel|.*\\..*).*)',
  ]
};