import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

/*
  next/font/google downloads fonts at build time and serves
  them from your own domain — no external requests to Google
  at runtime. This improves privacy and performance.
*/
const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",   // Links to our CSS variable
  display: "swap",
});

/*
  Metadata is used by Next.js to generate <head> tags.
  This is the default metadata — each page can override it.
*/
export const metadata: Metadata = {
  title: {
    default: "Kadimbotech Solutions — Empowering Ideas, Driving Innovation",
    template: "%s | Kadimbotech Solutions",  // Page title format
  },
  description:
    "Kadimbotech Solutions provides professional web development, graphic design, data analysis, and data annotation services across Kenya, Africa, and globally.",
  keywords: [
    "web development Kenya",
    "graphic design Nairobi",
    "data analysis Kenya",
    "data annotation Africa",
    "technology company Kenya",
    "Kadimbotech",
  ],
  authors: [{ name: "Kadimbotech Solutions" }],
  creator: "Kadimbotech Solutions",
  metadataBase: new URL("https://kadimbotechsolutions.online"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kadimbotechsolutions.online",
    siteName: "Kadimbotech Solutions",
    title: "Kadimbotech Solutions — Empowering Ideas, Driving Innovation",
    description:
      "Professional web development, graphic design, data analysis, and data annotation services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kadimbotech Solutions",
    description:
      "Professional technology services across Kenya, Africa, and globally.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /*
      We attach both font variables to the <html> element.
      This makes --font-sans and --font-heading available
      to every component in the entire app.
    */
    <html lang="en" className={cn(plusJakarta.variable, "font-sans", geist.variable)}>
      <body>
        {children}
      </body>
    </html>
  );
}