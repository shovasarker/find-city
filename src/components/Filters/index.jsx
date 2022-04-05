import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PathContext from '../../contexts/PathContext'
import ThemeContext from '../../contexts/ThemeContext'
import { FILTER_DATA, SUB_FILTER_DATA } from '../../data'
import { addPathtoStorage, getPathFromStorage } from '../../utilities/Utilities'
import Selector from '../Selector'

const Filters = () => {
  const { theme } = useContext(ThemeContext)
  const { queryType, setQueryType, queryText, setQueryText } =
    useContext(PathContext)
  const navigate = useNavigate()

  useEffect(() => {
    const path = getPathFromStorage()
    if (queryText || queryType) return
    if (Object?.keys(path)?.length > 0) {
      setQueryText(path?.queryText)
      setQueryType(path?.queryType)
    } else {
      setQueryType('All')
    }
  }, [queryText, queryType, setQueryText, setQueryType])

  useEffect(() => {
    const query = SUB_FILTER_DATA[queryType?.toLowerCase()]?.find(
      (item) => item === queryText
    )
    if (queryType !== 'All' && !query) return

    queryType === 'All'
      ? addPathtoStorage({ queryType, queryText: '' })
      : addPathtoStorage({ queryType, queryText })

    queryType === 'All'
      ? navigate('/')
      : navigate(`/${queryType.toLowerCase()}/${queryText.toLowerCase()}`)
  }, [queryText, queryType, navigate])

  return (
    <div className='flex gap-4 items-start'>
      <span className={`flex-shrink-0 font-bold ${theme.text}`}>
        Filter by :
      </span>
      <div className='flex flex-wrap gap-4'>
        <Selector
          item={queryType}
          setItem={setQueryType}
          selectorData={FILTER_DATA}
        />
        {queryType === 'Region' && (
          <Selector
            item={queryText}
            setItem={setQueryText}
            selectorData={SUB_FILTER_DATA.region}
          />
        )}
        {queryType === 'Subregion' && (
          <Selector
            item={queryText}
            setItem={setQueryText}
            selectorData={SUB_FILTER_DATA.subregion}
          />
        )}
      </div>
    </div>
  )
}

export default Filters
