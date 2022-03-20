import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import SortContext from '../../contexts/SortContext'
import { fetchCountries } from '../../Api'
import { compareFunction } from '../../Utilities'
import Countries from '../../components/Countries/Countries'

const SearchCountries = () => {
  const { countryName } = useParams()
  const [countries, setCountries] = useState([])
  const [sortedCountries, setSortedCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { sortBy, sortType } = useContext(SortContext)

  useEffect(() => {
    const controller = new AbortController()
    const getAllCountries = async (countryName) => {
      setIsLoading(true)
      const signal = controller.signal
      const data = await fetchCountries('name', countryName, signal)
      if (!Array.isArray(data)) {
        setIsLoading(false)
        console.log(data)
        return
      }
      setCountries(data)
      setIsLoading(false)
    }
    getAllCountries(countryName)
    return () => {
      controller.abort()
    }
  }, [countryName])
  useEffect(() => {
    const tempCountries = [...countries]
    tempCountries.sort(compareFunction(sortBy.toLowerCase(), sortType))
    setSortedCountries(tempCountries)
  }, [sortBy, countries, sortType])
  return (
    <Countries
      queryType={`Searched Result for "${countryName}"`}
      countries={sortedCountries}
      isLoading={isLoading}
    />
  )
}

export default SearchCountries
