import { availableLocaleCodes, localePrefix, pathnames } from '@/config/locale'
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales: availableLocaleCodes,
    pathnames,
    localePrefix,
  })
