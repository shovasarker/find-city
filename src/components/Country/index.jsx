import React, { useEffect, useState } from 'react'
import { fetchCountries } from '../../Api'
import ArrayDisplay from '../ArrayDisplay'
import ObjectDisplay from '../ObjectDisplay'
import SingleDataDisplay from '../SingleDataDisplay'
import Spinner from '../Spinner'

const Country = ({ country, isLoading }) => {
  const [borderCountries, setBorderCountries] = useState([])
  const {
    flags,
    name,
    capital,
    region,
    subregion,
    continents,
    area,
    population,
    timezones,
    status,
    independent,
    unMember,
    startOfWeek,
    altSpellings,
    languages,
    maps,
    borders,
    currencies,
  } = country

  useEffect(() => {
    const getBordersName = async () => {
      const bordersName = await borders?.map(async (border) => {
        const data = await fetchCountries('alpha', border)
        return data[0].name.common
      })
      setBorderCountries(await Promise.all(bordersName))
    }
    getBordersName()
  }, [borders])

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-5'>
          <div className='w-full lg:w-1/2 order-first lg:order-last'>
            <img
              src={flags && flags?.svg}
              alt={name?.common}
              className='w-full'
            />
          </div>
          <div className='space-y-3'>
            <h3 className='text-3xl font-bold pb-1'>{name?.common}</h3>
            <SingleDataDisplay title={'Official Name'} item={name?.official} />
            <ArrayDisplay title={'Aternate Names'} items={altSpellings} />

            <SingleDataDisplay title={'Capital'} item={capital && capital[0]} />

            <ObjectDisplay title={'Languages'} item={languages} />
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

            <ObjectDisplay title={'Currencies'} item={currencies} isCurrency />

            <ObjectDisplay title={'Maps'} item={maps} asLink />

            <ArrayDisplay
              title={'Borders With'}
              items={borderCountries}
              asLink
            />

            <SingleDataDisplay
              title={'Timezone'}
              item={timezones.length > 0 && timezones[0]}
            />
            <SingleDataDisplay title={'Status'} item={status} />
            <SingleDataDisplay
              title={'Independent'}
              item={JSON.stringify(independent)}
            />
            <SingleDataDisplay
              title={'Un member'}
              item={JSON.stringify(unMember)}
            />
            <SingleDataDisplay title={'Start of Week'} item={startOfWeek} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Country
