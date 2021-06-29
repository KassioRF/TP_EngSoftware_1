import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import CardAdopt from './Card'
// import CardGroup from 'react-bootstrap/CardGroup'
// import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Title, BodyPage} from '../styles'



class Adopt extends Component {
  render() {
    return (
      <Container>
        <BodyPage>
          <Title> Adote um pet :) </Title>
          <Row>
            <Col><CardAdopt /></Col>
            <Col><CardAdopt /></Col>
            <Col><CardAdopt /></Col>
          </Row>
          <Row>
            <Col><CardAdopt /></Col>
            <Col><CardAdopt /></Col>
            <Col><CardAdopt /></Col>
          </Row>
          <Row>
            <Col><CardAdopt /></Col>
            <Col><CardAdopt /></Col>
            <Col><CardAdopt /></Col>
          </Row>
          
         
         


        </BodyPage>
      </Container>

    )
  }
}

export default Adopt;
