import type {InitOptions} from 'i18next';

export const FALLBACK_LOCALE = 'ka';
export const supportedLocales = ['ka', 'en', 'ru'] as const;
export type Locales = (typeof supportedLocales)[number];

// You can name the cookie to whatever you want
export const LANGUAGE_COOKIE = 'LOCALE';

export function getOptions(lang = FALLBACK_LOCALE, ns = 'common'): InitOptions {
  return {
    debug: false,
    supportedLngs: supportedLocales,
    fallbackLng: FALLBACK_LOCALE,
    lng: lang,
    ns,
  };
}
