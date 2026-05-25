import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Clean Cut Crew | Lawn & Yard Services in Quispamsis, NB',
  description: 'Lawn mowing, trimming, and yard care in Quispamsis & surrounding area. Reliable service, fair prices, free quotes. Call Ryder, Aiden & Jaxon today.',
  metadataBase: new URL('https://cleancutcrew.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Clean Cut Crew | Lawn & Yard Services in Quispamsis, NB',
    description: 'Lawn mowing, trimming, and yard care in Quispamsis & surrounding area. Reliable service, fair prices, free quotes.',
    url: 'https://cleancutcrew.ca',
    siteName: 'Clean Cut Crew',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 650,
        height: 390,
        alt: 'Clean Cut Crew - Lawn and Yard Services in Quispamsis NB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clean Cut Crew | Lawn & Yard Services in Quispamsis, NB',
    description: 'Lawn mowing, trimming, and yard care in Quispamsis & surrounding area.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Clean Cut Crew",
              "description": "Lawn mowing, trimming, and yard care in Quispamsis and surrounding area.",
              "url": "https://cleancutcrew.ca",
              "telephone": "+1-506-333-6494",
              "areaServed": [
                { "@type": "City", "name": "Quispamsis", "containedInPlace": { "@type": "AdministrativeArea", "name": "New Brunswick" } }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Quispamsis",
                "addressRegion": "NB",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 45.4331,
                "longitude": -65.9497
              },
              "serviceType": ["Lawn Mowing", "Yard Trimming", "Yard Cleanup", "Trash Bin Service"],
              "priceRange": "$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "20:00"
              },
              "sameAs": []
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
