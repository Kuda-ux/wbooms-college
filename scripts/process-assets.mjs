import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const sourceDir = 'C:\\Users\\Administrator\\Desktop\\W Booms College\\images';
const publicImagesDir = 'public\\images';

fs.mkdirSync(publicImagesDir, { recursive: true });

const files = fs.readdirSync(sourceDir)
  .filter(f => /\.(jpe?g|png)$/i.test(f))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: h * 360, s, l };
}

const meta = [];
let idx = 1;
for (const file of files) {
  const src = path.join(sourceDir, file);
  const name = `photo-${String(idx).padStart(3, '0')}.jpeg`;
  const dest = path.join(publicImagesDir, name);
  fs.copyFileSync(src, dest);

  const { data } = await sharp(src)
    .resize(64, 64, { fit: 'fill' })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = data.length / 3;
  let rSum = 0, gSum = 0, bSum = 0;
  for (let i = 0; i < data.length; i += 3) {
    rSum += data[i];
    gSum += data[i + 1];
    bSum += data[i + 2];
  }
  const r = Math.round(rSum / pixels);
  const g = Math.round(gSum / pixels);
  const b = Math.round(bSum / pixels);
  const hsl = rgbToHsl(r, g, b);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  meta.push({
    id: idx,
    file: name,
    original: file,
    src: `/images/${name}`,
    rgb: { r, g, b },
    hsl,
    brightness,
  });
  idx++;
}

// Copy logo
fs.copyFileSync(
  'C:\\Users\\Administrator\\Desktop\\W Booms College\\logo.jpeg',
  'public\\logo.jpeg'
);

fs.writeFileSync('public\\images\\meta.json', JSON.stringify(meta, null, 2));
console.log(`Processed ${meta.length} images.`);
