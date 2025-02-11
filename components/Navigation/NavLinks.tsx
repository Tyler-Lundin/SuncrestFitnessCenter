"use client";
import { useAtom } from "jotai";
import Link from "next/link";
import { isNavOpenAtom } from "./NavigationProvider";
import { usePathname } from "next/navigation";
import {
  AiFillCalendar,
  AiFillContacts,
  AiFillHome,
  AiFillInfoCircle,
  AiFillMail,
} from "react-icons/ai";

const LINKS = [
  { href: "/", label: "Home", icon: <AiFillHome /> },
  { href: "/about", label: "About", icon: <AiFillInfoCircle /> },
  { href: "/contact", label: "Contact", icon: <AiFillMail /> },
  { href: "/memberships", label: "Memberships", icon: <AiFillContacts /> },
  { href: "/schedule", label: "Schedule", icon: <AiFillCalendar /> },
];

export default function NavLinks({ textOnly = false }: { textOnly?: boolean }) {
  const [_, setIsNavOpen] = useAtom(isNavOpenAtom);
  const closeNav = () => setIsNavOpen(false);
  const pathname = usePathname();
  const isCurrentPath = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/") return false;
    return pathname.startsWith(href);
  };

  if (textOnly)
    return (
      <>
        {LINKS.map((link) => (
          <Link
            tabIndex={0}
            onClick={closeNav}
            className={`${isCurrentPath(link.href)
                ? "font-black hover:font-light "
                : "hover:font-black font-light "
              } text-xl transition-all ease-in-out duration-300 py-1 px-3 rounded-sm `}
            key={`${link.label}-link`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </>
    );

  return (
    <>
      {LINKS.map((link) => (
        <Link
          tabIndex={0}
          onClick={closeNav}
          className={`${isCurrentPath(link.href)
              ? "font-black hover:font-light bg-black/75 text-white"
              : "hover:font-black font-light bg-white/75"
            } text-xl transition-all ease-in-out duration-300 py-1 px-3 rounded-sm`}
          key={`${link.label}-link`}
          href={link.href}
        >
          <span className="flex justify-between items-center">
            {link.label}
            {link.icon}
          </span>
        </Link>
      ))}
    </>
  );
}
