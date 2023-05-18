'use client';

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const LINKS = [
  { href: '/dashboard/messages', label: 'Messages' },
  { href: '/dashboard/archived-messages', label: 'Archived Messages' },
  { href: '/dashboard/announcements', label: 'Announcements' },
  { href: '/dashboard/schedule', label: 'Schedule' },
  { href: '/dashboard/memberships', label: 'Memberships' },
]

export default function DashboardNavigation() {

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {LINKS.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <Link href={href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>{label}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
