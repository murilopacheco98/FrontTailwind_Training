import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction: string) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4)
    } else {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0)
    }
  }

  return (
    <>
    <Carousel variant="dark" className="mt-[8px] h-auto">
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100"
          src="https://palmacia.ce.gov.br/link/link107.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100"
          src="https://palmacia.ce.gov.br/link/link104.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100"
          src="https://palmacia.ce.gov.br/link/link88.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100"
          src="https://palmacia.ce.gov.br/link/link87.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <img
          className="d-block w-100"
          src="https://palmacia.ce.gov.br/link/link86.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <div className='w-[100%] mt-[20px] mb-[20px] text-[22px] text-center'>
      Aqui você fica por dentro de tudo que está acontecendo na nossa gestão.
    </div>
    </>
  )
}

export default Slider
