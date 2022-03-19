import React, { useEffect, useState } from 'react'
import Country from '../Country/Country'
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error.message))
  }, [])
  return (
    <div className='countries'>
      <h1>All Countries</h1>
      <div className='grid'>
        {countries?.map((country, i) => {
          return <Country key={i} country={country} />
        })}
      </div>
    </div>
  )
}

export default Countries
