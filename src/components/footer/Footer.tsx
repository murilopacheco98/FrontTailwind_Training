import React from 'react'
import Button from '@mui/material/Button'
import {
  BsFillInfoCircleFill,
  BsFileEarmarkText,
  BsFillFileEarmarkPdfFill,
  BsFillFileEarmarkTextFill,
  BsFillBriefcaseFill,
} from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai'
import { FaRegAddressCard, FaAddressCard, FaHandshake } from 'react-icons/fa'
import { ImHammer2 } from 'react-icons/im'
import { RiBriefcase4Fill } from 'react-icons/ri'

import { Container, ContainerAcessoRapido, ContainerLinks, ContainerSocialMedia } from './styles'

const Footer = () => {
  return (
    <Container>
      <ContainerAcessoRapido>
        <h1 className="text-white text-[22px] mb-[20px] mt-[20px]">Acesso rápido</h1>
      </ContainerAcessoRapido>
      <div className=" text-center space-x-4 md:w-[80%] md:ml-[10%]">
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          {' '}
          <BsFillInfoCircleFill className="mr-2" />
          E-SIC
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          {' '}
          <FiPhoneCall className="mr-2" /> OUVIDORIA
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <AiFillPlusSquare className="mr-2" />
          RECEITA PREVISTA E ARRECADADA
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <AiFillMinusSquare className="mr-2" />
          DESPESA EMPENHADA, LIQUIDADA E PAGA
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaAddressCard className="mr-2" />
          PESSOAL
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <ImHammer2 className="mr-2" />
          LICITAÇÕES
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <RiBriefcase4Fill className="mr-2" />
          CONTRATOS
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaHandshake className="mr-2" />
          CONVÊNIOS
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <BsFillFileEarmarkTextFill className="mr-2" />
          LEIS
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <BsFileEarmarkText className="mr-2" />
          DECRETOS
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <BsFillFileEarmarkTextFill className="mr-2" />
          PORTARIAS
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <BsFillBriefcaseFill className="mr-2" />
          DIÁRIAS
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <BsFillFileEarmarkPdfFill className="mr-2" />
          PUBLICACÕES
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard className="mr-2" />
          PREFEITURA
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard className="mr-2" />
          BRASÃO, HINO E BANDEIRA
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard className="mr-2" />
          PREFEITO E VICE
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard className="mr-2" />
          SCRETARIAS
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard className="mr-2" />
          CONSELHOS E MEMBROS
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard className="mr-2" />
          GLOSSÁRIO
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard className="mr-2" />
          PERGUNTAS E RESPOSTAS
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard className="mr-2" />
          VEÍCULOS
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard className="mr-2" />
          COVID-19
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard className="mr-2" />
          MAPA DO SITE
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard className="mr-2" />
          DADOS ABERTOS
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard className="mr-2" />
          CONTATOS
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard className="mr-2" />
          ASSOCIAÇÕES
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard className="mr-2" />
          PROCESSO SELETIVO
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard className="mr-2" />
          OBRAS
        </Button>
        <Button
          variant="contained"
          className="mb-2 bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard className="mr-2" />
          FALE CONOSCO
        </Button>
        <div className="text-[20px] text-white mt-[23px]">
          Prefeitura Municipal de Palmácia - CE
        </div>
      </div>
      {/* <div className='border-t-[0.2px] border-solid border-x-0 border-b-0 border-gray-400 mt-[20px]'> */}
      <div className="mt-[20px] w-[90%] ml-[7%] md:justify-center md:flex md:ml-[12%]  md:w-[80%]">
        <div className='w-[100%] md:w-[35%] text-white'>
          <p className='text-[12px]'><strong>INSTITUCIONAL</strong></p>
          <p className='text-[12px]'>PREFEITO(A): DAVID CAMPOS MARTINS</p>
          <p className='text-[12px]'>CNPJ: 07.711.666/0001-05</p>
        </div>
        <div className='w-[100%] md:w-[33%] text-white'>
          <p className='text-[12px]'><strong>CONTATOS</strong></p>
          <p className='text-[12px]'>ícone</p>
          <p className='text-[12px]'>pm@palmacia.ce.gov.br</p>
        </div>
        <div className='w-[100%] md:w-[33%] text-white'>
          <p className='text-[12px]'><strong>ENDEREÇO E HORÁRIO</strong></p>
          <p className='text-[12px]'>PRAÇA 7 DE SETEMBRO, N° 635 CENTRO, CEP: 62780-000</p>
          <p className='text-[12px]'>DE SEGUNDA A SEXTA DAS 8:00H AS 12:00 E DE 13:00H AS 17:00H</p>
        </div>
      </div>
      <ContainerSocialMedia className='bg-amber-400'>
      <Button
          variant="contained"
          className="h-[35px] bg-amber-500 mr-2 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard  />
        </Button>
        <Button
          variant="contained"
          className="h-[35px] bg-amber-500 hover:bg-amber-600"
          href="https://palmacia.ce.gov.br/sic.php"
        >
          <FaRegAddressCard  />
        </Button>
      </ContainerSocialMedia>
      <ContainerSocialMedia className='bg-amber-600'>
        <p className=' mb-0 text-white text-[13px]'>2022 <a href='https://www.assesi.com.br/'>Assesi </a>. Todos os Direitos Reservados.</p>
      </ContainerSocialMedia>
    </Container>
  )
}

export default Footer
