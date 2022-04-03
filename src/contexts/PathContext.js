import { createContext, useState } from 'react'

const PathContext = createContext()

export const PathContextProivider = ({ children }) => {
  const [queryType, setQueryType] = useState('')
  const [queryText, setQueryText] = useState('')
  return (
    <PathContext.Provider
      value={{ queryType, setQueryType, queryText, setQueryText }}
    >
      {children}
    </PathContext.Provider>
  )
}

export default PathContext
