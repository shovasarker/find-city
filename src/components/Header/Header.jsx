import React, { useContext } from 'react'
import ThemeContext from '../../contexs/ThemeContext'

const Header = () => {
  const { theme, setTheme, themeValue } = useContext(ThemeContext)
  return (
    <nav>
      <div className={`${theme.bg} ${theme.text} py-8`}>
        <h1
          className={`text-2xl md:text-3xl lg:text-4xl font-bold ${theme.text}`}
        >
          Find Countries
        </h1>
      </div>
    </nav>
  )
}

export default Header
