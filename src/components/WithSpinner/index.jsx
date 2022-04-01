import React from 'react'
import Spinner from '../Spinner'

const WithSpinner = ({ isLoading, children }) => {
  return isLoading ? <Spinner /> : <div>{children}</div>
}

export default WithSpinner
