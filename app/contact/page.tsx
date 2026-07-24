import type { Metadata } from "next";
import { ContactClient } from "../_components/ContactClient";

export const metadata: Metadata = {
  title: "Contact W Booms College | Kwekwe, Zimbabwe",
  description:
    "Get in touch with W Booms College. Find our address in Mbizo 11, Kwekwe, phone, WhatsApp, email, school hours, and send us a message online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
