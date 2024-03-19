const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

module.exports = {
    i18n: {
        locales: ['ru', 'en' , 'ge'],
        defaultLocale: 'ge',
        localeDetection: false
    }
}

const nextConfig = {};


module.exports = withNextIntl(nextConfig);