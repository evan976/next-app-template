import {
  availableLocaleCodes,
  availableLocalesMap,
  defaultLocale,
} from '@/config/locale'
import { inter } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Providers } from '@/providers'
import type { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

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

  const { hrefLang, langDir } = availableLocalesMap[locale] || defaultLocale

  return (
    <html lang={hrefLang} dir={langDir} suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          'bg-neutral-50 text-gray-950 dark:bg-neutral-800 dark:text-gray-100',
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
