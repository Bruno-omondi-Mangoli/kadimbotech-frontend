import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import AIChatWidget from "@/components/ai/AIChatWidget";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kadimbotech Solutions — Empowering Ideas, Driving Innovation",
    template: "%s | Kadimbotech Solutions",
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${plusJakarta.variable}`}
    >
<body>
        <GoogleAnalytics />
        <Navbar />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
        <AIChatWidget />
      </body>
    </html>
  );
}