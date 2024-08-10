'use client'

import { usePathname, useRouter } from '@/app/navigation'
import { availableLocales } from '@/config/locale'
import { cn } from '@/lib/utils'
import { useLocale } from 'next-intl'
import { useParams } from 'next/navigation'
import * as React from 'react'

export function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      )
    })
  }

  return (
    <label
      className={cn('inline-flex items-center gap-2', {
        'transition-opacity [&:disabled]:opacity-30': isPending,
      })}
    >
      <p className="sr-only">Change language</p>
      <select
        className="flex-1 outline-none bg-transparent"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {availableLocales.map(({ code, displayName }) => (
          <option key={code} value={code}>
            {displayName}
          </option>
        ))}
      </select>
    </label>
  )
}
