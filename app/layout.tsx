import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import NavigationProvider from '@/components/Navigation/NavigationProvider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='corporate'>
      <body className={`${inter.className} max-w-screen overflow-x-hidden`}>
        <NavigationProvider />
        {children}
        <Footer />
      </body>
    </html>
  )
}
