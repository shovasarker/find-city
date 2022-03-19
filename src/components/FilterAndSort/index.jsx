import React, { useEffect, useState } from 'react'
import { FILTER_DATA, SUB_FILTER_DATA } from '../../data'

const FilterAndSort = () => {
  const [queryType, setQueyType] = useState('all')
  const [queryText, setQueryText] = useState('')
  const [queryTypeSelectorData, setQueryTypeSelectorData] =
    useState(FILTER_DATA)
  const [queryTextSelectorData, setQueryTextSelectorData] = useState([])
  useEffect(() => {
    if (queryType === 'all') return
    setQueryTextSelectorData(SUB_FILTER_DATA[queryType])
  }, [queryType])
  return <div></div>
}

export default FilterAndSort
