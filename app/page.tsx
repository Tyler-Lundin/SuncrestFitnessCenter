import Image from 'next/image'
import { Inter } from 'next/font/google'
import Page from '@/components/page/Page'
import Hero from '@/components/Hero'
import ImageCarousel from '@/components/ImageCarousel'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'SFC | Home',
//   description: 'Sample Fitness Center is the PREMIERE choice for fitness in South Stevens County',
// }
export const metadata = {
  title: 'SFC | Home',
  description: 'Sample Fitness Center is the PREMIERE choice for fitness in Sample County',
}



export default function HomePage() {
  return (
    <Page>
      <Hero />
    </Page>
  )
}
