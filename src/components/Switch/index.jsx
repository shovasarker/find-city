import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

const Switch = ({ enabled, setEnabled, id }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <button
      id={id && id}
      role='switch'
      aria-checked='true'
      aria-labelledby='switch'
      tabIndex='0'
      className={`w-10 h-5 px-0.5 ${theme.inverseBg} rounded-full flex items-center relative transition-colors duration-500`}
      onClick={() => setEnabled(!enabled)}
    >
      <span
        className={`w-4 h-4 rounded-full transition-all duration-500 ${
          enabled ? 'translate-x-5 bg-green-500' : 'translate-x-0 ' + theme.bg
        }
        }`}
      ></span>
      <span className='sr-only'>theme changer</span>
    </button>
  )
}

export default Switch
