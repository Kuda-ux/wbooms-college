import fs from 'fs';

const meta = JSON.parse(fs.readFileSync('public/images/meta.json', 'utf8'));

function classify(m) {
  const { h, s, l } = m.hsl;
  const b = m.brightness;
  // Lab coats / white jackets: bright and nearly desaturated
  if (b > 145 && s < 0.12) return 'science';
  // Blue-toned images
  if (h >= 190 && h <= 260 && s > 0.08) {
    return b < 120 ? 'formal' : 'sports';
  }
  // Everything else falls to sports / co-curricular (outdoor, mixed scenes)
  return 'sports';
}

const science = [];
const formal = [];
const sports = [];

for (const m of meta) {
  const cat = classify(m);
  if (cat === 'science') science.push(m.src);
  else if (cat === 'formal') formal.push(m.src);
  else sports.push(m.src);
}

// Administration spotlight: choose the largest images that look like group/formal scenes
const withSize = meta.map(m => ({ ...m, size: fs.statSync(`public${m.src}`).size }));
const adminCandidates = withSize
  .filter(m => m.src !== '/images/photo-001.jpeg' && m.src !== '/images/photo-002.jpeg' && m.src !== '/images/photo-004.jpeg')
  .sort((a, b) => b.size - a.size)
  .slice(0, 3);
const admin = adminCandidates.map(m => m.src);

const content = `// Auto-generated from scripts/categorize.mjs — edit as needed.
export type GalleryCategory = 'all' | 'science' | 'formal' | 'sports';

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const allImages: GalleryImage[] = [
${meta.map(m => `  { src: "${m.src}", alt: "W Booms College scene", category: "all" },`).join('\n')}
];

export const heroImages = allImages.map(i => i.src);

export const administrationImages = [
${admin.map(src => `  "${src}",`).join('\n')}
];

export const scienceImages = [
${science.map(src => `  "${src}",`).join('\n')}
];

export const formalImages = [
${formal.map(src => `  "${src}",`).join('\n')}
];

export const sportsImages = [
${sports.map(src => `  "${src}",`).join('\n')}
];

export const galleryTabs = [
  { key: 'all', label: 'All Photos' },
  { key: 'science', label: 'Practical Learning & Science Labs' },
  { key: 'formal', label: 'Formal Identity & Prefects' },
  { key: 'sports', label: 'Sports & Co-Curricular' },
] as const;
`;

fs.writeFileSync('app/data/gallery.ts', content);
console.log('Gallery data written to app/data/gallery.ts');
console.log(`science=${science.length}, formal=${formal.length}, sports=${sports.length}, admin=${admin.length}`);
