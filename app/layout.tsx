import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'

const archivo = Archivo({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Talentfabrikken - Endre Kurs',
  description: 'En skole- og fritidsordning for ungdom som vil lære på sin egen måte',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <body className={archivo.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

