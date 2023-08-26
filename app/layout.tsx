import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import './globals.css'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Designo',
  description: 'Frontend Mentor Challenge | Developed by Ryan Bradley',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.className}>

        <Header />
        
        {children}

        <Footer />
        
      </body>
    </html>
  )
}
