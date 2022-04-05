import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Countries from '../../components/Countries/Countries'
import SortContext from '../../contexts/SortContext'
import useCountries from '../../hooks/useCountries'
import useSort from '../../hooks/useSort'

const SubRegionCountries = () => {
  const { subRegionName } = useParams()
  const { sortBy, sortType } = useContext(SortContext)
  const { countries, isLoading } = useCountries('subregion', subRegionName)
  const [sortedCountries] = useSort(countries, sortBy, sortType)

  return (
    <Countries
      queryType={`Sub-region "${subRegionName}"`}
      countries={sortedCountries}
      isLoading={isLoading}
    />
  )
}

export default SubRegionCountries
