import React from 'react'

const SingleDataDisplay = ({ title, item }) => {
  return (
    <p className='text-base font-normal text-center'>
      {title}:{' '}
      <span className='font-bold'>{item ? item : 'No Data Found'}</span>
    </p>
  )
}

export default SingleDataDisplay
