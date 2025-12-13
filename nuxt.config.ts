// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-12-12',
  devtools: { enabled: true },
  modules: ['nuxt-svgo'],
});
