import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import RestaurantLayout from './components/RestaurantLayout'
import Restaurants from './components/Restaurants'
import RestaurantsDetails from './components/RestaurantsDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="restaurants" element={<RestaurantLayout />}>
              <Route index element={<Restaurants />} />
              <Route path="details/:id" element={<RestaurantsDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
