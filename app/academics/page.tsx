import type { Metadata } from "next";
import { AcademicsClient } from "../_components/AcademicsClient";

export const metadata: Metadata = {
  title: "Academics | ZIMSEC O-Level Subjects at W Booms College",
  description:
    "Explore the W Booms College curriculum: Mathematics, Sciences, Languages, Humanities, and Commercials offered across Forms 1 to 4 under ZIMSEC Ordinary Level.",
  alternates: { canonical: "/academics" },
  openGraph: {
    title: "Academics | ZIMSEC O-Level Subjects at W Booms College",
    description:
      "Explore the W Booms College curriculum: Mathematics, Sciences, Languages, Humanities, and Commercials offered across Forms 1 to 4 under ZIMSEC Ordinary Level.",
    url: "/academics",
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
    title: "Academics | ZIMSEC O-Level Subjects at W Booms College",
    description:
      "Explore the W Booms College curriculum: Mathematics, Sciences, Languages, Humanities, and Commercials offered across Forms 1 to 4 under ZIMSEC Ordinary Level.",
    images: ["/opengraph-image.png"],
  },
};

export default function AcademicsPage() {
  return <AcademicsClient />;
}
