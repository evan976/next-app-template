import locales from '@/i18n/config.json'
import type { LocalePrefix, Pathnames } from 'next-intl/routing'

export const defaultLocale = locales.find((locale) => locale.default)!

export const availableLocales = locales.filter((locale) => locale.enabled)

export const availableLocaleCodes = availableLocales.map(
  (locale) => locale.code,
)

export const availableLocalesMap = Object.fromEntries(
  locales.map((locale) => [locale.code, locale]),
)

export const pathnames: Pathnames<typeof availableLocaleCodes> = {}

export const localePrefix: LocalePrefix<typeof availableLocaleCodes> = {
  mode: 'as-needed',
}
