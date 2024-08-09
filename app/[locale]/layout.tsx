import { Providers } from '@/app/providers'
import { locales } from '@/config/locale'
import Locale from 'intl-locale-textinfo-polyfill'
import type { Metadata } from 'next'
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations()

  return {
    metadataBase: new URL(process.env.VERCEL_URL || 'http://localhost:3000'),
    title: t('metadata.title'),
    description: t('metadata.description'),
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function AppLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  const { direction } = new Locale(locale).textInfo

  const messages = await getMessages()
  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers messages={messages}>{children}</Providers>
      </body>
    </html>
  )
}
