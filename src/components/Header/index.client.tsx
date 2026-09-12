'use client'

import Link from 'next/link'
import type { Header } from '@/payload-types'

import { LogoIcon } from '@/components/icons/logo'
import { MobileMenu } from './MobileMenu'
import { navByDefaultLinks } from './navBydefault'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import UserAccount from '../UserAccount'
import { Search } from '../Search'

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
                <NavigationMenuItem key={name}>
                  <NavigationMenuLink asChild>
                    <Link href={href}>{name}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              {menu.map(({ link }) => {
                if (!link.url) return null

                return (
                  <NavigationMenuItem key={link.url}>
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
        <div className="hidden md:flex min-w-0 flex-1">
          <Search />
        </div>

        {/* Account */}
        <div className="shrink-0 ml-auto py-4 justify-end">
          <UserAccount />
        </div>
      </nav>
    </header>
  )
}