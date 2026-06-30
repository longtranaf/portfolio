// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Hieu Nguyen — Portfolio',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Hieu Nguyen — Software engineer building thoughtful web experiences.'
        },
        // Open Graph
        { property: 'og:title', content: 'Hieu Nguyen — Portfolio' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content: 'Software engineer building thoughtful web experiences.'
        }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  }
})
