import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCountries } from '../../Api'
import Country from '../../components/Country'

const SingleCountry = () => {
  const { countryName } = useParams()
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const getCountries = async (countryName) => {
      setIsLoading(true)
      const signal = controller.signal
      const countries = await fetchCountries('name', countryName, signal)
      if (!Array.isArray(countries)) {
        setIsLoading(false)
        return
      }
      setCountries(countries)
      setIsLoading(false)
    }
    getCountries(countryName)

    return () => {
      controller.abort()
    }
  }, [countryName])
  return (
    <div>
      {countries?.map((country, i) => {
        return <Country key={i} country={country} isLoading={isLoading} />
      })}
    </div>
  )
}

export default SingleCountry
