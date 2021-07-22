
//criar um diretório para cada id_post

const imageBase64_to_png = (postData) => {

  var image_list = [];

  // to create some random id or name for your image name
  if (postData.images) {
    postData.images.map(p => {
      let imgdata = p.thumbUrl;
      let base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');
      image_list.push(base64Data);
    })

  }
  return image_list;

}

export default imageBase64_to_png;