import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import AllCountries from './pages/AllCountries'
import Header from './components/Header/Header'
import SubRegionCountries from './pages/SubRegionCountries'
import RegionCountries from './pages/RegionCountries'
import FilterAndSort from './components/FilterAndSort'
import { AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import ThemeContext from './contexts/ThemeContext'
import SearchBar from './components/SearchBar'
import SearchCountries from './pages/SearchCountries'
import SingleCountry from './pages/SingleCountry'

function App() {
  const { theme } = useContext(ThemeContext)
  const { pathname } = useLocation()
  return (
    <div className={`min-h-screen h-full ${theme.bg} ${theme.text}`}>
      <div
        className={`container px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-28 pb-10`}
      >
        <Header />
        {!pathname.includes('/country/') && (
          <>
            <SearchBar />
            <FilterAndSort />
          </>
        )}

        <AnimatePresence>
          <Routes>
            <Route path='/' element={<AllCountries />} />
            <Route path='/search/:countryName' element={<SearchCountries />} />
            <Route path='/region/:regionName' element={<RegionCountries />} />
            <Route
              path='/subregion/:subRegionName'
              element={<SubRegionCountries />}
            />
            <Route path='/country/:countryName' element={<SingleCountry />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
