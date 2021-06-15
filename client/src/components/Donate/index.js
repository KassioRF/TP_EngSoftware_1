import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import FormBootstrap from './Form'
import { Title, BodyPage } from '../styles'



class Donate extends Component {
  render() {
    return (
      <Container>
        <BodyPage>
          <Title> Divulgar adoção </Title>

          <hr />
          <FormBootstrap />

        </BodyPage>
      </Container>

    )
  }
}

export default Donate;
