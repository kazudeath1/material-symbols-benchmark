<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ICONS_50, SIZES } from '~/utils/icons';

const iconCount = 50;
const icons = ICONS_50.map((icon) => icon.replace(/_/g, '-'));
</script>

<template>
  <div class="container">
    <header>
      <h1>Material Symbols @iconify/vue On Demand - {{ iconCount }}アイコン</h1>
      <nav>
        <NuxtLink to="/">← トップに戻る</NuxtLink>
      </nav>
    </header>

    <main>
      <div class="info">
        <p>
          アイコン数: <strong>{{ iconCount }}</strong>
        </p>
        <p>表示形式: <strong>@iconify/vue On Demand (&lt;Icon&gt; コンポーネント)</strong></p>
        <p>サイズ: 20px, 24px, 40px, 48px</p>
        <p class="note">※ SVGは固定サイズのため、optical size対応なし</p>
        <p class="note">※ 必要なアイコンのみオンデマンドで取得</p>
      </div>

      <div class="icon-grid">
        <div v-for="icon in icons" :key="icon" class="icon-item">
          <div class="icon-name">{{ icon }}</div>
          <div class="icon-sizes">
            <Icon v-for="size in SIZES" :key="size" :icon="`material-symbols:${icon}`" :width="size" :height="size" />
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

.icon-sizes :deep(svg) {
  color: #1a1a1a;
}
</style>
