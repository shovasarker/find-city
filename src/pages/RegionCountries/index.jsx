import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Countries from '../../components/Countries/Countries'
import SortContext from '../../contexts/SortContext'
import useCountries from '../../hooks/useCountries'
import { compareFunction } from '../../Utilities'

const RegionCountries = () => {
  const { regionName } = useParams()
  const { countries, isLoading } = useCountries('region', regionName)
  const [sortedCountries, setSortedCountries] = useState([])
  const { sortBy, sortType } = useContext(SortContext)

  useEffect(() => {
    const tempCountries = [...countries]
    tempCountries.sort(compareFunction(sortBy.toLowerCase(), sortType))
    setSortedCountries(tempCountries)
  }, [sortBy, sortType, countries])

  return (
    <Countries
      queryType={`Region "${regionName}"`}
      countries={sortedCountries}
      isLoading={isLoading}
    />
  )
}

export default RegionCountries
