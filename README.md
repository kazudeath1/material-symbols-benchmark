# Material Symbols 転送サイズ比較検証

Material SymbolsのWebfont（可変フォント）とSVGの転送サイズを比較検証するプロジェクトです。

[![GitHub](https://img.shields.io/badge/GitHub-kazudeath1%2Fmaterial--symbols--benchmark-blue?logo=github)](https://github.com/kazudeath1/material-symbols-benchmark)

## 検証目的

- Optical sizeを活かすには可変フォントが必要
- 「Webfontは重い」という懸念があるが、サブセット化で実用的なサイズに収まることを数値で示す
- 10個/50個/100個のアイコンでWebfontとSVGの転送サイズを比較

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番ビルドのプレビュー
npm run preview
```

## 検証ページ

### Webfont版
- `/webfont-10` - 10アイコン
- `/webfont-50` - 50アイコン
- `/webfont-100` - 100アイコン

Google Fontsの可変フォントを使用。Optical size対応。

### SVG版（Iconify + CSS）
- `/iconify-svg-css-10` - 10アイコン
- `/iconify-svg-css-50` - 50アイコン
- `/iconify-svg-css-100` - 100アイコン

@iconify/vueを使用してSVGをバンドルに含める（CSS経由）。

### SVG版（nuxt-svgo）
- `/svgo-10` - 10アイコン
- `/svgo-50` - 50アイコン
- `/svgo-100` - 100アイコン

nuxt-svgoモジュールを使用して最適化されたSVGコンポーネントとして配信。

## 計測手順

### 1. 本番ビルドの実行

```bash
npm run build
npm run preview
```

### 2. DevTools設定

1. ブラウザのDevToolsを開く（F12 / Cmd+Opt+I）
2. **Network**タブに移動
3. **Disable cache**にチェック
4. **No throttling**を選択
5. ページをリロード

### 3. 計測データの記録

各ページで以下を記録：

| 計測項目 | 確認方法 |
|---------|---------|
| 転送サイズ合計 | Network下部の「transferred」 |
| リクエスト数 | Network下部のリクエスト総数 |
| Webfontファイルサイズ | woff2ファイルのtransferred |
| JSバンドルサイズ | JSファイルのtransferred |

### 4. 結果の記録

以下のテンプレートを使用：

```markdown
## 計測結果

**環境:**
- ブラウザ: Chrome 131 / Safari 18 など
- 日時: 2025-XX-XX
- ビルド: `npm run build` 後の `npm run preview`

### Webfont版

| アイコン数 | 合計転送サイズ | リクエスト数 | woff2サイズ | その他 |
|-----------|--------------|-------------|------------|--------|
| 10        | ? KB         | ?           | ? KB       | -      |
| 50        | ? KB         | ?           | ? KB       | -      |
| 100       | ? KB         | ?           | ? KB       | -      |

### SVG版（Iconify）

| アイコン数 | 合計転送サイズ | リクエスト数 | JSバンドル | その他 |
|-----------|--------------|-------------|-----------|--------|
| 10        | ? KB         | ?           | ? KB      | -      |
| 50        | ? KB         | ?           | ? KB      | -      |
| 100       | ? KB         | ?           | ? KB      | -      |

### SVG版（nuxt-svgo）

| アイコン数 | 合計転送サイズ | リクエスト数 | JSバンドル | その他 |
|-----------|--------------|-------------|-----------|--------|
| 10        | ? KB         | ?           | ? KB      | -      |
| 50        | ? KB         | ?           | ? KB      | -      |
| 100       | ? KB         | ?           | ? KB      | -      |

### 比較

| アイコン数 | Webfont | Iconify SVG | nuxt-svgo | 備考 |
|-----------|---------|-------------|-----------|------|
| 10        | ? KB    | ? KB        | ? KB      | -    |
| 50        | ? KB    | ? KB        | ? KB      | -    |
| 100       | ? KB    | ? KB        | ? KB      | -    |
```

## 検証対象アイコン

全100個のアイコンリスト：

```
home, search, menu, close, settings, person, check, add, arrow_back, arrow_forward,
delete, edit, more_vert, more_horiz, notifications, visibility, visibility_off, favorite, star, info,
warning, error, help, refresh, download, upload, share, filter_list, sort, logout,
login, calendar_today, schedule, mail, chat, phone, location_on, link, attach_file, folder,
description, image, camera_alt, play_arrow, pause, stop, skip_next, skip_previous, volume_up, volume_off,
bookmark, label, flag, push_pin, lock, lock_open, key, credit_card, shopping_cart, payments,
receipt, inventory, category, dashboard, analytics, bar_chart, show_chart, pie_chart, table, grid_view,
view_list, expand_more, expand_less, chevron_right, chevron_left, content_copy, content_paste, content_cut, undo, redo,
save, print, send, reply, forward, group, groups, person_add, manage_accounts, admin_panel_settings,
build, code, terminal, bug_report, speed, dark_mode, light_mode, language, translate, public
```

## 技術スタック

- **Nuxt 3** (v3.15.1) - フレームワーク
- **Vue 3** (v3.5.13) - UIライブラリ
- **Google Fonts** - Webfont配信（Material Symbols Outlined）
- **@iconify/vue** (v5.0.0) - SVGアイコンライブラリ
- **@iconify-vue/material-symbols** (v1.0.2) - Material SymbolsのIconifyコレクション
- **nuxt-svgo** (v4.2.6) - SVG最適化モジュール
- **@material-symbols/svg-400** (v0.40.2) - Material SymbolsのSVGファイル

## 注意事項

- **計測は必ず本番ビルド後に実施**（dev serverでは正確な数値が出ない）
- **キャッシュを無効化**して計測すること
- Webfont版はOptical sizeに対応（font-variation-settings使用）
- SVG版（Iconify・nuxt-svgo）はOptical size非対応（固定サイズ）
- nuxt-svgoはビルド時にSVGをVueコンポーネントとして最適化

## プロジェクト構成

```
material-symbols-benchmark/
├── pages/
│   ├── index.vue                # トップページ（ナビゲーション）
│   ├── webfont-10.vue          # Webfont 10アイコン
│   ├── webfont-50.vue          # Webfont 50アイコン
│   ├── webfont-100.vue         # Webfont 100アイコン
│   ├── iconify-svg-css-10.vue  # Iconify SVG 10アイコン
│   ├── iconify-svg-css-50.vue  # Iconify SVG 50アイコン
│   ├── iconify-svg-css-100.vue # Iconify SVG 100アイコン
│   ├── svgo-10.vue             # nuxt-svgo 10アイコン
│   ├── svgo-50.vue             # nuxt-svgo 50アイコン
│   └── svgo-100.vue            # nuxt-svgo 100アイコン
├── assets/
│   └── icons/                  # SVGファイル格納
├── utils/
│   └── icons.ts                # アイコンリスト定義
├── nuxt.config.ts
├── package.json
└── README.md
```

## ライセンス

ISC
