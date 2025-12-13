import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ICONS_100のアイコン名リスト
const ICONS_100 = [
  'home',
  'search',
  'menu',
  'close',
  'settings',
  'person',
  'check',
  'add',
  'arrow_back',
  'arrow_forward',
  'delete',
  'edit',
  'more_vert',
  'more_horiz',
  'notifications',
  'visibility',
  'visibility_off',
  'favorite',
  'star',
  'info',
  'warning',
  'error',
  'help',
  'refresh',
  'download',
  'upload',
  'share',
  'filter_list',
  'sort',
  'logout',
  'login',
  'calendar_today',
  'schedule',
  'mail',
  'chat',
  'call',
  'location_on',
  'link',
  'attach_file',
  'folder',
  'description',
  'image',
  'photo_camera',
  'play_arrow',
  'pause',
  'stop',
  'skip_next',
  'skip_previous',
  'volume_up',
  'volume_off',
  'bookmark',
  'label',
  'flag',
  'push_pin',
  'lock',
  'lock_open',
  'key',
  'credit_card',
  'shopping_cart',
  'payments',
  'receipt',
  'inventory',
  'category',
  'dashboard',
  'analytics',
  'bar_chart',
  'show_chart',
  'pie_chart',
  'table',
  'grid_view',
  'view_list',
  'expand_more',
  'expand_less',
  'chevron_right',
  'chevron_left',
  'content_copy',
  'content_paste',
  'content_cut',
  'undo',
  'redo',
  'save',
  'print',
  'send',
  'reply',
  'forward',
  'group',
  'groups',
  'person_add',
  'manage_accounts',
  'admin_panel_settings',
  'build',
  'code',
  'terminal',
  'bug_report',
  'speed',
  'dark_mode',
  'light_mode',
  'language',
  'translate',
  'public',
];

const ICONS_DIR = path.resolve(__dirname, '../assets/icons');
const BASE_URL = 'https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined';

async function downloadIcon(iconName) {
  const url = `${BASE_URL}/${iconName}/fill1/24px.svg`;
  const filePath = path.join(ICONS_DIR, `${iconName}.svg`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const svgContent = await response.text();
    fs.writeFileSync(filePath, svgContent);
    console.log(`✓ Downloaded: ${iconName}.svg`);
  } catch (error) {
    console.error(`✗ Failed to download ${iconName}:`, error.message);
  }
}

async function main() {
  console.log('Starting icon download...\n');

  // assets/iconsディレクトリを空にする
  if (fs.existsSync(ICONS_DIR)) {
    const files = fs.readdirSync(ICONS_DIR);
    for (const file of files) {
      fs.unlinkSync(path.join(ICONS_DIR, file));
    }
    console.log(`Cleared ${files.length} files from ${ICONS_DIR}\n`);
  } else {
    fs.mkdirSync(ICONS_DIR, { recursive: true });
    console.log(`Created directory: ${ICONS_DIR}\n`);
  }

  // アイコンを並列ダウンロード（5個ずつ処理）
  const batchSize = 5;
  for (let i = 0; i < ICONS_100.length; i += batchSize) {
    const batch = ICONS_100.slice(i, i + batchSize);
    await Promise.all(batch.map((iconName) => downloadIcon(iconName)));
  }

  console.log(`\n✅ Download complete! Total: ${ICONS_100.length} icons`);
}

main();
