import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Title, BodyPage } from '../styles'
import { FormBootstrap_ as FormBootstrap } from '../styles'



class Donate extends Component {
  render() {
    return (
      <BodyPage>
        <Container>
          <Title> Divulgar adoção </Title>
          <FormBootstrap />
        </Container>
      </BodyPage>
    )
  }
}

export default Donate;
