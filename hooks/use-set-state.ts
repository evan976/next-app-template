import * as React from 'react'

/**
 * Custom React hook that provides a state object and a function to update it.
 *
 * @param {S} initialState - The initial state object. Defaults to an empty object.
 * @return {[S, (patch: Partial<S> | ((prevState: S) => Partial<S>)) => void]} - An array containing the current state object and a function to update it.
 */
function useSetState<S extends object>(
  initialState: S = {} as S,
): [S, (patch: Partial<S> | ((prevState: S) => Partial<S>)) => void] {
  const [state, set] = React.useState<S>(initialState)
  const setState = React.useCallback(
    (patch: Partial<S> | ((prevState: S) => Partial<S>)) => {
      set((prevState) =>
        Object.assign(
          {},
          prevState,
          patch instanceof Function ? patch(prevState) : patch,
        ),
      )
    },
    [],
  )

  return [state, setState]
}

export default useSetState
