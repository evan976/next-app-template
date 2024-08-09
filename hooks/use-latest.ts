import * as React from 'react'

/**
 * Returns a ref object that always holds the latest value passed to it.
 *
 * @param {T} value - The value to be stored in the ref object.
 * @return {React.MutableRefObject<T>} A ref object that holds the latest value.
 */
export function useLatest<T>(value: T): React.MutableRefObject<T> {
  const ref = React.useRef(value)
  ref.current = value
  return ref
}
