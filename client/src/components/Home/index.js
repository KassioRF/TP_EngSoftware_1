import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Title, BodyPage } from '../styles'



class Home extends Component {
  render() {
    return (
      <Container>
        <BodyPage>
          <Title> Home </Title>
        </BodyPage>
      </Container>

    )
  }
}

export default Home;
