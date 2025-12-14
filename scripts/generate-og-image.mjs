import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

async function generateOgImage() {
  try {
    console.log('OG画像を生成中...');

    const svgPath = join(projectRoot, 'public', 'og-image.svg');
    const pngPath = join(projectRoot, 'public', 'og-image.png');

    const svgBuffer = readFileSync(svgPath);

    await sharp(svgBuffer)
      .resize(1200, 630)
      .png()
      .toFile(pngPath);

    console.log('✅ OG画像を生成しました: public/og-image.png');
  } catch (error) {
    console.error('❌ OG画像の生成に失敗しました:', error);
    process.exit(1);
  }
}

generateOgImage();
