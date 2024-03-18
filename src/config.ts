import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'ge' , 'ru'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    ge: '/pfadnamen',
    ru: '/pfadnamen',
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;