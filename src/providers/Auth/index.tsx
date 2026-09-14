'use client'

import {
    authClient,
  signIn,
  signOut,
  signUp,
  useSession,
} from '@/lib/auth/client'
import type { User } from '@/payload-types'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

type ResetPassword = (args: {
  password: string
  passwordConfirm: string
  token: string
}) => Promise<void>

type ForgotPassword = (args: {
  email: string
}) => Promise<void>

type Create = (args: {
  email: string
  password: string
  passwordConfirm: string
}) => Promise<void>

type Login = (args: {
  email: string
  password: string
}) => Promise<User>

type Logout = () => Promise<void>

type AuthContext = {
  create: Create
  forgotPassword: ForgotPassword
  login: Login
  logout: Logout
  resetPassword: ResetPassword
  setUser: (user: User | null) => void
  status: 'loggedIn' | 'loggedOut' | undefined
  user?: User | null
}

const Context = createContext({} as AuthContext)

export const AuthProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [user, setUser] = useState<User | null>()
  const [status, setStatus] = useState<
    'loggedIn' | 'loggedOut' | undefined
  >()

  const { data: session, isPending } = useSession()

  // Keep local auth state synced with Better Auth session
  useEffect(() => {
    if (isPending) return

    if (session?.user) {
      setUser(session.user as unknown as User)
      setStatus('loggedIn')
    } else {
      setUser(null)
      setStatus('loggedOut')
    }
  }, [session, isPending])

  // Create account
  const create = useCallback<Create>(async (args) => {
    if (args.password !== args.passwordConfirm) {
      throw new Error('Passwords do not match')
    }

    const { data, error } = await signUp.email({
      email: args.email,
      password: args.password,
      name: args.email.split('@')[0],
    })

    if (error) {
      throw new Error(error.message)
    }

    if (!data?.user) {
      throw new Error('Account creation failed')
    }

    setUser(data.user as unknown as User)
    setStatus('loggedIn')
  }, [])

  // Login
  const login = useCallback<Login>(async (args) => {
    const { data, error } = await signIn.email({
      email: args.email,
      password: args.password,
    })

    if (error) {
      throw new Error(error.message)
    }

    if (!data?.user) {
      throw new Error('Login failed')
    }

    const loggedInUser = data.user as unknown as User

    setUser(loggedInUser)
    setStatus('loggedIn')

    return loggedInUser
  }, [])

  // Logout
  const logout = useCallback<Logout>(async () => {
    const { error } = await signOut()

    if (error) {
      throw new Error(error.message)
    }

    setUser(null)
    setStatus('loggedOut')
  }, [])

  // Forgot password
  const forgotPassword = useCallback<ForgotPassword>(async (args) => {
    const { error } = await authClient.requestPasswordReset({
      email: args.email,
      redirectTo: '/reset-password',
    })

    if (error) {
      throw new Error(error.message)
    }
  }, [])

  // Reset password
  const resetPassword = useCallback<ResetPassword>(async (args) => {
    if (args.password !== args.passwordConfirm) {
      throw new Error('Passwords do not match')
    }

    const { error } = await authClient.resetPassword({
      newPassword: args.password,
      token: args.token,
    })

    if (error) {
      throw new Error(error.message)
    }

    setStatus('loggedOut')
  }, [])

  return (
    <Context.Provider
      value={{
        create,
        forgotPassword,
        login,
        logout,
        resetPassword,
        setUser,
        status,
        user,
      }}
    >
      {children}
    </Context.Provider>
  )
}

type UseAuth<T = User> = () => AuthContext

export const useAuth: UseAuth = () => useContext(Context)