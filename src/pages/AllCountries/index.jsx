import React, { useContext, useEffect, useState } from 'react'
import { fetchCountries } from '../../Api'
import Countries from '../../components/Countries/Countries'
import SortContext from '../../contexts/SortContext'
import { compareFunction } from '../../Utilities'

const AllCountries = () => {
  const [countries, setCountries] = useState([])
  const [sortedCountries, setSortedCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { sortBy, sortType } = useContext(SortContext)

  useEffect(() => {
    const controller = new AbortController()
    const getAllCountries = async () => {
      setIsLoading(true)
      const signal = controller.signal
      const data = await fetchCountries('all', '', signal)
      if (!Array.isArray(data)) {
        setIsLoading(false)
        console.log(data)
        return
      }
      setCountries(data)
      setIsLoading(false)
    }
    getAllCountries()
    return () => {
      controller.abort()
    }
  }, [])
  useEffect(() => {
    const tempCountries = [...countries]
    tempCountries.sort(compareFunction(sortBy.toLowerCase(), sortType))
    setSortedCountries(tempCountries)
    console.log(tempCountries.map((country) => country.name.common))
  }, [sortBy, countries, sortType])
  return (
    <Countries
      queryType={'All over the world'}
      countries={sortedCountries}
      isLoading={isLoading}
    />
  )
}

export default AllCountries
