import React, { useContext } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import ThemeContext from '../../contexts/ThemeContext.js'
import Button from '../Button/index.jsx'
import Dot from '../Dot/index.jsx'

const Pagination = ({ pageNumber, setPageNumber, numberOfPages }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className='w-full flex justify-end items-center gap-3 text-base font-bold my-10'>
      {pageNumber > 1 && (
        <Button handleClick={() => setPageNumber(--pageNumber)}>
          <BsChevronLeft />
          <span>Prev</span>
        </Button>
      )}
      {pageNumber > 2 && (
        <>
          <Button handleClick={() => setPageNumber(1)}>
            <span>{1}</span>
          </Button>
          <Dot />
        </>
      )}
      <p
        className={` px-3 py-1.5 rounded-md ${theme.inverseBg} 
          ${theme.inverseText} border ${theme.inverseBorder}`}
      >
        {pageNumber}
      </p>
      {pageNumber < numberOfPages - 1 && (
        <>
          <Dot />
          <Button handleClick={() => setPageNumber(numberOfPages)}>
            <span>{numberOfPages}</span>
          </Button>
        </>
      )}
      {pageNumber < numberOfPages && (
        <Button handleClick={() => setPageNumber(++pageNumber)}>
          <span>Next</span>
          <BsChevronRight />
        </Button>
      )}
    </div>
  )
}

export default Pagination
