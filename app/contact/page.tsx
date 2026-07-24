import type { Metadata } from "next";
import { ContactClient } from "../_components/ContactClient";

export const metadata: Metadata = {
  title: "Contact W Booms College | Kwekwe, Zimbabwe",
  description:
    "Get in touch with W Booms College. Find our address in Mbizo 11, Kwekwe, phone, WhatsApp, email, school hours, and send us a message online.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact W Booms College | Kwekwe, Zimbabwe",
    description:
      "Get in touch with W Booms College. Find our address in Mbizo 11, Kwekwe, phone, WhatsApp, email, school hours, and send us a message online.",
    url: "/contact",
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
    title: "Contact W Booms College | Kwekwe, Zimbabwe",
    description:
      "Get in touch with W Booms College. Find our address in Mbizo 11, Kwekwe, phone, WhatsApp, email, school hours, and send us a message online.",
    images: ["/opengraph-image.png"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
