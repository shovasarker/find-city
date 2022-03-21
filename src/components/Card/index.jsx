import React from 'react'
import { useNavigate } from 'react-router-dom'
import SingleDataDisplay from '../SingleDataDisplay'

const Card = ({ country }) => {
  const navigate = useNavigate()
  const { name, capital, population, area, flags } = country
  return (
    <div className='w-full'>
      <div
        onClick={() => navigate(`/country/${name?.common}`)}
        className='img-container relative rounded-2xl cursor-pointer'
      >
        <img
          className='w-full aspect-[4/2.5] object-cover rounded-2xl shadow-2xl'
          src={flags?.svg}
          alt={name?.common}
        />
        <div className='details absolute left-0 right-0 top-0 bottom-0 bg-white/70 text-gray-600 rounded-2xl flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 space-y-2 text-center'>
          <SingleDataDisplay title={'Capital'} item={capital && capital[0]} />
          <SingleDataDisplay
            title={'Population'}
            item={population?.toLocaleString('en')}
          />
          <SingleDataDisplay title={'Area'} item={area?.toLocaleString('en')} />
        </div>
      </div>
      <h3 className='text-base font-bold text-center mt-2'>{name?.common}</h3>
    </div>
  )
}

export default Card
