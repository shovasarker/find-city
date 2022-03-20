import { createContext, useState } from 'react'

const ThemeContext = createContext({})

const themeValue = {
  dark: {
    bg: 'bg-gray-800',
    text: 'text-white',
  },
  light: {
    bg: 'bg-stone-100',
    text: 'text-gray-700',
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
