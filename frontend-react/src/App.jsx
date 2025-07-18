import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Register from './components/Register'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './components/Login'



function App() {
 

  return (
    <>
 <BrowserRouter>
 <Header />
  <Routes>
<Route path='/' element={<Main />}/>
<Route path='/register' element={<Register />}/>
<Route path='/login' element = {<Login />}/>
  </Routes>
   <Footer />
 
 </BrowserRouter>
    
    
    
    </>
  )
}

export default App
