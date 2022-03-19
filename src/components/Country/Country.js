import React from 'react'
import './Country.css'

const Country = ({ country }) => {
  return (
    <div className='country'>
      <div className='img-container'>
        <img src={country?.flags?.svg} alt={country?.name?.common} />
        <div className='details'>
          <p>
            Capital:{' '}
            <span>
              {country?.capital ? country?.capital[0] : 'No Capital Found'}
            </span>
          </p>
          <p>
            Population: <span>{country?.population?.toLocaleString('en')}</span>
          </p>
          <p>
            Area: <span>{country?.area?.toLocaleString('en')}</span>
          </p>
        </div>
      </div>
      <h3>{country?.name?.common}</h3>
    </div>
  )
}

export default Country
