import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14532D",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Trimagnetix | Innovative Magnetic Solutions",
  description: "Trimagnetix specializes in advanced magnetic technologies and solutions for medical, industrial, and consumer technology sectors. Discover how our innovative magnetic solutions can transform your projects.",
  keywords: ["magnetic solutions", "electromagnetic design", "magnetic materials", "Trimagnetix", "custom magnetics"],
  authors: [{ name: "Trimagnetix Team" }],
  creator: "Trimagnetix",
  publisher: "Trimagnetix",
  robots: "index, follow",
  applicationName: "Trimagnetix Website",
  
  // Open Graph meta tags for social media sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trimagnetix.com',
    siteName: 'Trimagnetix',
    title: 'Trimagnetix | Innovative Magnetic Solutions',
    description: 'Trimagnetix specializes in advanced magnetic technologies and solutions for medical, industrial, and consumer technology sectors. Discover how our innovative magnetic solutions can transform your projects.',
    images: [
      {
        url: '/TriMagnetixLogoWithName.png',
        width: 1200,
        height: 630,
        alt: 'Trimagnetix Logo',
      },
    ],
  },
  
  // Twitter Card meta tags
  twitter: {
    card: 'summary_large_image',
    site: '@trimagnetix',
    creator: '@trimagnetix',
    title: 'Trimagnetix | Innovative Magnetic Solutions',
    description: 'Trimagnetix specializes in advanced magnetic technologies and solutions for medical, industrial, and consumer technology sectors.',
    images: ['/TriMagnetixLogoWithName.png'],
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} font-sans bg-white text-soft-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
