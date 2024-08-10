import {
  availableLocaleCodes,
  defaultLocale,
  localePrefix,
  pathnames,
} from '@/config/locale'
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: availableLocaleCodes,
  defaultLocale: defaultLocale.code,
  localePrefix,
  pathnames,
})

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
}
