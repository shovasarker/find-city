import { useState, useEffect } from 'react'
import { compareFunction } from '../Utilities'

const useSort = (countries, sortBy, sortType) => {
  const [sortedCountries, setSortedCountries] = useState([])
  useEffect(() => {
    setSortedCountries(
      [...countries].sort(compareFunction(sortBy.toLowerCase(), sortType))
    )
  }, [sortBy, countries, sortType])

  return [sortedCountries, setSortedCountries]
}

export default useSort
