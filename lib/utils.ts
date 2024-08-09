import { type ClassValue, clsx } from 'clsx'
import type { ReadonlyURLSearchParams } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

/**
 * Returns a merged class string by concatenating the input class values.
 *
 * @param {ClassValue[]} inputs - An array of class values to be merged.
 * @return {string} - The merged class string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param {number} value - The number to be clamped.
 * @param {[number, number]} [min, max] - The minimum and maximum values.
 * @return {number} The clamped number.
 */
export function clamp(value: number, [min, max]: [number, number]): number {
  return Math.min(max, Math.max(min, value))
}

/**
 * Returns a URL by concatenating a pathname with a query string.
 *
 * @param {string} pathname - The base URL path.
 * @param {URLSearchParams | ReadonlyURLSearchParams} params - The URL parameters.
 * @return {string} The concatenated URL.
 */
export function createUrl(
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
): string {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`
  return `${pathname}${queryString}`
}
