import React from 'react'
import { FooterTitle, Footer_ } from '../styles'
import Container from 'react-bootstrap/Container'


function Footer() {
  return (
    <Footer_>
      <Container fluid>
        <Container>
          <FooterTitle> Footer </FooterTitle>
        </Container>
      </Container>
    </Footer_>
  )
}

export default Footer;