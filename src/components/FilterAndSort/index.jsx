import React from 'react'
import Sorts from '../Sorts'
import Filters from '../Filters'
import { useLocation } from 'react-router-dom'

const FilterAndSort = () => {
  const { pathname } = useLocation()
  return (
    <div className='flex flex-wrap gap-4 my-5'>
      {!pathname.includes('/search/') && <Filters />}
      <Sorts />
    </div>
  )
}

export default FilterAndSort
