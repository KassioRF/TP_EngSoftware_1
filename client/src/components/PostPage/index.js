import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

import { BodyPage } from '../styles'
import { ImagePost as Image } from '../styles'
import { InfoPost, ListElements } from '../styles'

import PostsDataService from '../../services/Posts.service'
import imageBase64_to_png from '../../util/imageBase64_to_png'

import SimpleImageSlider from "react-simple-image-slider";


class post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.data,
      images: [],
      isLoading: true
    }
    this.retrievePost = this.retrievePost.bind(this);
    this.getImgList = this.getImgList.bind(this);

  }
  componentDidMount() {
    this.retrievePost();
    this.setState({ isLoading: false })

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
  getImgList(postImageList) {
    let imgList = []
    if (postImageList.length > 0) {
      postImageList.map(img => {
        imgList.push({ url: img.thumbUrl })
      })

    } else {
      imgList = [{ url: process.env.PUBLIC_URL + 'img/not_found.jpg' }]
    }

    return imgList
  }

  render() {
    const { post, isLoading } = this.state
    return (
      <Container>
        <BodyPage>
          <Row style={{ alignItems: 'center' }}>
            {post
              ?
              <>
                <Col md={6} style={
                  {
                    marginTop: '5rem',
                  }

                }>
                  <SimpleImageSlider
                    width={480}
                    height={480}
                    images={this.getImgList(post.images)}
                    showBullets={true}
                    showNavs={true}
                    startIndex={0}
                    navStyle={1}
                    navSize={50}
                    navMargin={30}
                    slideDuration={0.5}

                    style={
                      {
                        width: '100%',
                        backgroundColor: '#262626',
                        borderRadius: '0.8rem',
                        boxShadow: '0 0px 5px 1px rgb(100 100 100)',
                        paddingLeft: '2rem'
                      }

                    }
                  />

                </Col>

                <InfoPost md={6} ><h1> {post.title}  </h1>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Moro em {post.city} - {post.state}</ListGroup.Item>
                    {post.age > 1
                      ?
                      <ListGroup.Item>Tenho {post.age} anos </ListGroup.Item>
                      :
                      <ListGroup.Item>Tenho {post.age} ano </ListGroup.Item>

                    }

                    {/* <ListGroup.Item>Sou brincalhona e muito curiosa</ListGroup.Item> */}
                    <ListGroup.Item>Para me adotar entre em contato com {post.author} </ListGroup.Item>
                    <ListGroup.Item>Tel: {post.contact} </ListGroup.Item>
                    <ListGroup.Item>e-mail: {post.email} </ListGroup.Item>
                    <ListGroup.Item>Tenho muita vontade de conhecer meus futuros papais *-*</ListGroup.Item>
                  </ListGroup>
                  {/* <Row><Button variant="primary">Quero Adotar</Button></Row> */}
                </InfoPost>
              </>
              :
              <>
                {isLoading
                  ?
                  <>
                    <InfoPost md={12} ><h4 style={{ color: 'tomato' }}> Ops.. Algo deu errado :(  </h4>
                      <ListGroup variant="flush">
                        <ListGroup.Item>Não é possível se conectar com o servidor... </ListGroup.Item>



                      </ListGroup>
                      {/* <Row><Button variant="primary">Quero Adotar</Button></Row> */}
                    </InfoPost>
                  </>
                  :
                  console.log('Carregando')
                }
              </>
            }



          </Row>
          {post
            ?
            <Row>
              <InfoPost md={12} style={{ margin: '2.5rem 0.5rem 3.5rem 5px' }}>
                <h4>Informações adicionais:</h4>
                <p>{post.description}</p>
              </InfoPost>
            </Row>
            :
            <></>
          }

        </BodyPage>
      </Container >

    )
  }
}

export default post;
