import {Pathnames} from 'next-intl/navigation';

export const locales = ['ge', 'en' , 'ru'];

export const pathnames = {
  '/': '/',
  '/pathnames': {
    ge: '/pathnames',
    en: '/pathnames',
    ru: '/pathnames',
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`

export const localePrefix = undefined;
export const localeDetection = true;
export const defaultLocale = 'ge';

export type AppPathnames = keyof typeof pathnames;