// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-gtag',
    'nuxt-mongoose',
    '@nuxt/content',
    '@nuxtjs/color-mode',
  ],
  gtag: {
    id: 'G-M00JRG1H9T',
    config: {
      page_title: 'App Page',
    },
  },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
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
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/fontawesome-free',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/pro-solid-svg-icons',
      '@fortawesome/pro-regular-svg-icons',
      '@fortawesome/pro-light-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },
})
