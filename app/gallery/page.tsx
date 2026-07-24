import type { Metadata } from "next";
import { GalleryClient } from "../_components/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | W Booms College School Life Photos",
  description:
    "Browse photos from W Booms College: practical science labs, leadership & prefects, sports, and everyday school life in Kwekwe, Zimbabwe.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | W Booms College School Life Photos",
    description:
      "Browse photos from W Booms College: practical science labs, leadership & prefects, sports, and everyday school life in Kwekwe, Zimbabwe.",
    url: "/gallery",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "W Booms College logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | W Booms College School Life Photos",
    description:
      "Browse photos from W Booms College: practical science labs, leadership & prefects, sports, and everyday school life in Kwekwe, Zimbabwe.",
    images: ["/opengraph-image.png"],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
