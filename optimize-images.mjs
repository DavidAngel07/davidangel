import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync } from 'fs';
import { join, extname, basename } from 'path';

const ASSETS_DIR = './src/assets';
const OUTPUT_DIR = './src/assets/optimized';

// Create output directory if it doesn't exist
if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Get all image files
const imageFiles = readdirSync(ASSETS_DIR).filter(file => {
  const ext = extname(file).toLowerCase();
  return ['.png', '.jpg', '.jpeg'].includes(ext);
});

console.log(`Found ${imageFiles.length} images to optimize...\n`);

// Optimize each image
for (const file of imageFiles) {
  const inputPath = join(ASSETS_DIR, file);
  const fileName = basename(file, extname(file));
  const outputWebP = join(OUTPUT_DIR, `${fileName}.webp`);

  try {
    // Get original file size
    const stats = await sharp(inputPath).metadata();

    // Convert to WebP with quality 80
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputWebP);

    // Get new file size
    const originalSize = (await sharp(inputPath).toBuffer()).length;
    const webpSize = (await sharp(outputWebP).toBuffer()).length;
    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

    console.log(`✓ ${file}`);
    console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  WebP: ${(webpSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  Savings: ${savings}%\n`);
  } catch (error) {
    console.error(`✗ Error processing ${file}:`, error.message);
  }
}

console.log('Image optimization complete!');
