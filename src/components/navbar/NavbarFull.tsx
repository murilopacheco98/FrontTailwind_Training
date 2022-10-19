import React from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Container, ContainerLogoGeral, ContainerNavbarMiddle } from './styles'
import NavbarTop from './NavbarTop'
import NavbarBottom from './NavbarBottom'

const NavbarFull: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null)
  const open2 = Boolean(anchorEl2)

  return (
    <Container>
      <NavbarTop />
      <ContainerNavbarMiddle>
        <div className="w-[100%] justify-end flex">
          <div className="mr-[1%] mt-[1%]">
            <div className="h-[37px] bg-white md-lg:hidden  border-slate-800 border-[1px] w-[92px] rounded-md">
              <Button
                id="basic-button"
                aria-controls={open2 ? 'basic-menu' : undefined}
                // aria-haspopup="true"
                aria-expanded={open2 ? 'true' : undefined}
                onClick={(e) => setAnchorEl2(e.currentTarget)}
              >
                <span className="flex text-black text-[14px] normal-case">
                  Suporte
                  <KeyboardArrowDownIcon />
                </span>
              </Button>
            </div>
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl2}
            open={open2}
            onClose={() => setAnchorEl2(null)}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem className="w-[134px]" onClick={() => setAnchorEl2(null)}>
              Fale conosco
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl2(null)}>Ouvidoria</MenuItem>
            <MenuItem onClick={() => setAnchorEl2(null)}>E-sic</MenuItem>
            <MenuItem onClick={() => setAnchorEl2(null)}>Pesquisa</MenuItem>
          </Menu>
          <div className="bg-white mt-[1%] mr-[2%] border-slate-800 h-[37px] border-[1px] w-[190px] rounded-md">
            <img
              className="w-[20px] h-[20px] ml-1 align-middle"
              src="https://www.accucom.com.au/images/easyblog_shared/June_2018/6-18-18/b2ap3_large_gsuite_overhaul_400.jpg"
              alt="gmail"
            />
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              // aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <span className="flex text-black text-[14px] normal-case">
                Selecione o idioma
                <KeyboardArrowDownIcon />
              </span>
            </Button>
          </div>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem className="w-[134px]" onClick={() => setAnchorEl(null)}>
              Alemão
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Espanhol</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Inglês</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Francês</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Italiano</MenuItem>
          </Menu>
        </div>
        <ContainerLogoGeral className=" justify-center md-lg:justify-around flex">
          <a
            className="hidden md-lg:bg-[#E7990A] md-lg:flex md-lg:items-center md-lg:h-6 md-lg:py-4 md-lg:px-4 md-lg:rounded-md"
            href="https://palmacia.ce.gov.br/faleconosco.php"
            target="blank"
          >
            <img
              className="w-[18px] h-[18px] mr-1"
              alt="Ouvidoria"
              src="https://palmacia.ce.gov.br/imagens/social/Ouvidoria.png"
            />
            <span>Fale Conosco</span>
          </a>
          <a
            className="hidden md-lg:bg-[#E7990A] md-lg:flex md-lg:items-center md-lg:h-6 md-lg:py-4 md-lg:px-4 md-lg:rounded-md"
            href="https://palmacia.ce.gov.br/faleconosco.php"
            target="blank"
          >
            <img
              className="w-[18px] h-[18px] mr-1"
              alt="Ouvidoria"
              src="https://palmacia.ce.gov.br/imagens/social/Ouvidoria.png"
            />
            <span>Ouvidoria</span>
          </a>
          <img
            className="w-[300px] "
            src="https://palmacia.ce.gov.br/imagens/logo.png"
            alt="logo"
          />
          <a
            className="hidden md-lg:bg-[#E7990A] md-lg:flex md-lg:items-center md-lg:h-6 md-lg:py-4 md-lg:px-4 md-lg:rounded-md"
            href="https://palmacia.ce.gov.br/faleconosco.php"
            target="blank"
          >
            <img
              className="w-[18px] h-[18px] mr-1"
              alt="Ouvidoria"
              src="https://palmacia.ce.gov.br/imagens/social/Ouvidoria.png"
            />
            <span>E-Sic</span>
          </a>
          <a
            className="hidden md-lg:bg-[#E7990A] md-lg:flex md-lg:items-center md-lg:h-6 md-lg:py-4 md-lg:px-4 md-lg:rounded-md"
            href="https://palmacia.ce.gov.br/faleconosco.php"
            target="blank"
          >
            <img
              className="w-[18px] h-[18px] mr-1"
              alt="Ouvidoria"
              src="https://palmacia.ce.gov.br/imagens/social/Ouvidoria.png"
            />
            <span>Pesquisa</span>
          </a>
        </ContainerLogoGeral>
      </ContainerNavbarMiddle>
      <NavbarBottom />
    </Container>
  )
}

export default NavbarFull
