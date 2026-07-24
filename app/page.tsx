import type { Metadata } from "next";
import { HomeContent } from "./_components/HomeContent";

export const metadata: Metadata = {
  title: "W Booms College | Home",
  description:
    "W Booms College — Quality independent secondary education in Kwekwe, Zimbabwe. Together We Light the Nation. Forward Ever, Backwards Never.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeContent />;
}
