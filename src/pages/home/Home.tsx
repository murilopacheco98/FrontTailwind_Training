import React from 'react'
import Footer from '../../components/footer/Footer'
import NavbarFull from '../../components/navbar/NavbarFull'
import Slider from './homeContent/Slider'
import Slider2 from './homeContent/Slider2'

const home = () => {
  return (
    <div className='p-0 m-0 w-[100%] h-auto'>
      <NavbarFull />
      <Slider />
      <Slider2 />
      <Footer />
    </div>
  )
}

export default home
