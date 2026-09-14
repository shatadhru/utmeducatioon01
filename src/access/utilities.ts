import type { User } from '@/payload-types'

type UserWithRoles = Partial<User> & {
  roles?: string[]
}

export const checkRole = (allRoles: string[] = [], user?: UserWithRoles | null): boolean => {
  if (user && allRoles.length > 0) {
    return allRoles.some((role) => user.role === role)
  }

  return false
}
