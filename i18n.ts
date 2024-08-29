import { availableLocaleCodes } from '@/config/locale'
import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

async function loadLocaleDictionary(locale: string) {
  if (!availableLocaleCodes.includes(locale)) {
    notFound()
  }

  if (locale === 'en') {
    // This enables HMR on the English Locale, so that instant refresh
    // happens while we add/change texts on the source locale
    return import('./i18n/locales/en.json').then((f) => f.default)
  }
  // Other languages don't really require HMR as they will never be development languages
  // so we can load them dynamically
  return import(`./i18n/locales/${locale}.json`).then((f) => f.default)
}

export default getRequestConfig(async ({ locale }) => ({
  messages: await loadLocaleDictionary(locale),
  timeZone: 'UTC',
}))
