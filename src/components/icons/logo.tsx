import clsx from 'clsx'
import Image from 'next/image';
import React, { Suspense } from 'react'

export function LogoIcon() {
  return (
    <div>
      <Suspense>
        <div className="dark:flex hidden">
           <Image src="https://res.cloudinary.com/doqcv0ywi/image/upload/v1788673373/dark_pn0ylt.png" width={100} height={100} alt="Logo" /> 
      </div>
      <div className="dark:hidden flex">
           <Image src="https://res.cloudinary.com/doqcv0ywi/image/upload/v1788673370/utm_fkrgc8.png" width={100} height={100} alt="Logo" /> 
      </div>
      </Suspense>
    </div>
  )
}
