/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: [
      'global', 'int_en', 'be_nl',
      'be_fr', 'dk', 'de',
      'at', 'uk', 'int_es',
      'ie', 'nl', 'se',
      'fr', 'no', 'us'
    ],
    defaultLocale: 'global',
    localeDetection: false,
    domains: undefined
  }
}

module.exports = nextConfig
