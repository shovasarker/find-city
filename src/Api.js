const BASE_URL = 'https://restcountries.com/v3.1'

export const getFecthUrl = (queryType, queryText) => {
  return `${BASE_URL}/${queryType}/${queryType === 'all' ? '' : queryText}`
}

export const getQueryText = (queryText) => {
  return encodeURI(queryText)
}

export const fetchCountries = async (
  queryType = 'all',
  queryText = '',
  signal
) => {
  const fetchUrl = getFecthUrl(queryType, getQueryText(queryText))
  // console.log(fetchUrl)
  try {
    const res = await fetch(fetchUrl, signal)
    const data = await res.json()
    if (!Array.isArray(data)) {
      throw data
    }
    return data
  } catch (error) {
    return error.message
  }
}
