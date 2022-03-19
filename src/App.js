import { Routes, Route } from 'react-router-dom'
import './App.css'
import AllCountries from './pages/AllCountries'
import Header from './components/Header/Header'
import SubRegionCountries from './pages/SubRegionCountries'
import RegionCountries from './pages/RegionCountries'

function App() {
  return (
    <div className='container px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-28'>
      <Header />
      <Routes>
        <Route path='/' element={<AllCountries />} />
        <Route path='/region/:regionName' element={<RegionCountries />} />
        <Route
          path='/subregion/:subRegionName'
          element={<SubRegionCountries />}
        />
      </Routes>
    </div>
  )
}

export default App
