import React from 'react'

const FlexContainer = ({ title, children }) => {
  return (
    <div className='flex justify-start items-start gap-2'>
      <p className='flex-shrink-0'>{title}:</p>
      {children}
    </div>
  )
}

export default FlexContainer
