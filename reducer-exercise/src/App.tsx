import { useReducer } from "react"
import { themeReducer } from "./reduces/themeReducer"


const App = () => {
  const [state, dispatch] = useReducer(themeReducer, { isDark: false, fSize: 16 })

  return (
    <div className="flex items-center justify-center flex-col gap-5 h-screen">
      <h2 
        className={`rounded-md p-3 min-w-96 text-center ${state.isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
        style={{fontSize: `${state.fSize}px`}} >
        Hello!!!
      </h2>
      <button 
        className={`rounded-md p-3 min-w-96 ${state.isDark ? 'bg-blue-950 text-white' : 'bg-pink-200 text-gray-900'}`}
        onClick={() => dispatch({type: "change_theme"})}>
        Toggle Dark Mode
      </button>
      <button 
        className={`rounded-md p-3 min-w-96 ${state.isDark ? 'bg-blue-950 text-white' : 'bg-yellow-200 text-gray-900'}`}
        onClick={() => dispatch({type: "increase_font"})}>
        Increase Font Size
      </button>
      <button 
        className={`rounded-md p-3 min-w-96 ${state.isDark ? 'bg-blue-950 text-white' : 'bg-orange-200 text-gray-900'}`}
        onClick={() => dispatch({type: "decrease_font"})}>
        Decrease Font Size
      </button>
    </div>
  )
}

export default App
