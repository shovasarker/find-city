import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import PathContext from '../../contexts/PathContext'
import { addPathtoStorage } from '../../utilities/Utilities'

const BreadCrumb = () => {
  const { countryName } = useParams()
  const { setQueryType, setQueryText } = useContext(PathContext)
  return (
    <div className='flex justify-start items-center gap-2 mb-6'>
      <Link
        to='/'
        onClick={() => {
          setQueryType('All')
          setQueryText('')
          addPathtoStorage({ queryType: 'All', queryText: '' })
        }}
        className='hover:text-green-400 hover:underline underline-offset-2 transition-all duration-300'
      >
        Home
      </Link>
      /<span className='font-bold'>{countryName}</span>
    </div>
  )
}

export default BreadCrumb
