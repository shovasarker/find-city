import React, { useEffect } from 'react'

const Selector = ({ item, setItem, selectorData }) => {
  useEffect(() => {
    setItem(selectorData[0])
  }, [selectorData, setItem])
  return (
    <select
      className='px-3 py-2 text-gray-600 outline-none focus:outline-none rounded-sm bg-transparent shadow-lg cursor-pointer'
      value={item}
      onChange={(e) => setItem(e.target.value)}
    >
      {selectorData?.map((data, i) => {
        return (
          <option key={i} value={data}>
            {data}
          </option>
        )
      })}
    </select>
  )
}

export default Selector
