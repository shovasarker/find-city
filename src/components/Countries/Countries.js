import React from 'react'
import { motion } from 'framer-motion'
import Country from '../Country/Country'
import Spinner from '../Spinner'

const Countries = ({ queryType, countries, isLoading }) => {
  return (
    <div className='countries'>
      <h1 className='text-center text-2xl font-bold my-10 capitalize'>
        Countries from {queryType}
      </h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-8'
        >
          {countries?.map((country, i) => {
            return <Country key={i} country={country} />
          })}
        </motion.div>
      )}
    </div>
  )
}

export default Countries
