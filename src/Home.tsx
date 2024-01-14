import React from 'react'
import Navbar from './components/Navbar'
import ImageCarousel from './components/ImageCarousel'
import Bottombar from './components/Bottombar'
import { ProductList,ProductPage } from './components/stuff'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <ImageCarousel/>
        <ProductList/>
        <Bottombar/>
    </div>
  )
}

export default Home