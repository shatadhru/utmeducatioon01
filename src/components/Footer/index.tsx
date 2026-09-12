import type { Footer } from '@/payload-types'

import { FooterMenu } from '@/components/Footer/menu'
import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { LogoIcon } from '@/components/icons/logo'
import { Separator } from '../ui/separator'
import { navByDefaultLinks } from '../Header/navBydefault';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

const { COMPANY_NAME, SITE_NAME } = process.env

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)()
  const menu = footer.navItems || []

  const currentYear = new Date().getFullYear()
  const copyrightDate = 2017 + (currentYear > 2017 ? `-${currentYear}` : '')

  const skeleton =
    'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700'

  const copyrightName = COMPANY_NAME || SITE_NAME || ''

  return (
    <footer className="text-[16px] text-neutral-500 dark:text-neutral-400">
      <div className="container">
        {/* Top Footer */}
        <div className="flex w-full flex-col gap-6 border-t border-neutral-200 py-12 text-sm md:flex-row md:gap-12 dark:border-neutral-700">
          <div>
            <Link
              className="flex items-center gap-2 text-black md:pt-1 dark:text-white"
              href="/"
            >
              <LogoIcon />
            </Link>
          </div>

          <Suspense
            fallback={
              <div className="flex h-[188px] w-[200px] flex-col gap-2">
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
              </div>
            }
          >
            <FooterMenu menu={menu} />
          </Suspense>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 border-neutral-200  md:grid-cols-3 dark:border-neutral-700">
          {/* About */}
          <div>
            <h2 className="mb-4 font-semibold text-primary dark:text-secondary">
              আমাদের সম্পর্কে
            </h2>

            <p className="max-w-sm leading-7">
              ইউনিক টিচিং মেথড একটি আধুনিক অনলাইন শিক্ষা প্ল্যাটফর্ম, যেখানে
              কনসেপ্টভিত্তিক ও সহজ শিক্ষাপদ্ধতিতে শিক্ষার্থীদের মজবুত ভিত্তি
              তৈরি করা হয়। আমাদের লক্ষ্য—স্মার্ট লার্নিংয়ের মাধ্যমে সবার জন্য
              মানসম্মত শিক্ষা নিশ্চিত করা।
            </p>
          </div>

          {/* Important Links */}
          <div className="md:border-l md:pl-8 md:dark:border-neutral-700">
            <h2 className="mb-4 font-semibold text-primary dark:text-secondary">
              গুরুত্বপূর্ণ লিঙ্ক
            </h2>

            <ul className="space-y-3">
              {navByDefaultLinks?.map((item, key) => (
                <li key={key}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {menu?.map((item, key) => (
                <li key={key}>
                  <Link
                    href={item.link.url || '/'}
                    className="transition-colors hover:text-black dark:hover:text-white"
                  >
                    {item.link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:border-l md:pl-8 md:dark:border-neutral-700">
            <h2 className="mb-4 font-semibold text-primary dark:text-secondary">
              কোম্পানি তথ্য

            </h2>

            <div className="space-y-3">
              <p>ট্রেড লাইসেন্স নং : 011B-155
</p>
<p>E-TIN নম্বর : 476655532048</p>


<div className="w-full max-w-[200px] mb-2">
  <Image
    src="https://res.cloudinary.com/doqcv0ywi/image/upload/v1789234232/payment_providor_s94v2m.png"
    width={600}
    height={600}
    alt="payment providor"
    className="w-full h-auto"
  />
</div>
            <div className="flex gap-2 mb-2 mt-4">

              <SocialIcon network="facebook"  style={{ height: 40, width: 40 }} href="https://web.facebook.com/uniqueteachingmethod" />
              <SocialIcon network="youtube" style={{ height: 40, width: 40 }} href="https://www.youtube.com/@UniqueTeachingMethod" />
              <SocialIcon network="x" style={{ height: 40, width: 40 }} href="/"/>
              <SocialIcon network="whatsapp" style={{ height: 40, width: 40 }} href="https://api.whatsapp.com/send/?phone=8801883961956&text&type=phone_number&app_absent=0"  />
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-200 py-6 dark:border-neutral-700">
        <div className="container mx-auto flex w-full flex-col items-center justify-between gap-1 md:flex-row md:gap-0">
          <p className="text-center text-[12px]! lg:text-sm">
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''}{' '}
            All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  )
}