'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import type { Header } from '@/payload-types'
import { PhoneCall } from 'lucide-react'

import { LogoIcon } from '@/components/icons/logo'
import { MobileMenu } from './MobileMenu'
import { navByDefaultLinks } from './navBydefault'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'

const UserAccount = dynamic(() => import('../UserAccount'))
const Search = dynamic(() => import('@/components/Search').then((mod) => mod.Search), {
  ssr: false,
})

type Props = {
  header: Header
}

export function HeaderClient({ header }: Props) {
  const menu = header.navItems ?? []

  return (
    <header className="relative z-20 border-b text-[16px]!">
      <nav className="container flex items-center gap-4 pt-2">

        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileMenu menu={menu} />
        </div>

        {/* Logo + Navigation */}
        <div className="flex shrink-0 items-center">
          <Link href="/" className="px-2 py-4">
            <LogoIcon />
          </Link>

          <NavigationMenu className="hidden pl-6 md:flex">
            <NavigationMenuList>
              {navByDefaultLinks.map(({ name, href }) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink asChild>
                    <Link href={href}>{name}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              {menu.map(({ link }, key) => {
                if (!link.url) return null

                return (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuLink asChild>
                      <Link href={link.url}>{link.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search */}
        <div className="hidden min-w-0 flex-1 md:flex">
          <Search />
        </div>

        {/* Account */}
        <div className="ml-auto flex shrink-0 justify-end gap-2 py-4">
          <Button
            variant="default"
            className="bg-green-600 text-white hover:bg-green-500"
          >
            <PhoneCall />
            <span className="hidden md:flex">Helpline</span>
          </Button>

          <UserAccount />
        </div>

      </nav>
    </header>
  )
}