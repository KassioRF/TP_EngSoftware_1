import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Title, BodyPage } from '../styles'
import {ImagePost as Image} from '../styles'
import {InfoPost} from '../styles'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'


class post extends Component {
  render() {
    return (
      <Container>
        <BodyPage>
            <Row>
            <Col md={6}>
            <Image src={process.env.PUBLIC_URL + 'img/doPost.jpg'}  />

            </Col>
            
                <InfoPost md={6} ><h1> Ola! Sou a Alice </h1>
                <ListGroup variant="flush">
                    <ListGroup.Item>Moro em Uberlandia</ListGroup.Item>
                    <ListGroup.Item>Sou brincalhona e muito curiosa</ListGroup.Item>
                    <ListGroup.Item>Tenho muita vontade de conhecer meus futuros papais</ListGroup.Item>
                    <ListGroup.Item>Me leve para casa </ListGroup.Item>
                </ListGroup>
               <Row><Button variant="primary">Quero Adotar</Button></Row> 
                </InfoPost>

    
            </Row>

        </BodyPage>
      </Container>
     
    )
  }
}

export default post;
