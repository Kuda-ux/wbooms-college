import type { Metadata } from "next";
import { AboutClient } from "../_components/AboutClient";

export const metadata: Metadata = {
  title: "About W Booms College | History, Vision, Mission & Values",
  description:
    "Discover the history, vision, mission, core values and client charter of W Booms College — an independent ZIMSEC secondary school in Kwekwe, Zimbabwe.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About W Booms College | History, Vision, Mission & Values",
    description:
      "Discover the history, vision, mission, core values and client charter of W Booms College — an independent ZIMSEC secondary school in Kwekwe, Zimbabwe.",
    url: "/about",
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
    title: "About W Booms College | History, Vision, Mission & Values",
    description:
      "Discover the history, vision, mission, core values and client charter of W Booms College — an independent ZIMSEC secondary school in Kwekwe, Zimbabwe.",
    images: ["/opengraph-image.png"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
