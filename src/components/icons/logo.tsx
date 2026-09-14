"use client"
import clsx from 'clsx'
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import React, { Suspense } from 'react'

export function LogoIcon() {
  return (
    <div>
      <Suspense>
        <div className="dark:flex hidden">
           <CldImage src="https://res.cloudinary.com/dccbp4dpb/image/upload/v1789398248/70ecbe4b-9062-4190-98d6-39133e2bae53.png" width={100} height={100} alt="Logo" /> 
      </div>
      <div className="dark:hidden flex">
           <CldImage src="https://res.cloudinary.com/dccbp4dpb/image/upload/v1789398291/utm_fkrgc8_l9o2z0.png" width={100} height={100} alt="Logo" /> 
      </div>
      </Suspense>
    </div>
  )
}
