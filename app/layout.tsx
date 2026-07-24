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
  title: "W Booms College | Kwekwe, Zimbabwe",
  description:
    "Forward Ever, Backwards Never. Quality independent secondary education in Kwekwe, Zimbabwe. Together We Light the Nation.",
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
