import { useTranslations } from 'next-intl'

export default function Page() {
  const t = useTranslations('not_found')
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>{t('title')}</h1>
    </main>
  )
}
