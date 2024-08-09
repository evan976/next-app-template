import type { LocalePrefix, Pathnames } from 'next-intl/routing'

export const locales = ['en', 'zh'] as const

export const defaultLocale = 'en' as const

export const pathnames: Pathnames<typeof locales> = {}

export const localePrefix: LocalePrefix<typeof locales> = 'as-needed'
