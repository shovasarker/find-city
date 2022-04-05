import React, { useContext, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext'

const SearchBar = () => {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState('')

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!searchText) return
    navigate(`search/${searchText}`)
    setSearchText('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto ${theme.inverseBg} mb-10 border ${theme.border} rounded-md overflow-hidden flex items-center justify-start text-base`}
    >
      <input
        type='text'
        placeholder='Enter the Country Name'
        value={searchText}
        onChange={handleChange}
        className={`w-4/5 px-3 py-2 ${theme.inverseBg} ${theme.inverseText} rounded-l-md font-bold outline-none focus:outline-none`}
      />
      <button
        type='submit'
        className={`w-1/5 px-3 py-2 ${theme.bg} ${theme.text} rounded-r-md font-bold font-base flex justify-center items-center ${theme.hoverBg} ${theme.hoverText} border ${theme.inverseBorder} transition-colors duration-300`}
      >
        <BiSearch className='md:hidden h-6 w-6' />
        <span className='hidden md:inline-block'>Search</span>
      </button>
    </form>
  )
}

export default SearchBar
