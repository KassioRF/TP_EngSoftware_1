import React, { Component, useState } from 'react'

import PostsDataService from '../../services/Posts.service'
//import { ColForm } from '../styles';
import { ListElements } from '../styles'
import imageBase64_to_png from '../../util/imageBase64_to_png'


import SimpleImageSlider from "react-simple-image-slider";
import post from '../PostPage';

class ListView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    };
    this.retrievePosts = this.retrievePosts.bind(this);
    this.getImgList = this.getImgList.bind(this);

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

  getImgList(postImageList) {
    let imgList = []
    if (postImageList.length > 0) {
      postImageList.map(img => {
        imgList.push({ url: img.thumbUrl })
      })

    } else {
      imgList = [{ url: process.env.PUBLIC_URL + 'img/dog.jpg' }]
    }

    return imgList
  }

  render() {
    const { posts } = this.state;
    var imgList = [
      { url: process.env.PUBLIC_URL + 'img/dog.jpg' },
      { url: process.env.PUBLIC_URL + 'img/doPost.jpg' }
    ];
    return (

      <ListElements>

        <div>
          <p> Esta rota é apenas para testar comunicação com o servidor </p>
        </div>
        <ul >
          {posts.length > 0
            ?
            posts.map((post, index) => (
              <>
                <li key={index}>
                  {post.title} - {post.type}
                </li>

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
                />
              </>


            ))

            : (

              <SimpleImageSlider
                width={896}
                height={504}
                images={imgList}
                showBullets={true}
                showNavs={true}
                startIndex={0}
                navStyle={1}
                navSize={50}
                navMargin={30}
                slideDuration={0.5}

              />
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

/*
<div>
  <li>Para carregar a lista lembre-se de rodar o servidor...</li>
  <li>no diretório /server/ rodar  yarn start </li>
</div>
*/