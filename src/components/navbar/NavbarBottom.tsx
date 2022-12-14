import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import DehazeIcon from '@mui/icons-material/Dehaze'
import { ContainerNavBar, NavBar2 } from './styles'

const NavbarBottom = () => {
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null)
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null)
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null)
  const [anchorEl4, setAnchorEl4] = React.useState<null | HTMLElement>(null)
  const [anchorEl5, setAnchorEl5] = React.useState<null | HTMLElement>(null)
  const [anchorEl6, setAnchorEl6] = React.useState<null | HTMLElement>(null)
  const [anchorEl7, setAnchorEl7] = React.useState<null | HTMLElement>(null)
  const [anchorEl8, setAnchorEl8] = React.useState<null | HTMLElement>(null)
  const open1 = Boolean(anchorEl1)
  const open2 = Boolean(anchorEl2)
  const open3 = Boolean(anchorEl3)
  const open4 = Boolean(anchorEl4)
  const open5 = Boolean(anchorEl5)
  const open6 = Boolean(anchorEl6)
  const open7 = Boolean(anchorEl7)
  const open8 = Boolean(anchorEl8)

  const teste = () => {
    setTimeout(() => {
      setAnchorEl1(null)
    }, 300)
  }

  return (
    <NavBar2>
      <div className="items-center w-[100%] flex md:justify-center">
        <div className="hidden md:flex p-2">
          <HomeIcon className="text-white text-[30px] md-lg:mr-2" />
        </div>
        <div
          className={
            open1 ? 'hidden md:flex md:bg-[#E7990A]' : 'hidden md:flex'
          }
        >
          <Button
            id="basic-button"
            aria-controls={open1 ? 'basic-menu' : undefined}
            aria-haspopup="true"
            onClick={(e) => setAnchorEl1(e.currentTarget)}
          >
            <span className="text-white text-[9px] lg:text-[12px]">
              PREFEITURA
              <KeyboardArrowDownIcon />
            </span>
          </Button>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl1}
          open={open1}
          onClose={() => setAnchorEl1(null)}
        >
          <div className="w-[1000px]">
            <MenuItem onClick={() => setAnchorEl1(null)}>
              PREFEITO E VICE
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl1(null)}>
              GALERIA E GESTORES
            </MenuItem>
          </div>
        </Menu>
        <div
          className={
            open2 ? 'hidden md:flex md:bg-[#E7990A]' : 'hidden md:flex'
          }
        >
          <Button
            id="basic-button"
            aria-controls={open2 ? 'basic-menu' : undefined}
            aria-haspopup="true"
            onClick={(e) => setAnchorEl2(e.currentTarget)}
          >
            <span className="text-white text-[9px] lg:text-[12px]">
              MUNIC??PIO
              <KeyboardArrowDownIcon />
            </span>
          </Button>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl2}
          open={open2}
          onClose={() => setAnchorEl2(null)}
        >
          <MenuItem onClick={() => setAnchorEl4(null)}>OBRAS</MenuItem>
          <MenuItem onClick={() => setAnchorEl4(null)}>VE??CULOS</MenuItem>
          <MenuItem onClick={() => setAnchorEl4(null)}>S??MBOLOS</MenuItem>
          <MenuItem onClick={() => setAnchorEl4(null)}>CONSELHOS</MenuItem>
          <MenuItem onClick={() => setAnchorEl4(null)}>
            GUIA DO MUNIC??PIO
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl4(null)}>
            DADOS DO MUNIC??PIO
          </MenuItem>
        </Menu>
        <div
          className={
            open3 ? 'hidden md:flex md:bg-[#E7990A]' : 'hidden md:flex'
          }
        >
          <Button
            id="basic-button"
            aria-controls={open3 ? 'basic-menu' : undefined}
            aria-haspopup="true"
            onClick={(e) => setAnchorEl3(e.currentTarget)}
            className="white"
          >
            <span className="text-white text-[9px] lg:text-[12px]">
              SECRETARIAS
              <KeyboardArrowDownIcon />
            </span>
          </Button>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl3}
          open={open3}
          onClose={() => setAnchorEl3(null)}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => setAnchorEl3(null)}>
            FUNDO MUNICIPAL DE PREVID??NCIA SOCIAL
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl3(null)}>
            GABINETE DO PREFEITO
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl3(null)}>
            SECRETARIA DE ADMINISTRA????O
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl3(null)}>
            SECRETARIA DE AGRICULTURA
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl3(null)}>
            SECRETARIA DE ASSIST??NCIA E DESENVOLVIMENTO SOCIAL
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl3(null)}>
            SECRETARIA DE CULTURA
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl3(null)}>
            SECRETARIA DE FINAN??AS
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl3(null)}>
            SECRETARIA DE IND??STRIA, COM??RCIO E TURISMO
          </MenuItem>
        </Menu>
        <div
          className={
            open4 ? 'hidden md:flex md:bg-[#E7990A]' : 'hidden md:flex'
          }
        >
          <Button
            id="basic-button"
            aria-controls={open4 ? 'basic-menu' : undefined}
            aria-haspopup="true"
            onClick={(e) => setAnchorEl4(e.currentTarget)}
            className="white"
          >
            <span className="text-white text-[9px] lg:text-[12px]">
              SERVI??OS
              <KeyboardArrowDownIcon />
            </span>
          </Button>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl4}
          open={open4}
          onClose={() => setAnchorEl4(null)}
        >
          <MenuItem onClick={() => setAnchorEl4(null)}>
            CONTRACHEQUE ONLINE
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl4(null)}>NOTA FISCAL</MenuItem>
          <MenuItem onClick={() => setAnchorEl4(null)}>
            PORTAL DO CONTRIBUINTE
          </MenuItem>
        </Menu>
        <div
        className='hidden md:flex mr-2 justify-items-center'>
          <p className="m-0 text-white text-[9px] lg:text-[12px]">TRANSPAR??NCIA</p>
        </div>
        <div
          className={
            open6 ? 'hidden md:flex md:bg-[#E7990A]' : 'hidden md:flex'
          }
        >
          <Button
            id="basic-button"
            aria-controls={open6 ? 'basic-menu' : undefined}
            aria-haspopup="true"
            onClick={(e) => setAnchorEl6(e.currentTarget)}
          >
            <span className="text-white text-[9px] lg:text-[12px]">
              LRF E CONTAS P??BLICAS
              <KeyboardArrowDownIcon />
            </span>
          </Button>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl6}
          open={open6}
          onClose={() => setAnchorEl6(null)}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => setAnchorEl6(null)}>
            RGF - RELAT??RIO DE GEST??O FISCAL
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl6(null)}>
            PREO - RELAT??RIO RESUMIDO DA EXECU????O OR??AMENT??RIA
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl6(null)}>
            LOA - LEI OR??AMENT??RIA ANUAL
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl6(null)}>
            LDO - LEI DE DIRETRIZES OR??AMENT??RIA
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl6(null)}>
            PPA - PLANO PLURIANUAL
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl6(null)}>
            PRGFIN - PROGRAMA????O FINANCEIRA E CMED- CRONOGRAMA DA EXECU????O
            MENSAL DE DESEMBOLSO
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl6(null)}>
            CMED - CRONOGRAMA DA EXECU????O MENSAL DE DESEMBOLSO
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl6(null)}>
            PCG PRESTA????O DE CONTAS DE GOVERNO
          </MenuItem>
        </Menu>
        <div
          className={
            open7 ? 'hidden md:flex md:bg-[#E7990A]' : 'hidden md:flex'
          }
        >
          <Button
            id="basic-button"
            // aria-controls={open7 ? 'basic-menu' : undefined}
            // aria-haspopup="true"
            onClick={(e) => setAnchorEl7(e.currentTarget)}
          >
            <span className=" text-white text-[9px] lg:text-[12px]">
              PUBLICA????ES
              <KeyboardArrowDownIcon />
            </span>
          </Button>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl7}
          open={open7}
          onClose={() => setAnchorEl7(null)}
        >
          <MenuItem onClick={() => setAnchorEl7(null)}>CONTRATOS</MenuItem>
          <MenuItem onClick={() => setAnchorEl7(null)}>
            PROCESSO SELETIVO
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl7(null)}>DECRETOS</MenuItem>
          <MenuItem onClick={() => setAnchorEl7(null)}>DI??RIAS</MenuItem>
          <MenuItem onClick={() => setAnchorEl7(null)}>LEIS</MenuItem>
          <MenuItem onClick={() => setAnchorEl7(null)}>LICITA????O</MenuItem>
          <MenuItem onClick={() => setAnchorEl7(null)}>
            LRF CONTAS P??BLICAS
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl7(null)}>PCG</MenuItem>
          <MenuItem onClick={() => setAnchorEl7(null)}>PCS</MenuItem>
          <MenuItem onClick={() => setAnchorEl7(null)}>PORTARIAS</MenuItem>
        </Menu>
      </div>
      <div
        className={
          open8
            ? 'bg-[#E7990A] flex justify-center'
            : 'md:hidden flex justify-center'
        }
      >
        <Button
          id="basic-button"
          aria-controls={open8 ? 'basic-menu' : undefined}
          aria-haspopup="true"
          fullWidth
          aria-expanded={open8 ? 'true' : undefined}
          onClick={(e) => setAnchorEl8(e.currentTarget)}
        >
          <div className="text-white">
            <DehazeIcon />
          </div>
        </Button>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl8}
        open={open8}
        onClose={() => setAnchorEl8(null)}
      >
        <div
          className=" w-[750px] items-center justify-center"
        >
          <div>
            <MenuItem onClick={(e) => setAnchorEl1(e.currentTarget)}>
              PREFEITURA <KeyboardArrowDownIcon />
            </MenuItem>
          </div>
          <MenuItem onClick={(e) => setAnchorEl2(e.currentTarget)}>
            MUNIC??PIO <KeyboardArrowDownIcon />
          </MenuItem>
          <MenuItem onClick={(e) => setAnchorEl3(e.currentTarget)}>
            SECRETARIAS <KeyboardArrowDownIcon />
          </MenuItem>
          <MenuItem onClick={(e) => setAnchorEl4(e.currentTarget)}>
            SERVI??OS <KeyboardArrowDownIcon />
          </MenuItem>
          <MenuItem onClick={(e) => setAnchorEl5(e.currentTarget)}>
            TRANSPAR??NCIA
          </MenuItem>
          <MenuItem onClick={(e) => setAnchorEl6(e.currentTarget)}>
            LRF E CONTAS P??BLICAS <KeyboardArrowDownIcon />
          </MenuItem>
          <MenuItem onClick={(e) => setAnchorEl7(e.currentTarget)}>
            PUBLICA????ES <KeyboardArrowDownIcon />
          </MenuItem>
        </div>
      </Menu>
    </NavBar2>
  )
}

export default NavbarBottom
