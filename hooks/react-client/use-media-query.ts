import * as React from 'react'

/**
 * A custom React hook that returns a boolean indicating whether the current
 * window matches the provided media query.
 *
 * @param {string} query - The media query string to match against.
 * @return {boolean} A boolean indicating whether the current window matches the
 * provided media query.
 */
function useMediaQuery(query: string): boolean {
  const subscribe = React.useCallback(
    (callback: () => void) => {
      const matchMedia = window.matchMedia(query)

      matchMedia.addEventListener('change', callback)
      return () => {
        matchMedia.removeEventListener('change', callback)
      }
    },
    [query],
  )

  function getSnapshot() {
    return window.matchMedia(query).matches
  }

  function getServerSnapshot() {
    return false
  }

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export default useMediaQuery
