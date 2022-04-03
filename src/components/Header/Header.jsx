import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PathContext from '../../contexts/PathContext'
import ThemeContext from '../../contexts/ThemeContext'
import {
  addPathtoStorage,
  addThemetoStorage,
  getThemeFromStorage,
} from '../../utilities/Utilities'
import Switch from '../Switch'

const Header = () => {
  const { setQueryText, setQueryType } = useContext(PathContext)
  const { theme, setTheme, themeValue } = useContext(ThemeContext)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (Object?.keys(theme)?.length > 0) return
    const themeData = getThemeFromStorage()
    setEnabled(themeData)
  }, [theme, setTheme, themeValue])

  useEffect(() => {
    addThemetoStorage(enabled)
    enabled ? setTheme(themeValue.light) : setTheme(themeValue.dark)
  }, [enabled, setTheme, themeValue])
  return (
    <nav className={`${theme.bg} ${theme.text} py-8 `}>
      <div className={`flex justify-between items-center gap-4`}>
        <Link to={'/'}>
          <h1
            onClick={() => {
              setQueryType('All')
              setQueryText('')
              addPathtoStorage({ queryType: 'All', queryText: '' })
            }}
            className={`text-2xl md:text-3xl lg:text-4xl font-bold ${theme.text}`}
          >
            Find Countries
          </h1>
        </Link>
        <Switch enabled={enabled} setEnabled={setEnabled} />
      </div>
    </nav>
  )
}

export default Header
