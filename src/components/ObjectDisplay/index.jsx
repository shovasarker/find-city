import React from 'react'
import FlexContainer from '../FlexContainer'
const ObjectDisplay = ({ title, item, asLink, isCurrency }) => {
  return (
    <FlexContainer title={title}>
      <div className='flex justify-start items-start gap-2 flex-wrap font-bold'>
        {item ? (
          Object.entries(item)?.map(([key, value]) => {
            return asLink ? (
              <a
                target={'_blank'}
                href={value}
                rel='noreferrer'
                className="after:content-[','] last-of-type:after:content-[''] underline underline-offset-2"
                key={key}
              >
                {key}
              </a>
            ) : (
              <span
                className="after:content-[','] last-of-type:after:content-['']"
                key={key}
              >
                {isCurrency
                  ? `${value?.name}(${value?.symbol})(${key})`
                  : value}
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

export default ObjectDisplay
