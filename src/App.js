import React, { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import MainLoanding from './components/MainLoanding'
import MyFirstUseStateComponent from './components/MyFirstUseStateComponent'
import CheckSyntheticEvent from './components/CheckSyntheticEvent'
import FormValidation from './components/FormValidation'
import {Routes,Route} from "react-router-dom";
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
const App = () => {
  const [cart,setCart]=useState([]);
  const [showCart,setShowCart]=useState(false);
  return (
    <div>
         {/* <MyFirstUseStateComponent/>
         <CheckSyntheticEvent/> */}
          <Navbar
          cart ={cart}
          showCart={showCart}
          setShowCart={setShowCart}
          />
          {showCart && <div 
            style={{
              padding:"20px",
              backgroundColor:"lightgray"
            }}
          >
              <h2>Cart Items</h2>
              {cart.length===0 ? (
                <h3>Cart Empty</h3>
              ):(
                cart.map((item)=>(
                  <div
                    key={item.id}
                    style={{
                      border:"1px solid black",
                      padding:"10px",
                      marginBottom:"10px"
                    }}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                ))
              )}
            </div>}
         <Routes>
          
          <Route path='/' element={<MainLoanding/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
            
         </Routes>
         
          {/* <MainLoanding cart={cart} setCart={setCart}/> */}
  </div>
  )
}

export default App