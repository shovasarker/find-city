import React from 'react'
import Sorts from '../Sorts'
import Filters from '../Filters'

const FilterAndSort = () => {
  return (
    <div className='flex flex-wrap gap-4 my-5'>
      <Filters />
      <Sorts />
    </div>
  )
}

export default FilterAndSort
