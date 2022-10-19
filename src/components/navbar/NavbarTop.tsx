import React from 'react'
import ContrastIcon from '@mui/icons-material/Contrast'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined'
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined'
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined'
import { NavBar1 } from './styles'

const NavbarTop: React.FC = () => {
  return (
      <NavBar1>
        <div className="flex items-center">
          <ContrastIcon className="mr-1"/>
          <h6 className="m-0 hidden lg:flex">Contraste</h6>
        </div>
        <div className="flex items-center">
          <AddBoxOutlinedIcon className="mr-1"/>
          <h6 className="m-0 p-0 hidden lg:flex">Aumentar</h6>
        </div>
        <div className="flex items-center">
          <IndeterminateCheckBoxOutlinedIcon className="mr-1"/>
          <h6 className="m-0 hidden lg:flex">Diminuir</h6>
        </div>
        <div className="flex items-center">
          <SearchOutlinedIcon className="mr-1"/>
          <h6 className="m-0 hidden lg:flex">Pesquisa</h6>
        </div>
        <div className="flex items-center">
          <SentimentSatisfiedAltOutlinedIcon className="mr-1"/>
          <h6 className="m-0 hidden lg:flex">Acessibilidade</h6>
        </div>
        <div className="flex items-center">
          <PanToolOutlinedIcon className="mr-1"/>
          <h6 className="m-0 hidden lg:flex">Libras</h6>
        </div>
        <div className="flex items-center">
          <SchemaOutlinedIcon className="mr-1"/>
          <h6 className="m-0 hidden lg:flex">Mapa do site</h6>
        </div>
        <div className="flex items-center">
          <DehazeOutlinedIcon className="mr-1"/>
          <h6 className="m-0 hidden lg:flex">Transparência</h6>
        </div>
      </NavBar1>
  )
}

export default NavbarTop