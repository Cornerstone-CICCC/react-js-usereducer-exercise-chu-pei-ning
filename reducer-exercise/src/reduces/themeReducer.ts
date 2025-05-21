type Theme = {
  isDark: boolean,
  fSize: number
}

type ThemeAction = 
  | { type: "change_theme" }
  | { type: "increase_font" }
  | { type: "decrease_font" }

  export const themeReducer = (state: Theme, action: ThemeAction) => {
    switch (action.type) {
      case "change_theme":
        return { ...state, isDark: !state.isDark }
      case "increase_font":
        return { ...state, fSize: state.fSize + 1 }
      case "decrease_font":
        return { ...state, fSize: state.fSize - 1 }
      default:
        return state
    }
  }