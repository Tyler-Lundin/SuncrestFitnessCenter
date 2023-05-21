'use client';
import { useAtom } from "jotai"
import Link from "next/link"
import { isNavOpenAtom } from "./NavigationProvider"
import { usePathname } from 'next/navigation'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/memberships', label: 'Memberships' },
  { href: '/schedule', label: 'Schedule' },
]

export default function NavLinks() {
  const [_, setIsNavOpen] = useAtom(isNavOpenAtom)
  const closeNav = () => setIsNavOpen(false)
  const pathname = usePathname()
  const isCurrentPath = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href === '/') return false
    return pathname.startsWith(href)
  }

  return (
    <>
      {
        LINKS.map(link => (
          <Link
            tabIndex={0}
            onClick={closeNav}
            className={`${isCurrentPath(link.href) ? 'font-black hover:font-light' : 'hover:font-black font-light'} text-xl transition-all ease-in-out duration-300 `}
            key={`${link.label}-link`} href={link.href}
          >  {link.label} </Link>
        ))
      }
    </>
  )
}
