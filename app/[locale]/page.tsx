import { LocaleSwitcher } from '@/components/locale-switcher'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function Page({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('home')
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
      {t('title')}
      <LocaleSwitcher />
    </main>
  )
}
