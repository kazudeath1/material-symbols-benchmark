<template>
  <div class="container">
    <header>
      <h1>Material Symbols アイコン表示方法比較・検証</h1>
      <p class="subtitle">Material Symbolsを使った各アイコン表示方法の比較・optical size挙動を検証</p>
    </header>

    <main>
      <!-- 挙動検証 -->
      <section class="section-group">
        <h2 class="section-title">Optical size 挙動検証</h2>

        <div class="intro">
          <h3>検証目的</h3>
          <p>Material Symbolsの<strong>optical size（opsz）</strong>の挙動を検証します。 font-sizeとopszの連動、個別調整による視覚的な変化を確認できます。</p>
        </div>

        <div class="test-pages">
          <h3>検証ページ</h3>

          <div class="page-grid">
            <div class="page-card">
              <h4>Webfont サイズテスト</h4>
              <p>フォントサイズとoptical sizeを個別に調整</p>
              <p class="feature">✓ font-optical-sizing切り替え</p>
              <p class="feature">✓ size固定でopsz調整可能</p>
              <div class="links">
                <NuxtLink to="/webfont-test" class="btn">テストページを開く</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- アイコン表示方法比較 -->
      <section class="section-group">
        <h2 class="section-title">アイコン表示方法比較</h2>

        <div class="test-pages">
          <h3>各アイコン表示方法のページ</h3>

          <div class="page-grid">
            <div class="page-card">
              <h4>Webfont版</h4>
              <p>Google Fontsの可変フォント</p>
              <p class="feature">✓ Optical size対応</p>
              <div class="links">
                <NuxtLink to="/webfont-10" class="btn">10アイコン</NuxtLink>
                <NuxtLink to="/webfont-50" class="btn">50アイコン</NuxtLink>
                <NuxtLink to="/webfont-100" class="btn">100アイコン</NuxtLink>
              </div>
            </div>

            <div class="page-card">
              <h4>iconify-vue <code>SVG + CSS</code></h4>
              <p>@iconify-vue/material-symbols でSVGをインライン化</p>
              <p class="feature">✓ JS bundleに含まれる</p>
              <div class="links">
                <NuxtLink to="/iconify-svg-css-10" class="btn">10アイコン</NuxtLink>
                <NuxtLink to="/iconify-svg-css-50" class="btn">50アイコン</NuxtLink>
                <NuxtLink to="/iconify-svg-css-100" class="btn">100アイコン</NuxtLink>
              </div>
            </div>

            <div class="page-card">
              <h4>@iconify/vue <code>On Demand</code></h4>
              <p>&lt;Icon&gt; コンポーネントでオンデマンド読み込み</p>
              <p class="feature">✓ 必要なアイコンのみ取得</p>
              <div class="links">
                <NuxtLink to="/iconify-ondemand-10" class="btn">10アイコン</NuxtLink>
                <NuxtLink to="/iconify-ondemand-50" class="btn">50アイコン</NuxtLink>
                <NuxtLink to="/iconify-ondemand-100" class="btn">100アイコン</NuxtLink>
              </div>
            </div>

            <div class="page-card">
              <h4>nuxt-svgo <code>Auto Import</code></h4>
              <p>assets/icons からSVGをコンポーネントとして自動インポート</p>
              <p class="feature">✓ ビルド時にコンポーネントとして自動importされる。利用時はtemplateで直接使用可能。</p>
              <div class="links">
                <NuxtLink to="/svgo-10" class="btn">10アイコン</NuxtLink>
                <NuxtLink to="/svgo-50" class="btn">50アイコン</NuxtLink>
                <NuxtLink to="/svgo-100" class="btn">100アイコン</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
}

header {
  text-align: center;
  margin-bottom: 60px;
}

h1 {
  font-size: 36px;
  margin-bottom: 12px;
  color: #1a1a1a;
}

.subtitle {
  font-size: 18px;
  color: #666;
}

.section-group {
  margin-bottom: 80px;
  padding: 40px;
  background: #fafafa;
  border-radius: 12px;
}

.section-title {
  font-size: 32px;
  margin-bottom: 30px;
  color: #1a1a1a;
  border-bottom: 3px solid #4285f4;
  padding-bottom: 12px;
}

h3 {
  font-size: 22px;
  margin-bottom: 16px;
  margin-top: 32px;
  color: #333;
}

.intro h3,
.test-pages h3 {
  margin-top: 0;
}

h4 {
  font-size: 20px;
  margin-bottom: 12px;
  color: #333;
}

.page-card h4:first-child {
  margin-top: 0;
}

.intro {
  margin-bottom: 32px;
}

.intro p {
  font-size: 16px;
  color: #444;
}

.test-pages {
  margin-bottom: 32px;
}

.instructions {
  margin-bottom: 32px;
}

.metrics {
  margin-bottom: 0;
}

.page-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.page-card {
  padding: 20px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  background: white;
}

.page-card p {
  margin: 8px 0;
  color: #666;
}

.feature {
  font-weight: 600;
  color: #4285f4 !important;
  margin-top: 16px;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.btn {
  display: block;
  padding: 12px 24px;
  background: #4285f4;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  text-align: center;
  font-weight: 500;
  transition: background 0.2s;
}

.btn:hover {
  background: #1967d2;
}

.instructions ol {
  padding-left: 24px;
  font-size: 16px;
}

.instructions li {
  margin-bottom: 12px;
}

code {
  background: #f5f5f5;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 14px;
  color: #d63384;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 12px;
  text-align: left;
  border: 1px solid #e0e0e0;
}

th {
  background: #f5f5f5;
  font-weight: 600;
}

tbody tr:hover {
  background: #fafafa;
}

/* モバイル向けpadding調整 */
@media (max-width: 768px) {
  .container {
    padding: 20px 12px;
  }

  .section-group {
    padding: 20px 16px;
  }

  h1 {
    font-size: 28px;
  }

  .section-title {
    font-size: 24px;
  }

  .page-card {
    padding: 16px;
  }
}
</style>
