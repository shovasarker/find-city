import React, { useContext } from 'react'
import Countries from '../../components/Countries/Countries'
import SortContext from '../../contexts/SortContext'
import useCountries from '../../hooks/useCountries'
import useSort from '../../hooks/useSort'

const AllCountries = () => {
  const { sortBy, sortType } = useContext(SortContext)
  const { countries, isLoading } = useCountries('all', '')
  const [sortedCountries] = useSort(countries, sortBy, sortType)
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
