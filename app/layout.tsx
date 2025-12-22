import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {AuthProvider} from '@/contexts/AuthContext'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://docvault-three.vercel.app'),
  title: {
    default: 'DocVault - Offline Documentation Library | Access 500K+ Docs Anywhere | Built by David Briggs',
    template: '%s | DocVault'
  },
  description: 'The ultimate offline-first documentation library. Access 500,000+ programming docs, tutorials, ai, and guides without internet. Free forever tier. Python, JavaScript, React, and more.Built by David Briggs',
  keywords: [
    'offline documentation',
    'programming docs',
    'developer tools',
    'offline learning',
    'documentation library',
    'python docs',
    'javascript docs',
    'react documentation',
    'offline developer docs',
    'study programming offline',
    'DocVault',
    'dev docs alternative',
    'notion alternative',
    'David Briggs Docvault',
    'obsidian for developers'
  ],
  authors: [{ name: 'David Briggs' }],
  creator: 'David Briggs',
  publisher: 'David Briggs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://docvault-three.vercel.app',
    title: 'DocVault - Offline Documentation Library Built by David Briggs',
    description: 'Access 500,000+ programming docs offline. Learn anywhere, anytime. Free forever. Build by David Briggs',
    siteName: 'DocVault',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DocVault - Offline Documentation Library',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocVault - Offline Documentation Library',
    description: 'Access 500,000+ programming docs offline. Learn anywhere, anytime.',
    images: ['/og-image.png'],
    creator: '@DavidBriggs',
  },
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://docvault-three.vercel.app',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "DocVault",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Web, iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "1250"
              },
              "description": "Offline-first documentation library with 500,000+ programming docs, tutorials, and guides Built by David Briggs."
            })
          }}
        />
      </head>
      <body className={cn(inter.className, "antialiased")}>
          <AuthProvider>
        {children}
         </AuthProvider>
      </body>
    </html>
  )
}
