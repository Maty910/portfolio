/**
 * Script para optimizar imágenes PNG a WebP
 * 
 * Uso:
 * 1. cd scripts
 * 2. pnpm install
 * 3. node optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const QUALITY = 80; // Calidad WebP (1-100)

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;

    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`✅ ${path.basename(inputPath)}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)} KB`);
    console.log(`   WebP: ${(newSize / 1024).toFixed(1)} KB`);
    console.log(`   Reducción: ${reduction}%\n`);

    return { originalSize, newSize, reduction };
  } catch (error) {
    console.error(`❌ Error procesando ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizeAllImages() {
  console.log('🖼️  Optimizando imágenes PNG a WebP...\n');

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`❌ Directorio no encontrado: ${IMAGES_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(IMAGES_DIR);
  const pngFiles = files.filter(file => 
    file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg')
  );

  if (pngFiles.length === 0) {
    console.log('ℹ️  No se encontraron imágenes PNG o JPG para optimizar.');
    return;
  }

  console.log(`📋 Encontradas ${pngFiles.length} imágenes:\n`);

  let totalOriginal = 0;
  let totalNew = 0;
  let processed = 0;

  for (const file of pngFiles) {
    const inputPath = path.join(IMAGES_DIR, file);
    const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

    // Si ya existe el WebP, preguntar si sobrescribir
    if (fs.existsSync(outputPath)) {
      console.log(`⚠️  ${path.basename(outputPath)} ya existe, saltando...`);
      continue;
    }

    const result = await optimizeImage(inputPath, outputPath);
    
    if (result) {
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
      processed++;
    }
  }

  if (processed > 0) {
    const totalReduction = ((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1);
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 Resumen:');
    console.log(`   Imágenes procesadas: ${processed}`);
    console.log(`   Tamaño original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Tamaño nuevo: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Reducción total: ${totalReduction}%`);
    console.log('\n✨ Optimización completada!');
    console.log('\n📝 Siguiente paso:');
    console.log('   1. Actualiza las referencias en src/data/projectsData.ts');
    console.log('   2. Cambia .png por .webp en las rutas de imágenes');
    console.log('   3. Opcional: Elimina los archivos PNG originales si ya no los necesitas');
  } else {
    console.log('ℹ️  No se procesaron imágenes nuevas.');
  }
}

// Ejecutar
optimizeAllImages().catch(console.error);
