import { createContext, useState } from 'react'

const ThemeContext = createContext({})

const themeValue = {
  dark: {
    bg: 'bg-gray-800',
    text: 'text-stone-200',
    inverseText: 'text-gray-800',
    inverseBg: 'bg-stone-200',
    border: 'border-stone-200',
    inverseBorder: 'border-gray-800',
    shadow: 'shadow-stone-200/30',
    hoverBg: 'hover:bg-stone-200',
    hoverText: 'hover:text-gray-800',
  },
  light: {
    bg: 'bg-stone-100',
    text: 'text-gray-800',
    inverseBg: 'bg-gray-800',
    inverseText: 'text-stone-100',
    border: 'border-gray-800',
    inverseBorder: 'border-stone-100',
    shadow: 'shadow-gray-800/30',
    hoverBg: 'hover:bg-gray-800',
    hoverText: 'hover:text-stone-100',
  },
}

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({})
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themeValue,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
