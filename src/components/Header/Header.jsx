import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()
  return (
    <nav>
      <div className='logo-container'>
        <h1 className='logo'>Find Countries</h1>
        <button onClick={() => navigate('region/africa')}>region</button>
      </div>
    </nav>
  )
}

export default Header
