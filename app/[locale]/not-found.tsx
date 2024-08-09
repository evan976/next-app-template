import { useTranslations } from 'next-intl'

export default function Page() {
  const t = useTranslations('not_found')
  return <h1>{t('title')}</h1>
}
