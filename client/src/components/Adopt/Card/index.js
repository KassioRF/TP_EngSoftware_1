import React, { Component } from 'react'

import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import { CardAdopt as Card } from '../../styles'




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

      <Card >
        {post.images.length > 0
          ?
          <Card.Img variant="top" src={`${post.images[0].thumbUrl}`} />
          :
          <Card.Img variant="top" src={process.env.PUBLIC_URL + 'img/not_found.jpg'} />
        }
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text className="post-info-resume">
            {post.description.length > 100
              ? post.description.substr(0, 100) + '...'
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
          <Row><Button as={Link} to={`/post/${post.id}`} variant="primary">Detalhes</Button></Row>
        </Card.Body>
      </Card>
    )
  }

}

export default CardAdopt;


