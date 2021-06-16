import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Title, BodyPage } from '../styles'



class Adopt extends Component {
  render() {
    return (
      <Container>
        <BodyPage>
          <Title> Adote um pet :) </Title>
        </BodyPage>
      </Container>

    )
  }
}

export default Adopt;
