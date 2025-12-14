<script setup lang="ts">
import { ICONS_100, generateGoogleFontsUrl } from '~/utils/icons';

const icons = ICONS_100;
const fontsUrl = generateGoogleFontsUrl(icons);

// リアクティブな状態管理
const sliderValue = ref(24);
const opticalSizing = ref<'auto' | 'none'>('auto');
const isLinked = ref(true);

// 実際に適用される値を計算
const actualFontSize = computed(() => (isLinked.value ? sliderValue.value : 48));
const actualOpsz = computed(() => sliderValue.value);

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
      <h1>Material Symbols Webfont - サイズテスト</h1>
      <nav>
        <NuxtLink to="/">← トップに戻る</NuxtLink>
        <a href="https://github.com/kazudeath1/material-symbols-benchmark/blob/main/pages/webfont-test.vue" target="_blank" rel="noopener noreferrer">View Source</a>
      </nav>
    </header>

    <main>
      <div class="controls">
        <div class="control-group">
          <label>サイズとopszの連動:</label>
          <div class="toggle-buttons">
            <button :class="{ active: isLinked }" @click="isLinked = true">連動 (size = opsz)</button>
            <button :class="{ active: !isLinked }" @click="isLinked = false">size固定48px</button>
          </div>
        </div>

        <div class="control-group">
          <label for="size-slider">
            <span v-if="isLinked"
              >フォントサイズ & opsz: <strong>{{ sliderValue }}px</strong></span
            >
            <span v-else
              >opsz: <strong>{{ sliderValue }}</strong> (size: 48px固定)</span
            >
          </label>
          <input id="size-slider" v-model.number="sliderValue" type="range" min="12" max="96" step="1" class="slider" />
        </div>

        <div class="control-group">
          <label>font-optical-sizing:</label>
          <div class="toggle-buttons">
            <button :class="{ active: opticalSizing === 'auto' }" @click="opticalSizing = 'auto'">auto</button>
            <button :class="{ active: opticalSizing === 'none' }" @click="opticalSizing = 'none'">none</button>
          </div>
        </div>
      </div>

      <div class="info">
        <p>現在の設定:</p>
        <ul>
          <li>
            モード: <strong>{{ isLinked ? 'サイズとopsz連動' : 'size固定48px' }}</strong>
          </li>
          <li>
            フォントサイズ (font-size): <strong>{{ actualFontSize }}px</strong>
          </li>
          <li>
            font-variation-settings: <strong>'opsz' {{ actualOpsz }}</strong>
          </li>
          <li>
            font-optical-sizing: <strong>{{ opticalSizing }}</strong>
          </li>
        </ul>
      </div>

      <div class="icon-grid">
        <div v-for="icon in icons" :key="icon" class="icon-item">
          <div class="icon-name">{{ icon }}</div>
          <div class="icon-display">
            <div class="icon-variant">
              <span
                class="material-symbols-outlined"
                :style="{
                  fontSize: `${actualFontSize}px`,
                  fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' ${actualOpsz}`,
                  fontOpticalSizing: opticalSizing,
                }"
              >
                {{ icon }}
              </span>
              <div class="opsz-label">opsz: {{ actualOpsz }}</div>
            </div>
            <div class="icon-variant">
              <span
                class="material-symbols-outlined"
                :style="{
                  fontSize: `${actualFontSize}px`,
                  fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20`,
                  fontOpticalSizing: opticalSizing,
                }"
              >
                {{ icon }}
              </span>
              <div class="opsz-label">opsz: 20</div>
            </div>
            <div class="icon-variant">
              <span
                class="material-symbols-outlined"
                :style="{
                  fontSize: `${actualFontSize}px`,
                  fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48`,
                  fontOpticalSizing: opticalSizing,
                }"
              >
                {{ icon }}
              </span>
              <div class="opsz-label">opsz: 48</div>
            </div>
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
  padding-bottom: 280px;
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

.controls {
  background: #f9f9f9;
  padding: 24px;
  border-radius: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1 1 250px;
  min-width: 250px;
}

.control-group label {
  font-size: 16px;
  color: #333;
}

.slider {
  width: 100%;
  max-width: 400px;
  height: 6px;
  border-radius: 3px;
  background: #ddd;
  outline: none;
  -webkit-appearance: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #4285f4;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #4285f4;
  cursor: pointer;
  border: none;
}

.toggle-buttons {
  display: flex;
  gap: 8px;
}

.toggle-buttons button {
  padding: 8px 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  background: white;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.toggle-buttons button:hover {
  border-color: #4285f4;
}

.toggle-buttons button.active {
  background: #4285f4;
  border-color: #4285f4;
  color: white;
}

.info {
  background: #fff3cd;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 30px;
  border-left: 4px solid #ffc107;
}

.info p {
  margin: 0 0 8px 0;
  font-weight: 600;
  color: #856404;
}

.info ul {
  margin: 0;
  padding-left: 20px;
  color: #856404;
}

.info li {
  margin: 4px 0;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.icon-item {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.icon-name {
  font-size: 12px;
  color: #666;
  font-family: monospace;
  text-align: center;
  word-break: break-all;
}

.icon-display {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  min-height: 100px;
}

.icon-variant {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.opsz-label {
  font-size: 10px;
  color: #999;
  font-family: monospace;
  white-space: nowrap;
}

.material-symbols-outlined {
  font-weight: 400;
  font-style: normal;
  color: #1a1a1a;
  transition: font-size 0.1s ease;
}

/* モバイル向けpadding調整 */
@media (max-width: 768px) {
  .container {
    padding: 12px;
    padding-bottom: 320px;
  }

  h1 {
    font-size: 22px;
  }

  .controls {
    padding: 16px;
    gap: 16px;
  }

  .control-group {
    min-width: 100%;
  }

  .info {
    padding: 12px;
    margin-bottom: 16px;
  }

  .icon-item {
    padding: 12px;
  }

  .icon-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
