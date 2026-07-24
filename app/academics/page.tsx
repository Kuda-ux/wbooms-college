import type { Metadata } from "next";
import { AcademicsClient } from "../_components/AcademicsClient";

export const metadata: Metadata = {
  title: "Academics | ZIMSEC O-Level Subjects at W Booms College",
  description:
    "Explore the W Booms College curriculum: Mathematics, Sciences, Languages, Humanities, and Commercials offered across Forms 1 to 4 under ZIMSEC Ordinary Level.",
  alternates: { canonical: "/academics" },
};

export default function AcademicsPage() {
  return <AcademicsClient />;
}
