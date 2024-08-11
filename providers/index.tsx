import type * as React from 'react'
import { LocaleProvider } from './locale-provider'
import { QueryProvider } from './query-provider'
import { ThemeProvider } from './theme-provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <LocaleProvider>{children}</LocaleProvider>
      </QueryProvider>
    </ThemeProvider>
  )
}
