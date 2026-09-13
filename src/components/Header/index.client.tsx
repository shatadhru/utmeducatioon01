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
import { Button } from '../ui/button';
import { PhoneCall } from 'lucide-react';
import { ThemeSelector } from '@/providers/Theme/ThemeSelector';
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
              {navByDefaultLinks.map(({ name, href }, key) => (
                <NavigationMenuItem key={key}>
                  <NavigationMenuLink asChild>
                    <Link href={href}>{name}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              {menu.map(({ link },key) => {
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
        <div className="hidden md:flex min-w-0 flex-1">
          <Search />
        </div>

        {/* Account */}
        <div className="shrink-0 ml-auto py-4 justify-end flex gap-2">
          <Button variant="default" className="text-white bg-green-600 hover:bg-green-500"> <PhoneCall /> <span className="hidden md:flex">Helpline</span> </Button>
          <UserAccount />
        </div> 
      </nav>
    </header>
  )
}