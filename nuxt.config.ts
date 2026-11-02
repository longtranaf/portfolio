// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxtjs/i18n'],

  // English stays at `/`, Vietnamese lives at `/vi`. Copy is in data/portfolio.ts.
  i18n: {
    locales: [
      { code: 'en', language: 'en', name: 'English' },
      { code: 'vi', language: 'vi', name: 'Tiếng Việt' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    bundle: { optimizeTranslationDirective: false }
  },

  app: {
    // baseURL comes from NUXT_APP_BASE_URL: `/portfolio/` on GitHub Pages, `/` on Cloudflare.
    buildAssetsDir: 'assets',
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Open Graph
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Be+Vietnam+Pro:wght@600;700;800&display=swap'
        }
      ]
    }
  },

  nitro: {
    preset: 'github-pages'
  }
})
