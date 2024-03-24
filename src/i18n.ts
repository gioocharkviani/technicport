import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['ru', 'ge', 'uk'];

export default getRequestConfig(async ({ locale } ) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any )) notFound();

  // For non-API routes, return the usual configuration
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    now: new Date(),
    timeZone: 'Europe/Tbilisi',
  };
});
