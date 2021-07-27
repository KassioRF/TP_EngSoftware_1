import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Title, BodyPage } from '../styles'
import { ImagePost as Image } from '../styles'
import { InfoPost } from '../styles'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'



import PostsDataService from '../../services/Posts.service'
import imageBase64_to_png from '../../util/imageBase64_to_png'


class post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.data
    }
    this.retrievePost = this.retrievePost.bind(this);

  }
  componentDidMount() {
    //console.log(this.props.match.params.id);
    this.retrievePost();

  }
  retrievePost() {
    PostsDataService.get(this.props.match.params.id)
      .then(response => {
        this.setState({
          post: response.data
        })

        //get url images for each post

        this.state.post.images = imageBase64_to_png(this.state.post)

        console.log(this.state.post)
      })
      .catch(e => {
        console.log(e)
      })
  }
  render() {
    const { post } = this.state
    console.log(post)

    return (
      <Container>
        <BodyPage>
          <Row>
            {post
              ?
              <>
                <Col md={6}>
                  {post.images
                    ?
                    <Image src={`${post.images[0].thumbUrl}`} />
                    :
                    <Image src={process.env.PUBLIC_URL + 'img/doPost.jpg'} />
                  }

                </Col>

                <InfoPost md={6} ><h1> Olá!  </h1>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Moro em {post.city} - {post.state}</ListGroup.Item>
                    <ListGroup.Item>Sou brincalhona e muito curiosa</ListGroup.Item>
                    <ListGroup.Item>Tenho muita vontade de conhecer meus futuros papais</ListGroup.Item>
                    <ListGroup.Item>Me leve para casa </ListGroup.Item>
                  </ListGroup>
                  <Row><Button variant="primary">Quero Adotar</Button></Row>
                </InfoPost>
              </>
              :
              <>
                <InfoPost md={6} ><h1> Ops.. Algo deu errado :(  </h1>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Tente novamente. </ListGroup.Item>



                  </ListGroup>
                  <Row><Button variant="primary">Quero Adotar</Button></Row>
                </InfoPost>
              </>
            }



          </Row>

        </BodyPage>
      </Container>

    )
  }
}

export default post;
