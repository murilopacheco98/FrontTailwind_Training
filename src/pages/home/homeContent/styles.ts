import styled from 'styled-components'
// import { mobile } from '../../responsive'

export const Container = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

type ArrowProps = {
  direction: string
}
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  left: ${(props: ArrowProps) => props.direction === 'left' && '10px'};
  right: ${(props: ArrowProps) => props.direction === 'right' && '10px'};
`

type WrapperProps = {
  slideIndex: number
}
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props: WrapperProps) => props.slideIndex * -100}vw);
`

type SlideProps = {
  bg: string
}
export const Slide = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  background-color: #${(props: SlideProps) => props.bg};
`

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`

export const Image = styled.img`
  height: 80%;
`

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

export const Title = styled.h1`
  font-size: 70px;
`

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`
