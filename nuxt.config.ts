// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
  ],
  colorMode: {
    classSuffix: ''
  },
  runtimeConfig: {
    public: {
      githubUser: process.env.NUXT_GITHUB_USER,
      logoName: process.env.NUXT_LOGO_NAME,
    }
  },
})