// layout.tsx
import React from "react";
import LocalFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "شمع خودرو شایان | shayan spark plug",
  openGraph: {
    title: "شمع خودرو شایان | فروش تخصصی شمع خودرو",
    url: "https://shayansparkplug.ir",
    type: "website",
    images: [
      {
        url: "https://shayansparkplug.ir/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "شمع خودرو شایان - فروش تخصصی شمع خودرو",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  appleWebApp: {
    capable: true,
    title: "شمع خودرو شایان",
    statusBarStyle: "default",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon-48x48.png",
        sizes: "48x48",
      },
    ],
  },
  robotsTxt: {
    sitemap: "https://shayansparkplug.ir/sitemap.xml",
  },
  manifestDescription: "فروش تخصصی شمع خودرو با بهترین قیمت و کیفیت",
  manifestName: "شمع خودرو شایان",
  manifestShortName: "شایان شمع",
  manifestThemeColor: "#ffffff",
  manifestBackgroundColor: "#ffffff",
  manifestIcons: [
    {
      src: "/logo-removebg-preview.png",
      sizes: "32x32",
      type: "image/png",
    },
  ],
  robotsTxtContent:
    "User-agent: *\nDisallow: /admin/\nDisallow: /private/\nSitemap: https://shayansparkplug.ir/sitemap.xml",
  titleTemplate: "%s | شمع خودرو شایان",
  description: "فروش تخصصی شمع خودرو با بهترین قیمت",
  keywords: ["شمع خودرو", "فروش شمع", "قیمت شمع"],
  authors: [
    { name: "Sahab", lastname: "Ranjbar", webSite: "https://sahabranjbar.dev" },
  ],
  creator: "Sahab Ranjbar",
  applicationName: "شمع خودرو شایان",
  category: "E-commerce",
  viewport: "width=device-width, initial-scale=1",
};

const samim = LocalFont({
  src: [
    {
      path: "../../public/fonts/Samim-FD.woff2",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${samim.className} antialiased`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
