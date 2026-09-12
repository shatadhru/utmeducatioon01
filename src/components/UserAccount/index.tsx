'use client'

import React, { useEffect, useState } from 'react'
import DropDownMenus from './Dropdownmenus'
import { Button } from '../ui/button'
import { LogInIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

function UserAccount() {
  const [user, setUser] = useState(null)

  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      try {
        const req = await fetch('/api/users/me', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await req.json()

        setUser(data.user)

        console.log(data.user)
      } catch (err) {
        console.log(err)
      }
    }

    getUser()
  }, [])

  return (
    <div>
      {user ? (
        <DropDownMenus user/>
      ) : (
        <Button onClick={() => router.push('/login')}>
          <LogInIcon />
          Login
        </Button>
      )}
    </div>
  )
}

export default UserAccount
