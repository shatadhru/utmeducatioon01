'use client'

import { signIn } from '@/lib/auth/client'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function GoogleAuthButton() {
  const [loading, setLoading] = useState(false)

  const handleGoogleLogin = async () => {
    setLoading(true)

    const { error } = await signIn.social({
      provider: 'google',
      callbackURL: '/account',
    })

    if (error) {
      console.error(error)
      setLoading(false)
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleGoogleLogin}
      disabled={loading}
      className="w-full"
    >
      {loading ? 'Connecting...' : 'Continue with Google'}
    </Button>
  )
}