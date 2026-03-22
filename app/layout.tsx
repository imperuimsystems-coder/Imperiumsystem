import type { Metadata } from 'next'
import { Playfair_Display, Cinzel, Crimson_Text, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
})

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: '--font-heading',
  display: 'swap',
})

const crimsonText = Crimson_Text({ 
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Imperium | AI Automation for Elite Service Businesses',
  description: 'The AI Automation System That Turns Lost Leads Into Locked Revenue. Imperium automates lead capture, SMS follow-up, appointment scheduling, and more.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfairDisplay.variable} ${cinzel.variable} ${crimsonText.variable} ${jetbrainsMono.variable} font-body antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
