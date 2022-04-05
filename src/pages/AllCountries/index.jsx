import React, { useContext, useEffect, useState } from 'react'
import Countries from '../../components/Countries/Countries'
import SortContext from '../../contexts/SortContext'
import useCountries from '../../hooks/useCountries'
import { compareFunction } from '../../Utilities'

const AllCountries = () => {
  const { countries, isLoading } = useCountries('all', '')
  const [sortedCountries, setSortedCountries] = useState([])
  const { sortBy, sortType } = useContext(SortContext)

  useEffect(() => {
    const tempCountries = [...countries]
    tempCountries.sort(compareFunction(sortBy.toLowerCase(), sortType))
    setSortedCountries(tempCountries)
  }, [sortBy, countries, sortType])
  return (
    <>
      <Countries
        queryType={'All over the world'}
        countries={sortedCountries}
        isLoading={isLoading}
      />
    </>
  )
}

export default AllCountries
