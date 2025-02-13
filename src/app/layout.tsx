/**
 * Root Layout Configuration
 * 
 * This file serves as the root layout for the entire application, providing:
 * - Core SEO configuration through metadata
 * - Basic HTML structure
 * - Font configuration
 * - Viewport settings
 * - Social media meta tags
 * 
 * @important Update metadataBase URL when deploying to production
 */

import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

/**
 * Poppins Font Configuration
 * Optimized for performance and user experience:
 * - Only loads Latin character subset
 * - Includes specific font weights to minimize bundle size
 * - Uses font-display: swap to prevent FOUT (Flash of Unstyled Text)
 * - Includes fallback fonts for optimal loading
 */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

/**
 * Viewport Configuration
 * Controls how the site is displayed on different devices
 * 
 * @property {string} width - Matches viewport to device width
 * @property {number} initialScale - Sets initial zoom level
 * @property {number} minimumScale - Prevents excessive zooming out
 * @property {boolean} userScalable - Enables zooming for accessibility
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  userScalable: true,
};

/**
 * Metadata Configuration
 * Comprehensive SEO and social media settings for the application
 * 
 * This configuration includes:
 * 1. Basic SEO metadata (title, description, keywords)
 * 2. Social media sharing metadata (OpenGraph, Twitter)
 * 3. Search engine directives (robots, canonical URLs)
 * 4. Site ownership information
 * 5. Icon configurations for various platforms
 */
export const metadata: Metadata = {
  /**
   * Base URL Configuration
   * All relative URLs in metadata will be resolved against this
   * @important Must be updated for production deployment
   */
  metadataBase: new URL('https://nyiregyhaziautokolcsonzo.hu'),

  /**
   * Title Configuration
   * Optimized for search engines and social sharing
   * Keep titles under 60 characters for best SEO results
   */
  title: {
    default: 'Nyíregyházi Autókölcsönző | Megbízható Autóbérlés Nyíregyházán',
    template: '%s | Nyíregyházi Autókölcsönző'
  },

  /**
   * Meta Description
   * Critical for SEO and click-through rates
   * Should be:
   * - Between 150-160 characters
   * - Include primary keywords naturally
   * - Have a clear call-to-action
   */
  description: 'Megbízható autókölcsönzés Nyíregyházán kedvező áron. ⭐ Széles autóválaszték ⭐ Rugalmas feltételek ⭐ Azonnali bérlés ⭐ 24/7 ügyfélszolgálat. Béreljen autót most!',

  /**
   * Keywords
   * While less important for Google, other search engines still use these
   * Include location-specific and service-specific variations
   */
  keywords: ['autókölcsönző nyíregyháza', 'autóbérlés nyíregyháza', 'nyíregyházi autókölcsönző', 'olcsó autóbérlés', 'autóbérlés', 'autókölcsönzés'],

  /**
   * Site Ownership Information
   * Helps establish site legitimacy with search engines
   */
  authors: [{ name: 'Nyíregyházi Autókölcsönző' }],
  creator: 'Nyíregyházi Autókölcsönző',
  publisher: 'Nyíregyházi Autókölcsönző',

  /**
   * Format Detection
   * Prevents unwanted mobile browser behavior
   * Disables automatic detection of contact information
   */
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  /**
   * Canonical URL Configuration
   * Prevents duplicate content issues in search engines
   */
  alternates: {
    canonical: '/',
  },

  /**
   * Search Engine Crawler Instructions
   * Controls how search engines interact with your site
   * Configures Google-specific crawling behavior
   */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  /**
   * OpenGraph Meta Tags
   * Controls how your site appears when shared on social media
   * Optimized for Facebook, LinkedIn, and other platforms
   */
  openGraph: {
    title: 'Nyíregyházi Autókölcsönző | Megbízható Autóbérlés Nyíregyházán',
    description: 'Megbízható autókölcsönzés Nyíregyházán kedvező áron. Széles autóválaszték, rugalmas feltételek, azonnali bérlés. Béreljen autót most!',
    url: 'https://nyiregyhaziautokolcsonzo.hu',
    siteName: 'Nyíregyházi Autókölcsönző',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: '/images/og/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nyíregyházi Autókölcsönző - Professzionális autóbérlés Nyíregyházán',
      },
    ],
  },

  /**
   * Twitter Card Meta Tags
   * Controls how your site appears when shared on Twitter
   * Uses large image card format for better visibility
   */
  twitter: {
    card: 'summary_large_image',
    title: 'Nyíregyházi Autókölcsönző | Megbízható Autóbérlés Nyíregyházán',
    description: 'Megbízható autókölcsönzés Nyíregyházán kedvező áron. Széles autóválaszték, rugalmas feltételek, azonnali bérlés.',
    images: ['/images/og/og-image.png'],
  },

  /**
   * Icon Configuration
   * Provides icons for various platforms and devices
   * Includes favicons and Apple touch icons
   */
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

/**
 * Root Layout Component
 * 
 * Provides the basic HTML structure and common elements for all pages.
 * Implements:
 * - HTML language setting (Hungarian)
 * - Font configuration
 * - Performance optimizations (preconnect, preload)
 * - Common layout elements (header, footer)
 * - Responsive design structure
 * 
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Page content to be rendered
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="h-full">
      <head>
        {/* Preconnect to Google Fonts CDN for faster font loading */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        {/* Preload logo for better initial page load performance */}
        <link rel="preload" href="/images/logo.png" as="image" />
      </head>
      {/* 
        Body Classes:
        - Applies Poppins font
        - Enables font smoothing
        - Sets up flexible layout structure
      */}
      <body
        className={`${poppins.className} antialiased min-h-full flex flex-col`}
      >
        {/* Top navigation bar with contact information */}
        <TopBar />
        {/* Main navigation header */}
        <Header />
        {/* 
          Main content area
          flex-grow ensures it takes available space and pushes footer down
        */}
        <main className="flex-grow">{children}</main>
        {/* Utility component for improving UX on long pages */}
        <ScrollToTop />
      </body>
    </html>
  );
}
