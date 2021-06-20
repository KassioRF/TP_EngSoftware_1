import React, { Component, useState } from 'react'

import PostsDataService from '../../services/Posts.service'
//import { ColForm } from '../styles';
import { ListElements } from '../styles'


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
        // console.log(response.data);
      })
      .catch(e => {
        console.log(e)
      })
  }

  render() {
    const { posts } = this.state;
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
      </ListElements>

    )
  }
}

export default ListView;
