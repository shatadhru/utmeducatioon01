import { getCachedGlobal } from '@/utilities/getGlobals'

import './index.css'
import { HeaderClient } from './index.client'
import { Suspense } from 'react'

async function HeaderContent() {
  const header = await getCachedGlobal('header', 2)()

  return <HeaderClient header={header} />
}

export async function Header() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center gap-6 py-4">
          <div className="h-5 w-12 animate-pulse rounded-md bg-muted" />
          <div className="h-5 w-20 animate-pulse rounded-md bg-muted" />
          <div className="h-5 w-16 animate-pulse rounded-md bg-muted" />
          <div className="h-5 w-20 animate-pulse rounded-md bg-muted" />
        </div>
      }
    >
      <HeaderContent />
    </Suspense>
  )
}