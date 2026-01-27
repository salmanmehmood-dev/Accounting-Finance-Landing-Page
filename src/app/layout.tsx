import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/data/site-content";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });

export const metadata: Metadata = {
  metadataBase: new URL("https://elevarehub.com"),
  title: "Elevare Solutions Hub | Expert Accounting & Financial Advisory",
  description: siteConfig.general.mission,
  keywords: [
    "Accounting",
    "Bookkeeping",
    "IFRS Advisory",
    "Startup Finance",
    "Pakistan",
    "Remote Accounting",
  ],
  openGraph: {
    title: "Elevare Solutions Hub | Expert Accounting & Financial Advisory",
    description: siteConfig.general.mission,
    url: "https://elevarehub.com",
    siteName: "Elevare Solutions Hub",
    type: "website",
  },
};

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { FloatingContactButton } from "@/components/ui/FloatingContactButton"; // Import

import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Elevare Solutions Hub",
    "image": "https://elevarehub.com/og-image.jpg",
    "description": siteConfig.general.mission,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "telephone": siteConfig.contact.phones[0],
    "url": "https://elevarehub.com",
    "priceRange": "$$"
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${bricolage.variable} antialiased bg-background text-foreground font-sans`}>
        <ThemeProvider>
          <Navbar />
          <FloatingContactButton /> {/* Added here */}
          {children}
          <Footer />
        </ThemeProvider>
         {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google AdSense */}
        {process.env.NEXT_PUBLIC_ADSENSE_ID && (
           <Script
             async
             src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
             crossOrigin="anonymous"
             strategy="afterInteractive"
           />
        )}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
    </html>
  );
}
