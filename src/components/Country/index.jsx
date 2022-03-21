import React from 'react'
import SingleDataDisplay from '../SingleDataDisplay'
import Spinner from '../Spinner'

const Country = ({ country, isLoading }) => {
  const {
    flags,
    name,
    capital,
    region,
    subregion,
    continents,
    area,
    population,
  } = country
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-5'>
          <div className='w-full lg:w-2/5'>
            <img
              src={flags && flags?.svg}
              alt={name?.common}
              className='w-full'
            />
          </div>
          <div className='space-y-3'>
            <h3 className='text-3xl font-bold pb-1'>{name?.common}</h3>
            <SingleDataDisplay title={'Official Name'} item={name?.official} />
            <SingleDataDisplay title={'Capital'} item={capital && capital[0]} />
            <SingleDataDisplay
              title={'Continent'}
              item={continents && continents[0]}
            />
            <SingleDataDisplay title={'Region'} item={region} />
            <SingleDataDisplay title={'Sub-region'} item={subregion} />
            <SingleDataDisplay
              title={'Area'}
              item={`${area?.toLocaleString('en')} Km²`}
            />
            <SingleDataDisplay
              title={'Population'}
              item={population?.toLocaleString('en')}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Country
