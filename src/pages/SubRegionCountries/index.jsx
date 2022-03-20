import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCountries } from '../../Api'
import Countries from '../../components/Countries/Countries'
import SortContext from '../../contexts/SortContext'
import { compareFunction } from '../../Utilities'

const SubRegionCountries = () => {
  const [countries, setCountries] = useState([])
  const [sortedCountries, setSortedCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { subRegionName } = useParams()
  const { sortBy, sortType } = useContext(SortContext)

  useEffect(() => {
    const controller = new AbortController()
    const getAllCountries = async (subRegionName) => {
      setIsLoading(true)
      const signal = controller.signal
      const data = await fetchCountries('subregion', subRegionName, signal)
      if (!Array.isArray(data)) {
        setIsLoading(false)
        console.log(data)
        return
      }
      setCountries(data)
      setIsLoading(false)
    }
    getAllCountries(subRegionName)
    return () => {
      controller.abort()
    }
  }, [subRegionName])

  useEffect(() => {
    const tempCountries = [...countries]
    tempCountries.sort(compareFunction(sortBy.toLowerCase(), sortType))
    setSortedCountries(tempCountries)
  }, [sortBy, sortType, countries])

  return (
    <Countries
      queryType={`Sub-region "${subRegionName}"`}
      countries={sortedCountries}
      isLoading={isLoading}
    />
  )
}

export default SubRegionCountries
