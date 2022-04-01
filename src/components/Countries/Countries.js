import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Card from '../Card'
import Pagination from '../Pagination'
import WithSpinner from '../WithSpinner'

const Countries = ({ queryType, countries, isLoading }) => {
  const [pageNumber, setPageNumber] = useState(1)
  useEffect(() => {
    setPageNumber(1)
  }, [countries])
  return (
    <div className='countries'>
      <h1 className='text-center text-2xl font-bold my-10 capitalize'>
        Countries from {queryType}
      </h1>
      <WithSpinner isLoading={isLoading}>
        <>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-8'
          >
            {countries
              ?.filter(
                (country, i) =>
                  i >= (pageNumber - 1) * 20 && i < pageNumber * 20
              )
              ?.map((country, i) => {
                return <Card key={i} country={country} />
              })}
          </motion.div>
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            numberOfPages={Math.ceil(countries.length / 20)}
          />
        </>
      </WithSpinner>
    </div>
  )
}

export default Countries
