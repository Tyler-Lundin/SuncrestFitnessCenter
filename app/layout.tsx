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
    <html lang="en" data-theme='emerald'>
      <body className={`${inter.className} w-screen overflow-x-hidden max-h-screen`}>
        <NavigationProvider />
        {children}
        {/* @ts-expect-error Async Server Component */}
        <Footer />
      </body>
    </html>
  )
}
