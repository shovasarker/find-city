import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCountries } from '../../Api'
import Countries from '../../components/Countries/Countries'
import SortContext from '../../contexts/SortContext'
import { compareFunction } from '../../Utilities'

const RegionCountries = () => {
  const [countries, setCountries] = useState([])
  const [sortedCountries, setSortedCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { regionName } = useParams()
  const { sortBy, sortType } = useContext(SortContext)

  useEffect(() => {
    const controller = new AbortController()
    const getAllCountries = async (regionName) => {
      setIsLoading(true)
      const signal = controller.signal
      const data = await fetchCountries('region', regionName, signal)
      if (!Array.isArray(data)) {
        setIsLoading(false)
        console.log(data)
        return
      }
      setCountries(data)
      setIsLoading(false)
    }
    getAllCountries(regionName)
    return () => {
      controller.abort()
    }
  }, [regionName])

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
