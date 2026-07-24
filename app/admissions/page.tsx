import type { Metadata } from "next";
import { AdmissionsClient } from "../_components/AdmissionsClient";

export const metadata: Metadata = {
  title: "Admissions & Fees | W Booms College 2027 Enrolment",
  description:
    "View W Booms College entry requirements, 2027 fee structure, payment methods (Ecobank, EcoCash, InnBucks, Mukuru) and apply online for Form 1 to Form 4.",
  alternates: { canonical: "/admissions" },
};

export default function AdmissionsPage() {
  return <AdmissionsClient />;
}
