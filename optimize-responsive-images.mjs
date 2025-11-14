import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const OPTIMIZED_DIR = './src/assets/optimized';

// Create multiple sizes for about-foto
const sizes = [
  { width: 400, suffix: '-sm' },
  { width: 600, suffix: '-md' },
  { width: 800, suffix: '-lg' },
  { width: 1200, suffix: '-xl' }
];

const processImage = async (inputFile, outputBaseName) => {
  const inputPath = join(OPTIMIZED_DIR, inputFile);

  if (!existsSync(inputPath)) {
    console.error(`Error: ${inputPath} not found`);
    return;
  }

  console.log(`\nProcessing ${inputFile}...`);

  for (const size of sizes) {
    const outputPath = join(OPTIMIZED_DIR, `${outputBaseName}${size.suffix}.webp`);

    try {
      await sharp(inputPath)
        .resize(size.width, size.width, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 80 })
        .toFile(outputPath);

      const stats = await sharp(outputPath).metadata();
      const fileSize = (await sharp(outputPath).toBuffer()).length;

      console.log(`  ✓ ${size.width}x${size.width}: ${(fileSize / 1024).toFixed(2)} KB`);
    } catch (error) {
      console.error(`  ✗ Error creating ${size.width}px version:`, error.message);
    }
  }
};

// Process about-foto
await processImage('about-foto.webp', 'about-foto');

console.log('\nResponsive images generated successfully!');
