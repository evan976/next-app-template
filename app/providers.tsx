'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  type AbstractIntlMessages,
  NextIntlClientProvider,
  useLocale,
} from 'next-intl'
import * as React from 'react'

export function Providers({
  children,
  messages,
}: {
  children: React.ReactNode
  messages?: AbstractIntlMessages
}) {
  const locale = useLocale()
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <NextIntlClientProvider
        messages={messages}
        locale={locale}
        now={new Date()}
      >
        {children}
      </NextIntlClientProvider>
    </QueryClientProvider>
  )
}
