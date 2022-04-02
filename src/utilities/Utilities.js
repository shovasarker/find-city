export const getPathFromStorage = () => {
  const storedPath = sessionStorage.getItem('path')
  return storedPath ? JSON.parse(storedPath) : {}
}

export const addPathtoStorage = (path) => {
  sessionStorage.setItem('path', JSON.stringify(path))
}

export const getSortDataFromStorage = () => {
  const storedPath = sessionStorage.getItem('sort-data')
  return storedPath ? JSON.parse(storedPath) : {}
}

export const addSortDatatoStorage = (sortData) => {
  sessionStorage.setItem('sort-data', JSON.stringify(sortData))
}
