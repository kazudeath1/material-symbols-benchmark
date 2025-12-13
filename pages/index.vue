<template>
  <div class="container">
    <header>
      <h1>Material Symbols 検証</h1>
      <p class="subtitle">Webfontの転送サイズとoptical size挙動を検証</p>
    </header>

    <main>
      <!-- 転送サイズ検証 -->
      <section class="section-group">
        <h2 class="section-title">転送サイズ検証</h2>

        <div class="intro">
          <h3>検証目的</h3>
          <p>
            Material Symbolsの<strong>Webfont（可変フォント）</strong>と<strong>iconify-vue（SVG + CSS）</strong>の転送サイズを比較検証します。
            Optical sizeを活かすには可変フォントが必要ですが、「Webfontは重い」という懸念があります。
            サブセット化したWebfontが実用的なサイズに収まることを数値で示します。
          </p>
        </div>

        <div class="test-pages">
          <h3>検証ページ</h3>

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
              <h4>svgo <code>Auto Import</code></h4>
              <p>assets/icons からSVGを自動インポート</p>
              <p class="feature">✓ ビルド時に最適化</p>
              <div class="links">
                <NuxtLink to="/svgo-10" class="btn">10アイコン</NuxtLink>
                <NuxtLink to="/svgo-50" class="btn">50アイコン</NuxtLink>
                <NuxtLink to="/svgo-100" class="btn">100アイコン</NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="instructions">
          <h3>計測方法</h3>
          <ol>
            <li>本番ビルドを実行: <code>npm run build && npm run preview</code></li>
            <li>DevTools Networkタブを開く</li>
            <li>「Disable cache」にチェック</li>
            <li>各ページを開いて「transferred」列を確認</li>
            <li>転送サイズ、リクエスト数を記録</li>
          </ol>
        </div>

        <div class="metrics">
          <h3>計測項目</h3>
          <table>
            <thead>
              <tr>
                <th>項目</th>
                <th>確認方法</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>転送サイズ</td>
                <td>DevTools Network → transferred列</td>
              </tr>
              <tr>
                <td>リクエスト数</td>
                <td>DevTools Network → リクエスト総数</td>
              </tr>
              <tr>
                <td>フォントファイルサイズ</td>
                <td>Webfont版: woff2ファイル単体のサイズ</td>
              </tr>
              <tr>
                <td>JS bundle増分</td>
                <td>iconify-vue版: アイコン追加前後の差分</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 挙動検証 -->
      <section class="section-group">
        <h2 class="section-title">挙動検証</h2>

        <div class="intro">
          <h3>検証目的</h3>
          <p>
            可変フォントの<strong>optical size（opsz）</strong>と<strong>font-optical-sizing</strong>の挙動を検証します。
            font-sizeとopszの連動、個別調整による視覚的な変化を確認できます。
          </p>
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
  padding: 30px;
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
  flex-direction: column;
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
</style>
