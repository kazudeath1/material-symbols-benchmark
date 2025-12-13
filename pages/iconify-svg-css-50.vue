<script setup lang="ts">
import { defineAsyncComponent, type Component } from 'vue';
import { ICONS_50, SIZES } from '~/utils/icons';

// 各アイコンを個別にインポート (50個)

const IconAdd = defineAsyncComponent(() => import('@iconify-vue/material-symbols/add'));
const IconArrowBack = defineAsyncComponent(() => import('@iconify-vue/material-symbols/arrow-back'));
const IconArrowForward = defineAsyncComponent(() => import('@iconify-vue/material-symbols/arrow-forward'));
const IconAttachFile = defineAsyncComponent(() => import('@iconify-vue/material-symbols/attach-file'));
const IconCalendarToday = defineAsyncComponent(() => import('@iconify-vue/material-symbols/calendar-today'));
const IconCamera = defineAsyncComponent(() => import('@iconify-vue/material-symbols/camera'));
const IconChat = defineAsyncComponent(() => import('@iconify-vue/material-symbols/chat'));
const IconCheck = defineAsyncComponent(() => import('@iconify-vue/material-symbols/check'));
const IconClose = defineAsyncComponent(() => import('@iconify-vue/material-symbols/close'));
const IconDelete = defineAsyncComponent(() => import('@iconify-vue/material-symbols/delete'));
const IconDescription = defineAsyncComponent(() => import('@iconify-vue/material-symbols/description'));
const IconDownload = defineAsyncComponent(() => import('@iconify-vue/material-symbols/download'));
const IconEdit = defineAsyncComponent(() => import('@iconify-vue/material-symbols/edit'));
const IconError = defineAsyncComponent(() => import('@iconify-vue/material-symbols/error'));
const IconFavorite = defineAsyncComponent(() => import('@iconify-vue/material-symbols/favorite'));
const IconFilterList = defineAsyncComponent(() => import('@iconify-vue/material-symbols/filter-list'));
const IconFolder = defineAsyncComponent(() => import('@iconify-vue/material-symbols/folder'));
const IconHelp = defineAsyncComponent(() => import('@iconify-vue/material-symbols/help'));
const IconHome = defineAsyncComponent(() => import('@iconify-vue/material-symbols/home'));
const IconImage = defineAsyncComponent(() => import('@iconify-vue/material-symbols/image'));
const IconInfo = defineAsyncComponent(() => import('@iconify-vue/material-symbols/info'));
const IconLink = defineAsyncComponent(() => import('@iconify-vue/material-symbols/link'));
const IconLocationOn = defineAsyncComponent(() => import('@iconify-vue/material-symbols/location-on'));
const IconLogin = defineAsyncComponent(() => import('@iconify-vue/material-symbols/login'));
const IconLogout = defineAsyncComponent(() => import('@iconify-vue/material-symbols/logout'));
const IconMail = defineAsyncComponent(() => import('@iconify-vue/material-symbols/mail'));
const IconMenu = defineAsyncComponent(() => import('@iconify-vue/material-symbols/menu'));
const IconMoreHoriz = defineAsyncComponent(() => import('@iconify-vue/material-symbols/more-horiz'));
const IconMoreVert = defineAsyncComponent(() => import('@iconify-vue/material-symbols/more-vert'));
const IconNotifications = defineAsyncComponent(() => import('@iconify-vue/material-symbols/notifications'));
const IconPause = defineAsyncComponent(() => import('@iconify-vue/material-symbols/pause'));
const IconPerson = defineAsyncComponent(() => import('@iconify-vue/material-symbols/person'));
const IconCall = defineAsyncComponent(() => import('@iconify-vue/material-symbols/call'));
const IconPlayArrow = defineAsyncComponent(() => import('@iconify-vue/material-symbols/play-arrow'));
const IconRefresh = defineAsyncComponent(() => import('@iconify-vue/material-symbols/refresh'));
const IconSchedule = defineAsyncComponent(() => import('@iconify-vue/material-symbols/schedule'));
const IconSearch = defineAsyncComponent(() => import('@iconify-vue/material-symbols/search'));
const IconSettings = defineAsyncComponent(() => import('@iconify-vue/material-symbols/settings'));
const IconShare = defineAsyncComponent(() => import('@iconify-vue/material-symbols/share'));
const IconSkipNext = defineAsyncComponent(() => import('@iconify-vue/material-symbols/skip-next'));
const IconSkipPrevious = defineAsyncComponent(() => import('@iconify-vue/material-symbols/skip-previous'));
const IconSort = defineAsyncComponent(() => import('@iconify-vue/material-symbols/sort'));
const IconStar = defineAsyncComponent(() => import('@iconify-vue/material-symbols/star'));
const IconStop = defineAsyncComponent(() => import('@iconify-vue/material-symbols/stop'));
const IconUpload = defineAsyncComponent(() => import('@iconify-vue/material-symbols/upload'));
const IconVisibility = defineAsyncComponent(() => import('@iconify-vue/material-symbols/visibility'));
const IconVisibilityOff = defineAsyncComponent(() => import('@iconify-vue/material-symbols/visibility-off'));
const IconVolumeOff = defineAsyncComponent(() => import('@iconify-vue/material-symbols/volume-off'));
const IconVolumeUp = defineAsyncComponent(() => import('@iconify-vue/material-symbols/volume-up'));
const IconWarning = defineAsyncComponent(() => import('@iconify-vue/material-symbols/warning'));

const iconCount = 50;
const icons = ICONS_50;

// アイコン名とコンポーネントのマッピング
const iconMap: Record<string, Component> = {
  add: IconAdd,
  arrow_back: IconArrowBack,
  arrow_forward: IconArrowForward,
  attach_file: IconAttachFile,
  calendar_today: IconCalendarToday,
  camera_alt: IconCamera,
  chat: IconChat,
  check: IconCheck,
  close: IconClose,
  delete: IconDelete,
  description: IconDescription,
  download: IconDownload,
  edit: IconEdit,
  error: IconError,
  favorite: IconFavorite,
  filter_list: IconFilterList,
  folder: IconFolder,
  help: IconHelp,
  home: IconHome,
  image: IconImage,
  info: IconInfo,
  link: IconLink,
  location_on: IconLocationOn,
  login: IconLogin,
  logout: IconLogout,
  mail: IconMail,
  menu: IconMenu,
  more_horiz: IconMoreHoriz,
  more_vert: IconMoreVert,
  notifications: IconNotifications,
  pause: IconPause,
  person: IconPerson,
  phone: IconCall,
  play_arrow: IconPlayArrow,
  refresh: IconRefresh,
  schedule: IconSchedule,
  search: IconSearch,
  settings: IconSettings,
  share: IconShare,
  skip_next: IconSkipNext,
  skip_previous: IconSkipPrevious,
  sort: IconSort,
  star: IconStar,
  stop: IconStop,
  upload: IconUpload,
  visibility: IconVisibility,
  visibility_off: IconVisibilityOff,
  volume_off: IconVolumeOff,
  volume_up: IconVolumeUp,
  warning: IconWarning,
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
      </nav>
    </header>

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
            <component v-for="size in SIZES" :key="size" :is="getIconComponent(icon)" :style="{ width: `${size}px`, height: `${size}px` }" />
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
</style>
