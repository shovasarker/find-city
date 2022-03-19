import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCountries } from '../../Api'
import Countries from '../../components/Countries/Countries'

const RegionCountries = () => {
  const [countries, setCountries] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { regionName } = useParams()
  useEffect(() => {
    const controller = new AbortController()
    const getAllCountries = async (regionName) => {
      setIsLoading(true)
      const signal = controller.signal
      const data = await fetchCountries('region', regionName, signal)
      if (!Array.isArray(data)) {
        setError(data)
        setIsLoading(false)
        console.log(data)
        return
      }
      setError('')
      setCountries(data)
      setIsLoading(false)
    }
    getAllCountries(regionName)
    return () => {
      controller.abort()
    }
  }, [regionName])
  return (
    <Countries
      queryType={`Region "${regionName}"`}
      countries={countries}
      isLoading={isLoading}
      error={error}
    />
  )
}

export default RegionCountries
