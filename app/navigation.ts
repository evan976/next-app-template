import { routing } from '@/routing'
import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing)
