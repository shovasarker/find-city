export const getPathFromStorage = () => {
  const storedPath = sessionStorage.getItem('path')
  return storedPath ? JSON.parse(storedPath) : {}
}

export const addPathtoStorage = (path) => {
  sessionStorage.setItem('path', JSON.stringify(path))
}
