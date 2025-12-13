<script setup lang="ts">
import { ICONS_100, SIZES } from '~/utils/icons';

const iconCount = 100;
const icons = ICONS_100;
const fontsUrl = generateGoogleFontsUrl(icons);

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: fontsUrl,
    },
  ],
});
</script>

<template>
  <div class="container">
    <header>
      <h1>Material Symbols Webfont - {{ iconCount }}アイコン</h1>
      <nav>
        <NuxtLink to="/">← トップに戻る</NuxtLink>
        <a href="https://github.com/kazudeath1/material-symbols-benchmark/blob/main/pages/webfont-100.vue" target="_blank" rel="noopener noreferrer">View Source</a>
      </nav>
    </header>

    <main>
      <div class="info">
        <p>
          アイコン数: <strong>{{ iconCount }}</strong>
        </p>
        <p>表示形式: <strong>Webfont (可変フォント)</strong></p>
        <p>サイズ: 20px, 24px, 40px, 48px (optical size対応)</p>
      </div>

      <div class="icon-grid">
        <div v-for="icon in icons" :key="icon" class="icon-item">
          <div class="icon-name">{{ icon }}</div>
          <div class="icon-sizes">
            <span
              v-for="size in SIZES"
              :key="size"
              class="material-symbols-outlined"
              :style="{
                fontSize: `${size}px`,
                fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' ${size}`,
              }"
            >
              {{ icon }}
            </span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: system-ui, -apple-system, sans-serif;
}

header {
  margin-bottom: 40px;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #1a1a1a;
}

nav {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

nav a {
  padding: 8px 16px;
  background: #f0f0f0;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
  transition: background 0.2s;
}

nav a:hover {
  background: #e0e0e0;
}

nav a.router-link-active {
  background: #4285f4;
  color: white;
}

.info {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.info p {
  margin: 8px 0;
  font-size: 16px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.icon-item {
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: white;
}

.icon-name {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
  font-family: monospace;
}

.icon-sizes {
  display: flex;
  align-items: center;
  gap: 12px;
}

.material-symbols-outlined {
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: #1a1a1a;
}
</style>
