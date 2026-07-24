// Auto-generated from scripts/categorize.mjs — edit as needed.
export type GalleryCategory = 'all' | 'science' | 'formal' | 'sports';

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const allImages: GalleryImage[] = [
  { src: "/images/photo-001.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-002.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-003.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-004.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-005.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-006.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-007.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-008.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-009.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-010.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-011.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-012.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-013.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-014.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-015.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-016.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-017.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-018.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-019.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-020.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-021.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-022.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-023.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-024.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-025.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-026.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-027.jpeg", alt: "W Booms College scene", category: "all" },
  { src: "/images/photo-028.jpeg", alt: "W Booms College scene", category: "all" },
];

export const heroImages = allImages.map(i => i.src);

export const administrationImages = [
  "/images/photo-028.jpeg",
  "/images/photo-026.jpeg",
  "/images/photo-018.jpeg",
];

export const scienceImages = [
  "/images/photo-001.jpeg",
  "/images/photo-002.jpeg",
  "/images/photo-004.jpeg",
  "/images/photo-005.jpeg",
];

export const formalImages = [
  "/images/photo-006.jpeg",
  "/images/photo-008.jpeg",
  "/images/photo-009.jpeg",
  "/images/photo-010.jpeg",
  "/images/photo-011.jpeg",
  "/images/photo-012.jpeg",
  "/images/photo-013.jpeg",
  "/images/photo-015.jpeg",
  "/images/photo-016.jpeg",
  "/images/photo-018.jpeg",
  "/images/photo-020.jpeg",
  "/images/photo-021.jpeg",
  "/images/photo-025.jpeg",
  "/images/photo-027.jpeg",
];

export const sportsImages = [
  "/images/photo-003.jpeg",
  "/images/photo-007.jpeg",
  "/images/photo-014.jpeg",
  "/images/photo-017.jpeg",
  "/images/photo-019.jpeg",
  "/images/photo-022.jpeg",
  "/images/photo-023.jpeg",
  "/images/photo-024.jpeg",
  "/images/photo-026.jpeg",
  "/images/photo-028.jpeg",
];

export const galleryTabs = [
  { key: 'all', label: 'All Photos' },
  { key: 'science', label: 'Practical Learning & Science Labs' },
  { key: 'formal', label: 'Formal Identity & Prefects' },
  { key: 'sports', label: 'Sports & Co-Curricular' },
] as const;
