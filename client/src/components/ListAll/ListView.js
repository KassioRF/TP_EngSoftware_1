import React, { Component, useState } from 'react'

import PostsDataService from '../../services/Posts.service'
//import { ColForm } from '../styles';
import { ListElements } from '../styles'
import imageBase64_to_png from '../../util/imageBase64_to_png'

class ListView extends Component {
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
        console.log(this.state.posts)
      })
      .catch(e => {
        console.log(e)
      })
  }

  render() {
    const { posts } = this.state;
    var imgList = {};
    return (

      <ListElements>

        <div>
          <p> Esta rota é apenas para testar comunicação com o servidor </p>
        </div>
        <ul >
          {posts.length > 0
            ?
            posts.map((post, index) => (
              <li key={index}>
                {post.title} - {post.type}
                {post.images != null

                  ? post.images.map((img, index2) => (
                    <img key={index2} src={`${img.thumbUrl}`} width="480px" height="480px" />

                  ))

                  : console.log('sem imgs')}
              </li>

            ))

            : (

              <div>
                <li>Para carregar a lista lembre-se de rodar o servidor...</li>
                <li>no diretório /server/ rodar  yarn start </li>
              </div>
            )
          }
        </ul>
        <div >

        </div>
      </ListElements>

    )
  }
}

export default ListView;
