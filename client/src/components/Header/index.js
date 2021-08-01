import React from 'react';

import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Nav_ as Nav } from '../styles'
import { Navbar_ as Navbar } from '../styles'
import LogoPng from './logo.png'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();
  return (
    <header id="main-header">
      <Navbar collapseOnSelect variant="dark" expand="lg">
        <Container>
          {location.pathname == '/'
            ?
            <>
              <Navbar.Brand style={{ cursor: 'pointer' }}>
                <Image style={{ height: 60, marginRight: 18 }} src={LogoPng} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav >
                  <Nav.Link >Adote um pet</Nav.Link>
                  <Nav.Link as={Link} to="/donate"> Quero doar</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
            :
            <>
              <Navbar.Brand as={Link} to="/" >
                <Image style={{ height: 60, marginRight: 18 }} src={LogoPng} />

              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav >
                  <Nav.Link as={Link} to="/">Adote um pet</Nav.Link>
                  <Nav.Link as={Link} to="/donate"> Quero doar</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
          }
        </Container>
      </Navbar>
    </header>
  )
}

export default Header