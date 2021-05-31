import React from 'react';

import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Nav_ as Nav } from '../styles'
import { Navbar_ as Navbar } from '../styles'
import LogoPng from './logo.png'
//import NavDropdown from 'react-bootstrap/NavDropdown'
//import { Link } from 'react-router-dom'

function Header() {
  return (
    <header id="main-header">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image style={{ height: 60, marginRight: 18 }} src={LogoPng} />
            Nome do App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Adote um pet</Nav.Link>
              <Nav.Link href="#">Quem somos</Nav.Link>
              <Nav.Link href="#">Fale conosco</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header