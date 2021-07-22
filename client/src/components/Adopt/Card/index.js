import React, { Component } from 'react'
// import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
import { CardAdopt as Card } from '../../styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class CardAdopt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.data
    }

  }


  render() {
    const { post } = this.state
    console.log(post.images)
    return (

      <Card style={{ width: '18rem' }}  >
        {post.images
          ?
          <Card.Img variant="top" src={`${post.images[0].thumbUrl}`} style={{ width: '200px' }, { height: '175px' }} />
          :
          <Card.Img variant="top" src={process.env.PUBLIC_URL + 'img/dog.jpg'} />
        }
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {post.description}
          </Card.Text>

          <Row>
            <Col md={5}  >
              <Card.Text>
                {post.type}
              </Card.Text>
              <Card.Text>
                ---
              </Card.Text></Col>
            <Col md={5}>
              <Card.Text>
                Idade: {post.age}
              </Card.Text>
              <Card.Text>
                Sexo: {post.gender}
              </Card.Text></Col></Row>


          {/* usar o post id para ir para a rota get - post.services! */}
          <Row><Button variant="primary">Adotar!</Button></Row>
        </Card.Body>
      </Card>
    )
  }

}

export default CardAdopt;


