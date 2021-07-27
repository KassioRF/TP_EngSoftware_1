import React, { Component } from 'react'
// import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
import { CardAdopt as Card } from '../../styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


class CardAdopt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.data
    }

  }


  render() {
    const { post } = this.state
    return (

      <Card style={{ width: '18rem' }}  >
        {post.images
          ?
          <Card.Img variant="top" src={`${post.images[0].thumbUrl}`} />
          :
          <Card.Img variant="top" src={process.env.PUBLIC_URL + 'img/dog.jpg'} />
        }
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {post.description.length > 100
              ? post.description.slice(-100) + '.....'
              :
              post.description
            }
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
          <Row><Button as={Link} to={`/post/${post.id}`} variant="primary">Adotar!</Button></Row>
        </Card.Body>
      </Card>
    )
  }

}

export default CardAdopt;


