import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Countries from '../../components/Countries/Countries'
import SortContext from '../../contexts/SortContext'
import useCountries from '../../hooks/useCountries'
import useSort from '../../hooks/useSort'

const RegionCountries = () => {
  const { regionName } = useParams()
  const { sortBy, sortType } = useContext(SortContext)
  const { countries, isLoading } = useCountries('region', regionName)
  const [sortedCountries] = useSort(countries, sortBy, sortType)

  return (
    <Countries
      queryType={`Region "${regionName}"`}
      countries={sortedCountries}
      isLoading={isLoading}
    />
  )
}

export default RegionCountries
