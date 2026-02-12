import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import SmoothScrolling from '@/components/providers/SmoothScrolling'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'GGIT Systems | Digital Solutions',
  description: 'Turning complex challenges into scalable digital solutions.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-dark-bg text-foreground min-h-screen relative`}>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  )
}
