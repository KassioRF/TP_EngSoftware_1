import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import CardAdopt from './Card'
import { RowAdopt as Row } from '../styles'
// import CardGroup from 'react-bootstrap/CardGroup'
// import Card from 'react-bootstrap/Card'
// import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Title, BodyPage } from '../styles'

import PostsDataService from '../../services/Posts.service'
import imageBase64_to_png from '../../util/imageBase64_to_png'

class Adopt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    };
    this.retrievePosts = this.retrievePosts.bind(this);

  }

  componentDidMount() {
    this.retrievePosts();

  }
  retrievePosts() {
    PostsDataService.getAll()
      .then(response => {
        this.setState({
          posts: response.data
        })

        //get url images for each post
        this.state.posts.map(post => {
          post.images = imageBase64_to_png(post)
        })
        // console.log(this.state.posts)
      })
      .catch(e => {
        console.log(e)
      })
  }


  render() {
    const { posts } = this.state;

    return (
      <Container>
        <BodyPage>
          <Title> Adote um pet :) </Title>
          <Row>
            {posts.length > 0
              ?
              posts.map((post) => (
                <Col key={post.id} ><CardAdopt key={post.id} data={post} /></Col>
              ))

              : console.log('sem posts')
            }
          </Row>
        </BodyPage>
      </Container>

    )
  }
}

export default Adopt;
