import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FILTER_DATA, SUB_FILTER_DATA } from '../../data'
import Selector from '../Selector'

const FilterAndSort = () => {
  const navigate = useNavigate()
  const [queryType, setQueryType] = useState('All')
  const [queryText, setQueryText] = useState('')
  const [queryTextSelectorData, setQueryTextSelectorData] = useState([])
  useEffect(() => {
    if (queryType === 'All') return
    setQueryTextSelectorData(SUB_FILTER_DATA[queryType?.toLowerCase()])
  }, [queryType])

  useEffect(() => {
    const query = SUB_FILTER_DATA[queryType?.toLowerCase()]?.find(
      (item) => item === queryText
    )
    if (queryType !== 'All' && !query) return

    queryType === 'All'
      ? navigate('/')
      : navigate(`/${queryType.toLowerCase()}/${queryText.toLowerCase()}`)
  }, [queryText, queryType, navigate])

  return (
    <div className='flex flex-wrap gap-4 my-5'>
      <div className='flex gap-4 items-start'>
        <span className='flex-shrink-0 font-bold text-gray-600'>
          Filter by:
        </span>
        <div className='flex flex-wrap gap-4'>
          <Selector
            item={queryType}
            setItem={setQueryType}
            selectorData={FILTER_DATA}
          />
          {queryType !== 'All' && (
            <Selector
              item={queryText}
              setItem={setQueryText}
              selectorData={queryTextSelectorData}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default FilterAndSort
