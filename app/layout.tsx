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
  description: 'Lawn mowing, trimming, and yard care in Quispamsis, Rothesay, Hampton & surrounding areas. Reliable service, fair prices, free quotes. Call Ryder, Aiden & Jaxon today.',
  keywords: ['lawn mowing Quispamsis', 'yard services Rothesay', 'lawn care Kennebecasis Valley', 'trimming', 'yard cleanup', 'Hampton lawn service', 'New Brunswick lawn care'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
