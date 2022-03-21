import React from 'react'

const SingleDataDisplay = ({ title, item }) => {
  return (
    <p className='text-base font-normal'>
      {title}:
      <span className='font-bold ml-2'>{item ? item : 'No Data Found'}</span>
    </p>
  )
}

export default SingleDataDisplay
