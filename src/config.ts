import {Pathnames} from 'next-intl/navigation';

export const locales = ['ge', 'uk' , 'ru'];

export const pathnames = {
  '/': '/',
  '/pathnames': {
    ge: '/pathnames',
    uk: '/pathnames',
    ru: '/pathnames',
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`

export const localePrefix = undefined;
export const localeDetection = undefined;
export const defaultLocale = 'ge';

export type AppPathnames = keyof typeof pathnames;