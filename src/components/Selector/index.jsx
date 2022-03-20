import React, { useContext, useEffect } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

const Selector = ({ item, setItem, selectorData }) => {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    setItem(selectorData[0])
  }, [selectorData, setItem])
  return (
    <select
      className={`px-3 py-2 outline-none focus:outline-none rounded-sm  shadow-lg cursor-pointer ${theme.bg} ${theme.text}`}
      value={item}
      onChange={(e) => setItem(e.target.value)}
    >
      {selectorData?.map((data, i) => {
        return (
          <option key={i} value={data}>
            {data}
          </option>
        )
      })}
    </select>
  )
}

export default Selector
