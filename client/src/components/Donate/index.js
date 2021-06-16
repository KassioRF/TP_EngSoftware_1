import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import FormBootstrap from './Form'
import { Title, BodyPage } from '../styles'



class Donate extends Component {
  render() {
    return (
      <BodyPage>
          <Title> Divulgar adoção </Title>

          <hr />
        <Container  fluid>
          <div className="form-container">
            <FormBootstrap />
          </div>
        </Container>

        </BodyPage>
    )
  }
}

export default Donate;
