import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import ProductTypes from './ProductTypes/ProductTypes'
import Loginpage from './Login/Loginpage'
import SignUp from './SignUp/SignUp'
import Checkbox from './Cart/Checkbox'
import PhonesData from './Cart/PhonesData'
import DotLoader from "react-spinners/DotLoader";
import './App.css'
import { CartProvider } from 'react-use-cart'
import Appliances from './Appliances/Appliances'
import Electronics from './Electronics/Electronics'
import Grocery from './Grocery/Grocery'
import HomeDecor from './HomeDecor/HomeDecor'
import TodayDeals from './TodayDeals/TodayDeals'
import Fashion from './Fashion/Fashion'
import Prime from './Prime/Prime'
const App = () => {
  const [loading, setLoading] = useState([false]);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <CartProvider>
      <BrowserRouter>
        {loading ?
          <div className="loader">
            <DotLoader color={'#eec662'} size={90} speedMultiplier={1} />
          </div> :
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Loginpage />} />
            <Route path='/MobilePhones' element={<ProductTypes />} />
            <Route path='/signin' element={<Loginpage />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/Checkbox' element={<Checkbox />} />
            <Route path='/phones' element={<PhonesData />} />
            <Route path='/Appliances' element={<Appliances />} />
            <Route path='/Electronics' element={<Electronics />} />
            <Route path='/Grocery' element={<Grocery />} />
            <Route path='/HomeDecor' element={<HomeDecor />} />
            <Route path='/TodayDeals' element={<TodayDeals />} />
            <Route path='/Fashion' element={<Fashion />} />
            <Route path='/Prime' element={<Prime />} />
          </Routes>
        }
      </BrowserRouter>
    </CartProvider>
  )
}

export default App