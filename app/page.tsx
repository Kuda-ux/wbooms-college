import type { Metadata } from "next";
import { HomeContent } from "./_components/HomeContent";

export const metadata: Metadata = {
  title: "W Booms College | Home",
  description:
    "W Booms College — quality independent secondary education in Kwekwe, Zimbabwe. ZIMSEC Ordinary Level, Form 1 to Form 4. Together We Light the Nation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "W Booms College | Home",
    description:
      "W Booms College — quality independent secondary education in Kwekwe, Zimbabwe. ZIMSEC Ordinary Level, Form 1 to Form 4. Together We Light the Nation.",
    url: "/",
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
    title: "W Booms College | Home",
    description:
      "W Booms College — quality independent secondary education in Kwekwe, Zimbabwe. ZIMSEC Ordinary Level, Form 1 to Form 4. Together We Light the Nation.",
    images: ["/opengraph-image.png"],
  },
};

export default function HomePage() {
  return <HomeContent />;
}
