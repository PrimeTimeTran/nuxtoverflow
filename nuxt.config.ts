// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', 'nuxt-gtag', 'nuxt-mongoose'],
  gtag: {
    id: 'G-M00JRG1H9T',
    config: {
      page_title: 'App Page',
    },
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  mongoose: {
    uri: 'process.env.MONGODB_URI',
    options: {},
    modelsDir: 'models',
  },
  content: {
    api: {
      baseURL: '/api/_my_content',
    },
    highlight: {
      preload: ['dart', 'python', 'javascript'],
      theme: {
        default: 'github-dark',
        dark: 'github-dark',
        sepia: 'monokai',
        light: 'github-light',
      },
    },
  },
  nitro: {
    plugins: ['~/server/index.ts'],
  },
  runtimeConfig: {
    mongoDBUri: process.env.MONGODB_URI,
  },
})
