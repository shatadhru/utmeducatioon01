
'use client'

import Link from 'next/link'
import {
  LayoutDashboard,
  ShieldCheck,
  UserRound,
  Settings,
  CreditCard,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function DropDownMenus({ user }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
<Avatar className="w-8 h-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>


      </DropdownMenuTrigger>


      <DropdownMenuContent className="w-44" align="start">
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex items-center gap-2">
            <LayoutDashboard className="size-4 text-blue-500" />
            ড্যাশবোর্ড
          </Link>
        </DropdownMenuItem>

        {user?.roles?.includes('admin') && (
          <DropdownMenuItem asChild>
            <Link href="/admin" className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-red-500" />
              অ্যাডমিন
            </Link>
          </DropdownMenuItem>
        )}

        <DropdownMenuItem asChild>
          <Link href="/account" className="flex items-center gap-2">
            <UserRound className="size-4 text-green-500" />
            অ্যাকাউন্ট
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/settings" className="flex items-center gap-2">
            <Settings className="size-4 text-purple-500" />
            সেটিংস
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/payment" className="flex items-center gap-2">
            <CreditCard className="size-4 text-orange-500" />
            পেমেন্ট
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropDownMenus
