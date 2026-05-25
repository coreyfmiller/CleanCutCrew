import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Clean Cut Crew | Lawn & Yard Services',
  description: 'Professional lawn mowing and yard services by Ryder, Aiden & Jaxon. Affordable prices, friendly local service, and satisfaction guaranteed.',
  keywords: ['lawn mowing', 'yard services', 'lawn care', 'whipper snipping', 'trash bin service', 'local lawn service'],
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
