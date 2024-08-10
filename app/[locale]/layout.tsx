import { Providers } from '@/app/providers'
import {
  availableLocaleCodes,
  availableLocalesMap,
  defaultLocale,
} from '@/config/locale'
import { inter } from '@/lib/fonts'
import type { Metadata } from 'next'
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations()

  return {
    metadataBase: new URL('https://next-app-template-jet.vercel.app'),
    title: t('metadata.title'),
    description: t('metadata.description'),
  }
}

export function generateStaticParams() {
  return availableLocaleCodes.map((locale) => ({ locale }))
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

  const messages = await getMessages()

  const { hrefLang, langDir } = availableLocalesMap[locale] || defaultLocale

  return (
    <html lang={hrefLang} dir={langDir} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers messages={messages}>{children}</Providers>
      </body>
    </html>
  )
}
