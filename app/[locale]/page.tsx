import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function Page({
  params: { locale },
}: {
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)

  const t = useTranslations()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {t('home.title')}
    </main>
  )
}
