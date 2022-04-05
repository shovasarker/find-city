import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import SortContext from '../../contexts/SortContext'
import Countries from '../../components/Countries/Countries'
import useCountries from '../../hooks/useCountries'
import useSort from '../../hooks/useSort'

const SearchCountries = () => {
  const { countryName } = useParams()
  const { sortBy, sortType } = useContext(SortContext)
  const { countries, isLoading } = useCountries('name', countryName)
  const [sortedCountries] = useSort(countries, sortBy, sortType)

  return (
    <Countries
      queryType={`Searched Result for "${countryName}"`}
      countries={sortedCountries}
      isLoading={isLoading}
    />
  )
}

export default SearchCountries
