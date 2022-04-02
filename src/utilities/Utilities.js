export const getPathFromStorage = () => {
  const storedPath = sessionStorage.getItem('path')
  return storedPath ? JSON.parse(storedPath) : {}
}

export const addPathtoStorage = (path) => {
  sessionStorage.setItem('path', JSON.stringify(path))
}

export const getSortDataFromStorage = () => {
  const storedSortData = sessionStorage.getItem('sort-data')
  return storedSortData ? JSON.parse(storedSortData) : {}
}

export const addSortDatatoStorage = (sortData) => {
  sessionStorage.setItem('sort-data', JSON.stringify(sortData))
}

export const getThemeFromStorage = () => {
  const storedTheme = sessionStorage.getItem('theme')
  return storedTheme ? JSON.parse(storedTheme) : null
}

export const addThemetoStorage = (theme) => {
  sessionStorage.setItem('theme', JSON.stringify(theme))
}
