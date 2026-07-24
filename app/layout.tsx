import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

const heading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wboomscollege.co.zw"),
  title: {
    default: "W Booms College | Kwekwe, Zimbabwe",
    template: "%s | W Booms College",
  },
  description:
    "W Booms College — quality independent secondary education in Kwekwe, Zimbabwe. ZIMSEC Ordinary Level, Form 1 to Form 4. Forward Ever, Backwards Never.",
  keywords: [
    "W Booms College",
    "Kwekwe school",
    "Zimbabwe secondary school",
    "ZIMSEC O-Level",
    "independent school Kwekwe",
    "Form 1 to Form 4",
    "W Booms",
  ],
  authors: [{ name: "W Booms College" }],
  creator: "W Booms College",
  publisher: "W Booms College",
  applicationName: "W Booms College",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "/" },
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "/",
    siteName: "W Booms College",
    title: {
      default: "W Booms College | Kwekwe, Zimbabwe",
      template: "%s | W Booms College",
    },
    description:
      "W Booms College — quality independent secondary education in Kwekwe, Zimbabwe. ZIMSEC Ordinary Level, Form 1 to Form 4. Forward Ever, Backwards Never.",
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
    title: "W Booms College | Kwekwe, Zimbabwe",
    description:
      "W Booms College — quality independent secondary education in Kwekwe, Zimbabwe. ZIMSEC Ordinary Level, Form 1 to Form 4. Forward Ever, Backwards Never.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
