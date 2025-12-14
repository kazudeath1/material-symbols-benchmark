<script setup lang="ts">
import { defineAsyncComponent, type Component } from 'vue';
import { ICONS_10, SIZES } from '~/utils/icons';

// 各アイコンを個別にインポート

const IconAdd = defineAsyncComponent(() => import('@iconify-vue/material-symbols/add'));
const IconArrowBack = defineAsyncComponent(() => import('@iconify-vue/material-symbols/arrow-back'));
const IconArrowForward = defineAsyncComponent(() => import('@iconify-vue/material-symbols/arrow-forward'));
const IconCheck = defineAsyncComponent(() => import('@iconify-vue/material-symbols/check'));
const IconClose = defineAsyncComponent(() => import('@iconify-vue/material-symbols/close'));
const IconHome = defineAsyncComponent(() => import('@iconify-vue/material-symbols/home'));
const IconMenu = defineAsyncComponent(() => import('@iconify-vue/material-symbols/menu'));
const IconPerson = defineAsyncComponent(() => import('@iconify-vue/material-symbols/person'));
const IconSearch = defineAsyncComponent(() => import('@iconify-vue/material-symbols/search'));
const IconSettings = defineAsyncComponent(() => import('@iconify-vue/material-symbols/settings'));

const iconCount = 10;
const icons = ICONS_10;

// アイコン名とコンポーネントのマッピング
const iconMap: Record<string, Component> = {
  add: IconAdd,
  arrow_back: IconArrowBack,
  arrow_forward: IconArrowForward,
  check: IconCheck,
  close: IconClose,
  home: IconHome,
  menu: IconMenu,
  person: IconPerson,
  search: IconSearch,
  settings: IconSettings,
};

// アイコンコンポーネントを取得
function getIconComponent(iconName: string) {
  return iconMap[iconName];
}
</script>

<template>
  <div class="container">
    <header>
      <h1>Material Symbols iconify-vue SVG + CSS - {{ iconCount }}アイコン</h1>
      <nav>
        <NuxtLink to="/">← トップに戻る</NuxtLink>
        <a href="https://github.com/kazudeath1/material-symbols-benchmark/blob/main/pages/iconify-svg-css-10.vue" target="_blank" rel="noopener noreferrer">View Source</a>
      </nav>
    </header>

    <ClientOnly>
      <main>
        <div class="info">
          <p>
            アイコン数: <strong>{{ iconCount }}</strong>
          </p>
          <p>表示形式: <strong>iconify-vue SVG + CSS (@iconify-vue/material-symbols)</strong></p>
          <p>サイズ: 20px, 24px, 40px, 48px</p>
          <p class="note">※ SVGは固定サイズのため、optical size対応なし</p>
        </div>

        <div class="icon-grid">
          <div v-for="icon in icons" :key="icon" class="icon-item">
            <div class="icon-name">{{ icon }}</div>
            <div class="icon-sizes">
              <template v-if="getIconComponent(icon)">
                <component v-for="size in SIZES" :key="size" :is="getIconComponent(icon)" :style="{ width: `${size}px`, height: `${size}px` }" />
              </template>
              <template v-else>
                <span v-for="size in SIZES" :key="size" class="icon-placeholder" :style="{ width: `${size}px`, height: `${size}px` }"></span>
              </template>
            </div>
          </div>
        </div>
      </main>
    </ClientOnly>
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

.info .note {
  color: #666;
  font-size: 14px;
  font-style: italic;
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

.icon-placeholder {
  display: inline-block;
  background: #f0f0f0;
  border: 1px dashed #ccc;
  border-radius: 2px;
}

/* モバイル向けpadding調整 */
@media (max-width: 768px) {
  .container {
    padding: 12px;
  }

  h1 {
    font-size: 22px;
  }

  .info {
    padding: 12px;
  }

  .icon-item {
    padding: 12px;
  }

  .icon-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
  }
}
</style>
