import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { Plugin } from 'payload'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { ecommercePlugin } from '@payloadcms/plugin-ecommerce'

import { stripeAdapter } from '@payloadcms/plugin-ecommerce/payments/stripe'

import { Page, Product } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'
import { ProductsCollection } from '@/collections/Products'
import { adminOrPublishedStatus } from '@/access/adminOrPublishedStatus'
import { adminOnlyFieldAccess } from '@/access/adminOnlyFieldAccess'
import { customerOnlyFieldAccess } from '@/access/customerOnlyFieldAccess'
import { isAdmin } from '@/access/isAdmin'
import { isDocumentOwner } from '@/access/isDocumentOwner'
import { payloadTheme } from 'payload-theme'
import { cloudinaryStorage } from 'payload-cloudinary'
import { betterAuthOptions } from '../lib/auth/config';
import { betterAuth } from "better-auth"
import {
  betterAuthCollections,
  createBetterAuthPlugin,
  payloadAdapter,
} from '@delmaredigital/payload-better-auth'

const generateTitle: GenerateTitle<Product | Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | Payload Ecommerce Template` : 'Payload Ecommerce Template'
}

const generateURL: GenerateURL<Product | Page> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  seoPlugin({
    generateTitle,
    generateURL,
  }),


 betterAuthCollections({ betterAuthOptions, skipCollections: ['user'] }),

 
    createBetterAuthPlugin({
      createAuth: (payload) =>
        betterAuth({
          ...betterAuthOptions,
          database: payloadAdapter({ payloadClient: payload }),
          // Do NOT set advanced.database.generateId
          secret: process.env.BETTER_AUTH_SECRET,
          trustedOrigins: ['http://localhost:3000'],
        }),
    }),









  formBuilderPlugin({
    fields: {
      payment: false,
    },
    formSubmissionOverrides: {
      access: {
        delete: isAdmin,
        read: isAdmin,
        update: isAdmin,
      },
      admin: {
        group: 'Content',
      },
    },
    formOverrides: {
      access: {
        delete: isAdmin,
        read: isAdmin,
        update: isAdmin,
        create: isAdmin,
      },
      admin: {
        group: 'Content',
      },
      
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'confirmationMessage') {
            return {
              ...field,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  ]
                },
              }),
            }
          }
          return field
        })
      },
    },
  }),

      payloadTheme({ accent: '#0d9488',

logo: {light: 'https://res.cloudinary.com/doqcv0ywi/image/upload/v1788673370/utm_fkrgc8.png', dark: 'https://res.cloudinary.com/doqcv0ywi/image/upload/v1788673373/dark_pn0ylt.pn'}
    

       }),

         cloudinaryStorage({
      config: {
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dccbp4dpb",
        api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '433195912561124',
        api_secret: process.env.CLOUDINARY_API_SECRET || "Osh6y17_onFGFT1Wwog0BlhknoU"
      },
      collections: {
        'media': true, // Enable for media collection
        // Add more collections as needed
      },
      folder: 'utmeducation', // Optional, defaults to 'payload-media'
      disableLocalStorage: true, // Optional, defaults to true
      enabled: true // Optional, defaults to true
    }),

  ecommercePlugin({
    access: {
      adminOnlyFieldAccess,
      adminOrPublishedStatus,
      customerOnlyFieldAccess,
      isAdmin,
      isDocumentOwner,
    },
    customers: {
      slug: 'users',
    },
    orders: {
      ordersCollectionOverride: ({ defaultCollection }) => ({
        ...defaultCollection,
        fields: [
          ...defaultCollection.fields,
          {
            name: 'accessToken',
            type: 'text',
            unique: true,
            index: true,
            admin: {
              position: 'sidebar',
              readOnly: true,
            },
            hooks: {
              beforeValidate: [
                ({ value, operation }) => {
                  if (operation === 'create' || !value) {
                    return crypto.randomUUID()
                  }
                  return value
                },
              ],
            },
          },
        ],
      }),
    },
    payments: {
      paymentMethods: [
        stripeAdapter({
          secretKey: process.env.STRIPE_SECRET_KEY!,
          publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
          webhookSecret: process.env.STRIPE_WEBHOOKS_SIGNING_SECRET!,
        }),
      ],
    },
    products: {
      productsCollectionOverride: ProductsCollection,
    },
  }),
]
