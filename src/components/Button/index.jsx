import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

const Button = ({ handleClick, children }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <button
      onClick={handleClick}
      className={`flex justify-center items-center gap-1 px-2 md:px-3 py-1.5 ${theme.bg} 
          ${theme.text} border ${theme.border} ${theme.hoverBg} ${theme.hoverText}
          transition-colors duration-300 cursor-pointer rounded-md shadow-lg ${theme.shadow}`}
    >
      {children}
    </button>
  )
}

export default Button
