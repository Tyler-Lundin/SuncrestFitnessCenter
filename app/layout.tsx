import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import NavigationProvider from '@/components/Navigation/NavigationProvider'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='emerald'>
      <body className={`${inter.className} max-w-screen overflow-x-hidden`}>
        <NavigationProvider />
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
