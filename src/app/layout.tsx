import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Nyíregyházi autókölcsönző",
  description: "Nyíregyházi autókölcsönző",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="h-full">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/images/logo.png" as="image" />
        <link rel="preload" href="/images/car.png" as="image" />
      </head>
      <body
        className={`${poppins.className} antialiased min-h-full flex flex-col`}
      >
        <TopBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
}
