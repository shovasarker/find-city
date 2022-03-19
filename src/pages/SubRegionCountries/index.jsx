import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCountries } from '../../Api'
import Countries from '../../components/Countries/Countries'

const SubRegionCountries = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { subRegionName } = useParams()
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
  return (
    <Countries
      queryType={`Sub-region "${subRegionName}"`}
      countries={countries}
      isLoading={isLoading}
    />
  )
}

export default SubRegionCountries
