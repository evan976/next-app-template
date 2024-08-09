import { useTranslations } from 'next-intl'

export default function Page() {
  const t = useTranslations()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {t('home.title')}
    </main>
  )
}
