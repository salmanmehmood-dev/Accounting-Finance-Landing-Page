import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/data/site-content";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground font-sans`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
