import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import SortContext from '../../contexts/SortContext'
import { SORT_DATA } from '../../data'
import Selector from '../Selector'
import Switch from '../Switch'

const Sorts = () => {
  const { sortBy, setSortBy, sortType, setSortType } = useContext(SortContext)
  const { theme } = useContext(ThemeContext)
  return (
    <div className='flex gap-4 items-center flex-wrap'>
      <div className='flex items-center justify-start gap-4'>
        <span className={`flex-shrink-0 font-bold ${theme.text}`}>
          Sort by :
        </span>
        <Selector item={sortBy} setItem={setSortBy} selectorData={SORT_DATA} />
      </div>
      <div className='flex items-center justify-start gap-4'>
        <label className={`${theme.text} font-bold`} htmlFor='sort-type'>
          {sortType ? 'Asec :' : 'Desc :'}
        </label>
        <Switch id='sort-type' enabled={sortType} setEnabled={setSortType} />
      </div>
    </div>
  )
}

export default Sorts
