import React from 'react'
import { FooterTitle, Footer_ } from '../styles'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Footer() {
  return (
    <Footer_>
      <Container fluid>
        <Container>
          {/* <FooterTitle>
          </FooterTitle> */}

          <Row>
            <Col style={{ textAlign: 'center' }}>
              {/* <p> Tema - Sistema para divulgação de adoção de pets </p> */}
              <p> Projeto Prático - Engenharia de Software I  </p>

            </Col>
          </Row>

        </Container>
      </Container>
    </Footer_>
  )
}

export default Footer;