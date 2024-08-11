import { NextIntlClientProvider, useMessages, useTimeZone } from 'next-intl'
import type * as React from 'react'

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const messages = useMessages()
  const timeZone = useTimeZone()

  return (
    <NextIntlClientProvider messages={messages} timeZone={timeZone}>
      {children}
    </NextIntlClientProvider>
  )
}
