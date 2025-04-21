import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Palace-IO',
  description: 'Created by Carlos Siglos',
  generator: 'Next.js',
  applicationName: 'Palace-IO',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
