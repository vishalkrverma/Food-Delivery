import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Cart from './components/pages/Cart/Cart'
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder'
import Home from './components/pages/Home/Home'
import Footer from './components/footer/Footer'
import Login from './components/Login/Login'

const App = () => {

   const [showLogin,setShowLogin]=useState(false);

  return (
    <>
    
    {showLogin?<Login  setShowLogin={setShowLogin}/>:<></>}
    
    <div>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
    </Routes>
    </div>
    <Footer/>
    </>

  )
}

export default App