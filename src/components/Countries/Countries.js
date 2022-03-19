import React from 'react'
import Country from '../Country/Country'
import Spinner from '../Spinner'

const Countries = ({ queryType, countries, isLoading, error }) => {
  return (
    <div className='countries'>
      <h1 className='text-center text-2xl font-bold my-5 capitalize'>
        Countries from {queryType}
      </h1>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <div className='text-red-500 text-xl text-center font-bold'>
          {error}
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-8'>
          {countries?.map((country, i) => {
            return <Country key={i} country={country} />
          })}
        </div>
      )}
    </div>
  )
}

export default Countries
