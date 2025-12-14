# Material Symbols アイコン表示方法比較・検証

Material Symbolsを使った各アイコン表示方法の比較・optical size挙動を検証するプロジェクトです。

[![GitHub](https://img.shields.io/badge/GitHub-kazudeath1%2Fmaterial--symbols--benchmark-blue?logo=github)](https://github.com/kazudeath1/material-symbols-benchmark)
[![Demo](https://img.shields.io/badge/Demo-GitHub%20Pages-green?logo=github)](https://kazudeath1.github.io/material-symbols-benchmark/)

## 概要

このプロジェクトでは、Material Symbolsの**optical size（opsz）**の挙動検証と、各アイコン表示方法の比較を行います。

### Optical size 挙動検証

Material Symbolsの**optical size（opsz）**の挙動を検証します。font-sizeとopszの連動、個別調整による視覚的な変化を確認できます。

### アイコン表示方法比較

Webfont版とSVG版（複数の実装方法）のアイコン表示を、10個/50個/100個のアイコン数で比較します。

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

### Optical size 挙動検証

#### Webfont サイズテスト
- `/webfont-test`

フォントサイズとoptical sizeを個別に調整できます。
- ✓ font-optical-sizing切り替え
- ✓ size固定でopsz調整可能

### アイコン表示方法比較

#### Webfont版
- `/webfont-10` - 10アイコン
- `/webfont-50` - 50アイコン
- `/webfont-100` - 100アイコン

Google Fontsの可変フォントを使用。
- ✓ Optical size対応

#### iconify-vue SVG + CSS
- `/iconify-svg-css-10` - 10アイコン
- `/iconify-svg-css-50` - 50アイコン
- `/iconify-svg-css-100` - 100アイコン

@iconify-vue/material-symbols でSVGをインライン化。
- ✓ JS bundleに含まれる

#### @iconify/vue On Demand
- `/iconify-ondemand-10` - 10アイコン
- `/iconify-ondemand-50` - 50アイコン
- `/iconify-ondemand-100` - 100アイコン

&lt;Icon&gt; コンポーネントでオンデマンド読み込み。
- ✓ 必要なアイコンのみ取得

#### nuxt-svgo Auto Import
- `/svgo-10` - 10アイコン
- `/svgo-50` - 50アイコン
- `/svgo-100` - 100アイコン

assets/icons からSVGをコンポーネントとして自動インポート。
- ✓ ビルド時にコンポーネントとして自動importされる。利用時はtemplateで直接使用可能。

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

- Webfont版はOptical sizeに対応（font-variation-settings使用）
- SVG版（Iconify・nuxt-svgo）はOptical size非対応（固定サイズ）
- nuxt-svgoはビルド時にSVGをVueコンポーネントとして最適化

## プロジェクト構成

```
material-symbols-benchmark/
├── pages/
│   ├── index.vue                 # トップページ（ナビゲーション）
│   ├── webfont-test.vue          # Webfont サイズテスト
│   ├── webfont-10.vue            # Webfont 10アイコン
│   ├── webfont-50.vue            # Webfont 50アイコン
│   ├── webfont-100.vue           # Webfont 100アイコン
│   ├── iconify-svg-css-10.vue    # Iconify SVG 10アイコン
│   ├── iconify-svg-css-50.vue    # Iconify SVG 50アイコン
│   ├── iconify-svg-css-100.vue   # Iconify SVG 100アイコン
│   ├── iconify-ondemand-10.vue   # Iconify On Demand 10アイコン
│   ├── iconify-ondemand-50.vue   # Iconify On Demand 50アイコン
│   ├── iconify-ondemand-100.vue  # Iconify On Demand 100アイコン
│   ├── svgo-10.vue               # nuxt-svgo 10アイコン
│   ├── svgo-50.vue               # nuxt-svgo 50アイコン
│   └── svgo-100.vue              # nuxt-svgo 100アイコン
├── assets/
│   └── icons/                    # SVGファイル格納
├── utils/
│   └── icons.ts                  # アイコンリスト定義
├── nuxt.config.ts
├── package.json
└── README.md
```

## ライセンス

ISC
