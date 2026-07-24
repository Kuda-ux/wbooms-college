import type { Metadata } from "next";
import { AdmissionsClient } from "../_components/AdmissionsClient";

export const metadata: Metadata = {
  title: "Admissions & Fees | W Booms College 2027 Enrolment",
  description:
    "View W Booms College entry requirements, 2027 fee structure, payment methods (Ecobank, EcoCash, InnBucks, Mukuru) and apply online for Form 1 to Form 4.",
  alternates: { canonical: "/admissions" },
  openGraph: {
    title: "Admissions & Fees | W Booms College 2027 Enrolment",
    description:
      "View W Booms College entry requirements, 2027 fee structure, payment methods (Ecobank, EcoCash, InnBucks, Mukuru) and apply online for Form 1 to Form 4.",
    url: "/admissions",
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
    title: "Admissions & Fees | W Booms College 2027 Enrolment",
    description:
      "View W Booms College entry requirements, 2027 fee structure, payment methods (Ecobank, EcoCash, InnBucks, Mukuru) and apply online for Form 1 to Form 4.",
    images: ["/opengraph-image.png"],
  },
};

export default function AdmissionsPage() {
  return <AdmissionsClient />;
}
