import { createContext, useState } from 'react'

const SortContext = createContext()

export const SortContextProivider = ({ children }) => {
  const [sortBy, setSortBy] = useState('')
  const [sortType, setSortType] = useState(true)
  return (
    <SortContext.Provider value={{ sortBy, setSortBy, sortType, setSortType }}>
      {children}
    </SortContext.Provider>
  )
}

export default SortContext
