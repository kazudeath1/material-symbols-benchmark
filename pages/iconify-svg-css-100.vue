<script setup lang="ts">
import { defineAsyncComponent, type Component } from 'vue';
import { ICONS_100, SIZES } from '~/utils/icons';

// 各アイコンを個別にインポート (100個)
const IconAdd = defineAsyncComponent(() => import('@iconify-vue/material-symbols/add'));
const IconAdminPanelSettings = defineAsyncComponent(() => import('@iconify-vue/material-symbols/admin-panel-settings'));
const IconAnalytics = defineAsyncComponent(() => import('@iconify-vue/material-symbols/analytics'));
const IconArrowBack = defineAsyncComponent(() => import('@iconify-vue/material-symbols/arrow-back'));
const IconArrowForward = defineAsyncComponent(() => import('@iconify-vue/material-symbols/arrow-forward'));
const IconAttachFile = defineAsyncComponent(() => import('@iconify-vue/material-symbols/attach-file'));
const IconBarChart = defineAsyncComponent(() => import('@iconify-vue/material-symbols/bar-chart'));
const IconBookmark = defineAsyncComponent(() => import('@iconify-vue/material-symbols/bookmark'));
const IconBugReport = defineAsyncComponent(() => import('@iconify-vue/material-symbols/bug-report'));
const IconBuild = defineAsyncComponent(() => import('@iconify-vue/material-symbols/build'));
const IconCalendarToday = defineAsyncComponent(() => import('@iconify-vue/material-symbols/calendar-today'));
const IconPhotoCamera = defineAsyncComponent(() => import('@iconify-vue/material-symbols/photo-camera'));
const IconCategory = defineAsyncComponent(() => import('@iconify-vue/material-symbols/category'));
const IconChat = defineAsyncComponent(() => import('@iconify-vue/material-symbols/chat'));
const IconCheck = defineAsyncComponent(() => import('@iconify-vue/material-symbols/check'));
const IconChevronLeft = defineAsyncComponent(() => import('@iconify-vue/material-symbols/chevron-left'));
const IconChevronRight = defineAsyncComponent(() => import('@iconify-vue/material-symbols/chevron-right'));
const IconClose = defineAsyncComponent(() => import('@iconify-vue/material-symbols/close'));
const IconCode = defineAsyncComponent(() => import('@iconify-vue/material-symbols/code'));
const IconContentCopy = defineAsyncComponent(() => import('@iconify-vue/material-symbols/content-copy'));
const IconContentCut = defineAsyncComponent(() => import('@iconify-vue/material-symbols/content-cut'));
const IconContentPaste = defineAsyncComponent(() => import('@iconify-vue/material-symbols/content-paste'));
const IconCreditCard = defineAsyncComponent(() => import('@iconify-vue/material-symbols/credit-card'));
const IconDarkMode = defineAsyncComponent(() => import('@iconify-vue/material-symbols/dark-mode'));
const IconDashboard = defineAsyncComponent(() => import('@iconify-vue/material-symbols/dashboard'));
const IconDelete = defineAsyncComponent(() => import('@iconify-vue/material-symbols/delete'));
const IconDescription = defineAsyncComponent(() => import('@iconify-vue/material-symbols/description'));
const IconDownload = defineAsyncComponent(() => import('@iconify-vue/material-symbols/download'));
const IconEdit = defineAsyncComponent(() => import('@iconify-vue/material-symbols/edit'));
const IconError = defineAsyncComponent(() => import('@iconify-vue/material-symbols/error'));
const IconExpandLess = defineAsyncComponent(() => import('@iconify-vue/material-symbols/expand-less'));
const IconExpandMore = defineAsyncComponent(() => import('@iconify-vue/material-symbols/expand-more'));
const IconFavorite = defineAsyncComponent(() => import('@iconify-vue/material-symbols/favorite'));
const IconFilterList = defineAsyncComponent(() => import('@iconify-vue/material-symbols/filter-list'));
const IconFlag = defineAsyncComponent(() => import('@iconify-vue/material-symbols/flag'));
const IconFolder = defineAsyncComponent(() => import('@iconify-vue/material-symbols/folder'));
const IconForward = defineAsyncComponent(() => import('@iconify-vue/material-symbols/forward'));
const IconGridView = defineAsyncComponent(() => import('@iconify-vue/material-symbols/grid-view'));
const IconGroup = defineAsyncComponent(() => import('@iconify-vue/material-symbols/group'));
const IconGroups = defineAsyncComponent(() => import('@iconify-vue/material-symbols/groups'));
const IconHelp = defineAsyncComponent(() => import('@iconify-vue/material-symbols/help'));
const IconHome = defineAsyncComponent(() => import('@iconify-vue/material-symbols/home'));
const IconImage = defineAsyncComponent(() => import('@iconify-vue/material-symbols/image'));
const IconInfo = defineAsyncComponent(() => import('@iconify-vue/material-symbols/info'));
const IconInventory = defineAsyncComponent(() => import('@iconify-vue/material-symbols/inventory'));
const IconKey = defineAsyncComponent(() => import('@iconify-vue/material-symbols/key'));
const IconLabel = defineAsyncComponent(() => import('@iconify-vue/material-symbols/label'));
const IconLanguage = defineAsyncComponent(() => import('@iconify-vue/material-symbols/language'));
const IconLightMode = defineAsyncComponent(() => import('@iconify-vue/material-symbols/light-mode'));
const IconLink = defineAsyncComponent(() => import('@iconify-vue/material-symbols/link'));
const IconLocationOn = defineAsyncComponent(() => import('@iconify-vue/material-symbols/location-on'));
const IconLock = defineAsyncComponent(() => import('@iconify-vue/material-symbols/lock'));
const IconLockOpen = defineAsyncComponent(() => import('@iconify-vue/material-symbols/lock-open'));
const IconLogin = defineAsyncComponent(() => import('@iconify-vue/material-symbols/login'));
const IconLogout = defineAsyncComponent(() => import('@iconify-vue/material-symbols/logout'));
const IconMail = defineAsyncComponent(() => import('@iconify-vue/material-symbols/mail'));
const IconManageAccounts = defineAsyncComponent(() => import('@iconify-vue/material-symbols/manage-accounts'));
const IconMenu = defineAsyncComponent(() => import('@iconify-vue/material-symbols/menu'));
const IconMoreHoriz = defineAsyncComponent(() => import('@iconify-vue/material-symbols/more-horiz'));
const IconMoreVert = defineAsyncComponent(() => import('@iconify-vue/material-symbols/more-vert'));
const IconNotifications = defineAsyncComponent(() => import('@iconify-vue/material-symbols/notifications'));
const IconPause = defineAsyncComponent(() => import('@iconify-vue/material-symbols/pause'));
const IconPayments = defineAsyncComponent(() => import('@iconify-vue/material-symbols/payments'));
const IconPerson = defineAsyncComponent(() => import('@iconify-vue/material-symbols/person'));
const IconPersonAdd = defineAsyncComponent(() => import('@iconify-vue/material-symbols/person-add'));
const IconCall = defineAsyncComponent(() => import('@iconify-vue/material-symbols/call'));
const IconPieChart = defineAsyncComponent(() => import('@iconify-vue/material-symbols/pie-chart'));
const IconPlayArrow = defineAsyncComponent(() => import('@iconify-vue/material-symbols/play-arrow'));
const IconPrint = defineAsyncComponent(() => import('@iconify-vue/material-symbols/print'));
const IconPublic = defineAsyncComponent(() => import('@iconify-vue/material-symbols/public'));
const IconPushPin = defineAsyncComponent(() => import('@iconify-vue/material-symbols/push-pin'));
const IconReceipt = defineAsyncComponent(() => import('@iconify-vue/material-symbols/receipt'));
const IconRedo = defineAsyncComponent(() => import('@iconify-vue/material-symbols/redo'));
const IconRefresh = defineAsyncComponent(() => import('@iconify-vue/material-symbols/refresh'));
const IconReply = defineAsyncComponent(() => import('@iconify-vue/material-symbols/reply'));
const IconSave = defineAsyncComponent(() => import('@iconify-vue/material-symbols/save'));
const IconSchedule = defineAsyncComponent(() => import('@iconify-vue/material-symbols/schedule'));
const IconSearch = defineAsyncComponent(() => import('@iconify-vue/material-symbols/search'));
const IconSend = defineAsyncComponent(() => import('@iconify-vue/material-symbols/send'));
const IconSettings = defineAsyncComponent(() => import('@iconify-vue/material-symbols/settings'));
const IconShare = defineAsyncComponent(() => import('@iconify-vue/material-symbols/share'));
const IconShoppingCart = defineAsyncComponent(() => import('@iconify-vue/material-symbols/shopping-cart'));
const IconShowChart = defineAsyncComponent(() => import('@iconify-vue/material-symbols/show-chart'));
const IconSkipNext = defineAsyncComponent(() => import('@iconify-vue/material-symbols/skip-next'));
const IconSkipPrevious = defineAsyncComponent(() => import('@iconify-vue/material-symbols/skip-previous'));
const IconSort = defineAsyncComponent(() => import('@iconify-vue/material-symbols/sort'));
const IconSpeed = defineAsyncComponent(() => import('@iconify-vue/material-symbols/speed'));
const IconStar = defineAsyncComponent(() => import('@iconify-vue/material-symbols/star'));
const IconStop = defineAsyncComponent(() => import('@iconify-vue/material-symbols/stop'));
const IconTable = defineAsyncComponent(() => import('@iconify-vue/material-symbols/table'));
const IconTerminal = defineAsyncComponent(() => import('@iconify-vue/material-symbols/terminal'));
const IconTranslate = defineAsyncComponent(() => import('@iconify-vue/material-symbols/translate'));
const IconUndo = defineAsyncComponent(() => import('@iconify-vue/material-symbols/undo'));
const IconUpload = defineAsyncComponent(() => import('@iconify-vue/material-symbols/upload'));
const IconViewList = defineAsyncComponent(() => import('@iconify-vue/material-symbols/view-list'));
const IconVisibility = defineAsyncComponent(() => import('@iconify-vue/material-symbols/visibility'));
const IconVisibilityOff = defineAsyncComponent(() => import('@iconify-vue/material-symbols/visibility-off'));
const IconVolumeOff = defineAsyncComponent(() => import('@iconify-vue/material-symbols/volume-off'));
const IconVolumeUp = defineAsyncComponent(() => import('@iconify-vue/material-symbols/volume-up'));
const IconWarning = defineAsyncComponent(() => import('@iconify-vue/material-symbols/warning'));

