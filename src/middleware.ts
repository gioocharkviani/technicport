import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';



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
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};

export const localePrefix = undefined;
export const localeDetection = undefined;
export const defaultLocale = 'ge';

const handleLocaleMiddlewere  =  createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix,
  localeDetection
});


export default async function middleware(request: NextRequest) {
  const response = handleLocaleMiddlewere(request);
  return response;
}