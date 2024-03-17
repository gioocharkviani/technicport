import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['ge', 'en' , 'ru'],
 
  // Used when no locale matches
  defaultLocale: 'ge' 
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ru|en|ge)/:path*']
};