import {
  availableLocaleCodes,
  defaultLocale,
  localePrefix,
  pathnames,
} from '@/config/locale'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: availableLocaleCodes,
  defaultLocale: defaultLocale.code,
  localePrefix,
  pathnames,
})
