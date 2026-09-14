// src/lib/auth/config.ts
import type { BetterAuthOptions } from 'better-auth'

export const betterAuthOptions: Partial<BetterAuthOptions> = {
  baseURL: process.env.BETTER_AUTH_URL,

  user: {
    additionalFields: {
      role: {
        type: 'string',
        defaultValue: 'user',
        input: false,
      },
    },
  },

  session: {
    expiresIn: 60 * 60 * 24 * 30,
  },

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
}