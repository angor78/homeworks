const LOADING = 'LOADING'

const loading = false

export const loadingReducer = (state: boolean = loading, action: LoadingActionType): boolean => {
  switch (action.type) {
    case LOADING: {
       let copy = state
      copy=action.loading
      return copy
    }
    default:
      return state

  }
}
export type  LoadingActionType = ReturnType<typeof loadingAC>
export const loadingAC = (loading:boolean) => {
  return {type: LOADING, loading} as const
}