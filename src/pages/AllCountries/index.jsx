import React, { useEffect, useState } from 'react'
import { fetchCountries } from '../../Api'
import Countries from '../../components/Countries/Countries'

const AllCountries = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const getAllCountries = async () => {
      setIsLoading(true)
      const signal = controller.signal
      const data = await fetchCountries('all', '', signal)
      if (!Array.isArray(data)) {
        setIsLoading(false)
        console.log(data)
        return
      }
      setCountries(data)
      setIsLoading(false)
    }
    getAllCountries()
    return () => {
      controller.abort()
    }
  }, [])
  return (
    <Countries
      queryType={'All over the world'}
      countries={countries}
      isLoading={isLoading}
    />
  )
}

export default AllCountries
