import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

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
          <Card.Title>
            {post.title}
          </Card.Title>

          <Row style={{ justifyContent: 'space-evenly' }}>
            <Card.Text>
              Idade: {post.age}
            </Card.Text>
            <Card.Text>

              {post.gender == 'macho' ? <FontAwesomeIcon icon={faMars} style={{ color: "#ff66a3", fontSize: "24px" }} /> : <FontAwesomeIcon style={{ color: "#66b3ff", fontSize: "24px" }} icon={faVenus} />}
              {/* <FontAwesomeIcon icon={faMars} /> */}
            </Card.Text>

          </Row>
          <Row><Button as={Link} to={`/post/${post.id}`} variant="primary">Detalhes</Button></Row>
        </Card.Body>
      </Card>
    )
  }

}

export default CardAdopt;


