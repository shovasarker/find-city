import { createContext, useState } from 'react'

const ThemeContext = createContext({})

const themeValue = {
  dark: {
    bg: 'bg-gray-800',
    text: 'text-stone-200',
    inverseText: 'text-gray-800',
    inverseBg: 'bg-stone-200',
    border: 'border-stone-200',
    shadow: 'shadow-stone-200/30',
  },
  light: {
    bg: 'bg-stone-100',
    text: 'text-gray-800',
    inverseBg: 'bg-gray-800',
    inverseText: 'text-stone-100',
    border: 'border-gray-800',
    shadow: 'shadow-gray-800/30',
  },
}

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeValue.dark)
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
