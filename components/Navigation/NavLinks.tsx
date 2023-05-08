import { useAtom } from "jotai"
import Link from "next/link"
import { isNavOpenAtom } from "./NavigationProvider"

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/memberships', label: 'Memberships' },
  { href: '/schedule', label: 'Schedule' },
  // { href: '/shop', label: 'Shop' },
  { href: '/staff', label: 'Staff' },
]

export default function NavLinks() {
  const [_, setIsNavOpen] = useAtom(isNavOpenAtom)
  const closeNav = () => setIsNavOpen(false)
  return (
    <>
      {
        LINKS.map(link => (
          <Link onClick={closeNav} className='hover:font-black font-light text-xl transition-all ease-in-out duration-300' key={`${link.label}-link`} href={link.href}>  {link.label} </Link>
        ))
      }
    </>
  )
}
