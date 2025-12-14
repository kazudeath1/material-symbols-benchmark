// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-12-12',
  devtools: { enabled: true },
  modules: ['nuxt-svgo'],
  app: {
    baseURL: '/material-symbols-benchmark/',
    head: {
      title: 'Material Symbols 挙動確認 (Vue/Nuxt)',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Material Symbolsの各種アイコン表示方法（Webfont、Iconify、SVG）の比較とoptical size挙動確認サイト',
        },
        { name: 'theme-color', content: '#ffffff' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Material Symbols 挙動確認 (Vue/Nuxt)' },
        { property: 'og:title', content: 'Material Symbols 挙動確認 (Vue/Nuxt)' },
        {
          property: 'og:description',
          content: 'Material Symbolsの各種アイコン表示方法（Webfont、Iconify、SVG）の比較とoptical size挙動確認サイト',
        },
        { property: 'og:image', content: 'https://kazudeath1.github.io/material-symbols-benchmark/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: 'https://kazudeath1.github.io/material-symbols-benchmark/' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Material Symbols 挙動確認 (Vue/Nuxt)' },
        {
          name: 'twitter:description',
          content: 'Material Symbolsの各種アイコン表示方法（Webfont、Iconify、SVG）の比較とoptical size挙動確認サイト',
        },
        { name: 'twitter:image', content: 'https://kazudeath1.github.io/material-symbols-benchmark/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/material-symbols-benchmark/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/material-symbols-benchmark/favicon.svg' },
      ],
    },
  },
});
