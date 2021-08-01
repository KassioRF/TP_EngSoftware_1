import React, { Component } from 'react'
import CardAdopt from './Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { RowAdopt as Row } from '../styles'
import { Title, BodyPage, ListElements } from '../styles'
import PostsDataService from '../../services/Posts.service'
import imageBase64_to_png from '../../util/imageBase64_to_png'

class Adopt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      isLoading: true
    };
    this.retrievePosts = this.retrievePosts.bind(this);

  }

  componentDidMount() {
    this.retrievePosts();
    this.setState({ isLoading: false })

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
      })
      .catch(e => {
        console.log(e)
      })
  }

  render() {
    const { posts, isLoading } = this.state;
    return (
      <Container>
        <BodyPage>
          <Title> Adote um pet :) </Title>
          <Row>
            {posts.length > 0
              ?
              <>
                <Row>
                  {
                    posts.map((post) => (
                      <Col md={4} key={post.id} style={{ marginBottom: '3.5rem' }} ><CardAdopt key={post.id} data={post} /></Col>
                    ))
                  }
                </Row>
              </>
              :
              <>
                {isLoading
                  ?
                  <>
                    <ListElements>
                      <h4 style={{ color: 'tomato' }}> Não foi possível se conectar com o servidor. </h4>
                      <hr />
                      <div>
                        <li>no diretório /server/ rodar  yarn start </li>
                      </div>
                    </ListElements>
                  </>
                  :
                  console.log('Carregado')
                }


              </>
            }
          </Row>
        </BodyPage>
      </Container>
    )
  }
}

export default Adopt;
