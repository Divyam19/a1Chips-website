import React from 'react'
import Navbar from './components/Navbar'
import ImageCarousel from './components/ImageCarousel'
import Bottombar from './components/Bottombar'
import Home from './Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MyAccount from './MyAccount'
import Branches from './Branches'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/myaccount" element={<MyAccount/>}/>
          <Route path='/branches' element={<Branches/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App