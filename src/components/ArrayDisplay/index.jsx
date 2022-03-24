import React from 'react'
import { Link } from 'react-router-dom'
import FlexContainer from '../FlexContainer'

const ArrayDisplay = ({ title, items, asLink }) => {
  return (
    <FlexContainer title={title}>
      <div className='flex justify-start items-start gap-2 flex-wrap font-bold'>
        {items?.length > 0 ? (
          items?.map((item, i) => {
            return asLink ? (
              <Link
                to={`/country/${item}`}
                rel='noreferrer'
                className="after:content-[','] last-of-type:after:content-[''] underline underline-offset-2 capitalize"
                key={i}
              >
                {item}
              </Link>
            ) : (
              <span
                className="after:content-[','] last-of-type:after:content-['']"
                key={i}
              >
                {item}
              </span>
            )
          })
        ) : (
          <span>No Info Found</span>
        )}
      </div>
    </FlexContainer>
  )
}

export default ArrayDisplay
