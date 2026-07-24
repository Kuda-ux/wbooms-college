import type { Metadata } from "next";
import { AboutClient } from "../_components/AboutClient";

export const metadata: Metadata = {
  title: "About W Booms College | History, Vision, Mission & Values",
  description:
    "Discover the history, vision, mission, core values and client charter of W Booms College — an independent ZIMSEC secondary school in Kwekwe, Zimbabwe.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutClient />;
}
