import { useEffect, useState } from 'react'
import { fetchCountries } from '../Api'

const useCountries = (queryType, queryText) => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const getCountries = async () => {
      setIsLoading(true)
      const signal = controller.signal
      const data = await fetchCountries(queryType, queryText, signal)
      if (!Array.isArray(data)) {
        setIsLoading(false)
        console.log(data)
        return
      }
      setCountries(data)
      setIsLoading(false)
    }
    getCountries()
    return () => {
      controller.abort()
    }
  }, [queryType, queryText])

  return { countries, isLoading, setCountries, setIsLoading }
}

export default useCountries
