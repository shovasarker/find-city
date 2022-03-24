import React from 'react'
import { Link, useParams } from 'react-router-dom'

const BreadCrumb = () => {
  const { countryName } = useParams()
  return (
    <div className='flex justify-start items-center gap-2 mb-6'>
      <Link
        to='/'
        className='hover:text-green-400 hover:underline underline-offset-2 transition-all duration-300'
      >
        Home
      </Link>
      /<span className='font-bold'>{countryName}</span>
    </div>
  )
}

export default BreadCrumb
