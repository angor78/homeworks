const CHANGE_THEME = 'CHANGE_THEME'


const theme = 'some'

export const themeReducer = (state: string = theme, action: ChangeThemeCType): string => { // fix any
  switch (action.type) {
    case CHANGE_THEME: {
      let copy = state
      copy = action.theme
      return copy
    }
    default:
      return state;
  }
};


export type ChangeThemeCType = {type:string, theme:string}
export const changeThemeC = (theme: string): ChangeThemeCType => {
  return {type: CHANGE_THEME, theme} as const
}; // fix any