const iconCount = 100;
const icons = ICONS_100;

// アイコン名とコンポーネントのマッピング
const iconMap: Record<string, Component> = {
  add: IconAdd,
  admin_panel_settings: IconAdminPanelSettings,
  analytics: IconAnalytics,
  arrow_back: IconArrowBack,
  arrow_forward: IconArrowForward,
  attach_file: IconAttachFile,
  bar_chart: IconBarChart,
  bookmark: IconBookmark,
  bug_report: IconBugReport,
  build: IconBuild,
  calendar_today: IconCalendarToday,
  photo_camera: IconPhotoCamera,
  category: IconCategory,
  chat: IconChat,
  check: IconCheck,
  chevron_left: IconChevronLeft,
  chevron_right: IconChevronRight,
  close: IconClose,
  code: IconCode,
  content_copy: IconContentCopy,
  content_cut: IconContentCut,
  content_paste: IconContentPaste,
  credit_card: IconCreditCard,
  dark_mode: IconDarkMode,
  dashboard: IconDashboard,
  delete: IconDelete,
  description: IconDescription,
  download: IconDownload,
  edit: IconEdit,
  error: IconError,
  expand_less: IconExpandLess,
  expand_more: IconExpandMore,
  favorite: IconFavorite,
  filter_list: IconFilterList,
  flag: IconFlag,
  folder: IconFolder,
  forward: IconForward,
  grid_view: IconGridView,
  group: IconGroup,
  groups: IconGroups,
  help: IconHelp,
  home: IconHome,
  image: IconImage,
  info: IconInfo,
  inventory: IconInventory,
  key: IconKey,
  label: IconLabel,
  language: IconLanguage,
  light_mode: IconLightMode,
  link: IconLink,
  location_on: IconLocationOn,
  lock: IconLock,
  lock_open: IconLockOpen,
  login: IconLogin,
  logout: IconLogout,
  mail: IconMail,
  manage_accounts: IconManageAccounts,
  menu: IconMenu,
  more_horiz: IconMoreHoriz,
  more_vert: IconMoreVert,
  notifications: IconNotifications,
  pause: IconPause,
  payments: IconPayments,
  person: IconPerson,
  person_add: IconPersonAdd,
  call: IconCall,
  pie_chart: IconPieChart,
  play_arrow: IconPlayArrow,
  print: IconPrint,
  public: IconPublic,
  push_pin: IconPushPin,
  receipt: IconReceipt,
  redo: IconRedo,
  refresh: IconRefresh,
  reply: IconReply,
  save: IconSave,
  schedule: IconSchedule,
  search: IconSearch,
  send: IconSend,
  settings: IconSettings,
  share: IconShare,
  shopping_cart: IconShoppingCart,
  show_chart: IconShowChart,
  skip_next: IconSkipNext,
  skip_previous: IconSkipPrevious,
  sort: IconSort,
  speed: IconSpeed,
  star: IconStar,
  stop: IconStop,
  table: IconTable,
  terminal: IconTerminal,
  translate: IconTranslate,
  undo: IconUndo,
  upload: IconUpload,
  view_list: IconViewList,
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
        <a href="https://github.com/kazudeath1/material-symbols-benchmark/blob/main/pages/iconify-svg-css-100.vue" target="_blank" rel="noopener noreferrer">View Source</a>
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
