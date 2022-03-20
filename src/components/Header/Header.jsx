import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import Switch from '../Switch'

const Header = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <nav className={`${theme.bg} ${theme.text} py-8 `}>
      <div className={`flex justify-between items-center gap-4`}>
        <h1
          className={`text-2xl md:text-3xl lg:text-4xl font-bold ${theme.text}`}
        >
          Find Countries
        </h1>
        <Switch />
      </div>
    </nav>
  )
}

export default Header
