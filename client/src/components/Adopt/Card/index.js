import React, { Component } from 'react'
// import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
import {CardAdopt as Card } from '../../styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class CardAdopt extends Component {
    render() {
        return (
        <Card style={{ width: '18rem' }}  >
          <Card.Img variant="top" src={process.env.PUBLIC_URL + 'img/dog.jpg'}  />
            <Card.Body>
                <Card.Title>Catioro Nerd</Card.Title>
                <Card.Text>
                Ele pode ser seu parça de estudos
                </Card.Text>

                <Row>
                <Col md={5}  >
                <Card.Text>
                Cachorro
                </Card.Text>
                <Card.Text>
                Raça: bigu
                </Card.Text></Col>
                <Col md={5}>
                <Card.Text> 
                Idade: 3
                </Card.Text>
                <Card.Text> 
                Sexo: M
                </Card.Text></Col></Row>
                
                
                
                <Row><Button variant="primary">Adotar!</Button></Row>
            </Card.Body>
        </Card>
        )
    }

}

export default CardAdopt;


