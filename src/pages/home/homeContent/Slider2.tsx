import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Slider2 = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction: string) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4)
    } else {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0)
    }
  }

  return (
    <div className="w-[90%] ml-[5%] md-lg:ml-[10%] md-lg:w-[80%] md-lg:flex">
      <div className="w-[100%] md-lg:w-[50%]">
        <Carousel variant="dark" className="mt-[8px] h-auto">
          <Carousel.Item interval={6000}>
            <a href="https://palmacia.ce.gov.br/informa.php?id=104">
              <img
                className="d-block w-100"
                src="https://palmacia.ce.gov.br/fotos/104/Capa104.jpg"
                alt="First slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={6000}>
            <a href="https://palmacia.ce.gov.br/informa.php?id=103">
              <img
                className="d-block w-100"
                src="https://palmacia.ce.gov.br/fotos/103/Capa103.jpg"
                alt="First slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item interval={6000}>
            <a href="https://palmacia.ce.gov.br/informa.php?id=102">
              <img
                className="d-block w-100"
                src="https://palmacia.ce.gov.br/fotos/102/Capa102.jpg"
                alt="Second slide"
              />
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="w-[100%] md-lg:w-[50%]">
        <p>notícias</p>
      </div>
    </div>
  )
}

export default Slider2
