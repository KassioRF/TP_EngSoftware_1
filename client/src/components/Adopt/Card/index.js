import React, { Component } from 'react'
// import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
import {CardAdopt as Card } from '../../styles'

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
                <Card.Text>
                Raça: bigu
                </Card.Text>
                <Card.Text>
                Sexo: M
                </Card.Text>
                <Card.Text> 
                Idade: 3
                </Card.Text>
                <Button variant="primary">Adotar!</Button>
            </Card.Body>
        </Card>
        )
    }

}

export default CardAdopt;


