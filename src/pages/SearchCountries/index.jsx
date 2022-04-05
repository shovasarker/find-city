import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import SortContext from '../../contexts/SortContext'
import { compareFunction } from '../../Utilities'
import Countries from '../../components/Countries/Countries'
import useCountries from '../../hooks/useCountries'

const SearchCountries = () => {
  const { countryName } = useParams()
  const { countries, isLoading } = useCountries('name', countryName)
  const [sortedCountries, setSortedCountries] = useState([])
  const { sortBy, sortType } = useContext(SortContext)

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
