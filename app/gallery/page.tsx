import type { Metadata } from "next";
import { GalleryClient } from "../_components/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | W Booms College School Life Photos",
  description:
    "Browse photos from W Booms College: practical science labs, leadership & prefects, sports, and everyday school life in Kwekwe, Zimbabwe.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
