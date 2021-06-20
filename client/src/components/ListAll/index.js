import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Title, BodyPage } from '../styles'

import { ListView_ as ListView } from '../styles'


class ListAll extends Component {
  render() {
    return (
      <Container>
        <BodyPage>
          <Title> Conexão com BD  </Title>
          <Container>
            <ListView>

            </ListView>
          </Container>
        </BodyPage>
      </Container>

    )
  }
}

export default ListAll;
