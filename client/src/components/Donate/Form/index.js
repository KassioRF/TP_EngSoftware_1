import React, { Component, useState } from 'react'
import PostDataService from "../../../services/Posts.service"
//import Button from 'react-bootstrap/Button'
//import InputGroup from 'react-bootstrap/InputGroup'
import Col from 'react-bootstrap/Col'


import UploadImages from './UploadTemplate'
import { Form_ as Form, Row_ as Row, ColForm } from '../../styles'
import { FormBtn } from '../../styles'


class FormBootstrap extends Component {
  constructor(props) {
    super(props);

    this.savePost = this.savePost.bind(this);

    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);


    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeImageUrl = this.onChangeImageUrl.bind(this);
    this.state = {
      id: null,
      author: "",
      contact: "",
      email: "",
      district: "",
      city: "",
      state: "",

      title: "",
      type: "",
      age: null,
      gender: "",
      description: "",
      imageUrl: {},

      submitted: false
    };
  }


  onChangeAuthor(e) {
    this.setState({
      author: e.target.value
    });
  }

  onChangeContact(e) {
    this.setState({
      contact: e.target.value
    });
  }


  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }


  onChangeDistrict(e) {
    this.setState({
      district: e.target.value
    });
  }


  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }


  onChangeState(e) {
    this.setState({
      state: e.target.value
    });
  }


  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }
  onChangeAge(e) {
    this.setState({
      age: e.target.value
    });
  }

  onChangeGender(e) {
    console.log(e.target.value)
    this.setState({
      gender: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onChangeImageUrl(e) {
    this.setState({
      imageUrl: e
    })
  }

  savePost() {
    var data = {
      //Author Info
      author: this.state.author,
      contact: this.state.contact,
      email: this.state.email,
      district: this.state.district,
      city: this.state.city,
      state: this.state.state,
      //post Info
      title: this.state.title,
      type: this.state.type,
      age: this.state.age,
      gender: this.state.gender,
      description: this.state.description,
      imageUrl: 'img'
    };
    console.log(data)
    PostDataService.create(data)
      .then(response => {
        this.setState({
          /*
          id: response.data.id,
          title: response.data.title,
          type: response.data.type,
          age: response.data.age,
          description: response.data.description,
          //imageUrl: response.data.imageUrl,
          */
          submitted: true

        });
        //console.log(response.data)

      })
      .catch(e => {
        // feedback para o usuário
        console.log(e);
      });
  }

  render() {
    return (

      <Form>

        <Row>
          <ColForm lg="5" >
            <Row className="form-sub-title">
              <h4>Infomações de contato</h4>
            </Row>

            <Form.Row>
              <Form.Group as={Col} lg="8" >
                <Form.Label>Seu nome</Form.Label>
                <Form.Control
                  name="author"
                  onChange={this.onChangeAuthor}
                  value={this.author}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg="8" >
                <Form.Label>Telefone para contato</Form.Label>
                <Form.Control
                  placeholder="Ex.: (00) 00000-0000"
                  name="contact"
                  onChange={this.onChangeContact}
                  value={this.contact}

                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg="8" controlId="formGridEmail">
                <Form.Label>e-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="e-mail@exemplo.com"
                  name="email"
                  onChange={this.onChangeEmail}
                  value={this.email}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg="8" controlId="formGridAddress1">
                <Form.Label>Bairro</Form.Label>
                <Form.Control
                  name="district"
                  onChange={this.onChangeDistrict}
                  value={this.district}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg="8" controlId="formGridCity">
                <Form.Label>Cidade</Form.Label>
                <Form.Control
                  name="city"
                  onChange={this.onChangeCity}
                  value={this.city}

                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg="8" controlId="formGridState">
                <Form.Label>Estado</Form.Label>
                <Form.Control
                  as="select"
                  name="state"
                  onChange={this.onChangeState}
                  value={this.state}
                >


                  <option>Seu estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>


                </Form.Control>
              </Form.Group>
            </Form.Row>
          </ColForm>

          <ColForm lg="5" >
            <Row className="form-sub-title">
              <h4>Sobre o pet </h4>
            </Row>
            <Form.Row>
              <Form.Group as={Col} lg="8">
                <Form.Label>Titulo do anuncio</Form.Label>
                <Form.Control
                  required
                  name="title"
                  onChange={this.onChangeTitle}
                  value={this.title}
                />
              </Form.Group>

            </Form.Row>


            <Form.Row>
              <Form.Group as={Col} lg="5">
                <Form.Label>tipo*</Form.Label>
                <Form.Control
                  as="select"
                  name="type"
                  onChange={this.onChangeType}
                  value={this.type}
                >
                  <option>tipo*</option>
                  <option value="cachorro">cachorro</option>
                  <option value="gato">gato</option>
                  <option value="ouro">outro</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} lg="3">
                <Form.Label>idade</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  name="age"
                  onChange={this.onChangeAge}
                  value={this.age}

                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg="8">
                <Form.Check
                  inline
                  label="macho"
                  name="gender"
                  type="radio"
                  value="male"
                  onChange={this.onChangeGender}
                  defaultChecked

                />
                <Form.Check
                  inline
                  label="fêmea"
                  name="gender"
                  type="radio"
                  value="female"
                  onChange={this.onChangeGender}

                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg="8">
                <Form.Label>Informações adicionais sobre o pet</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="description"
                  onChange={this.onChangeDescription}
                  value={this.description}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg="8">
                <Form.Label>
                  Insira algumas fotos do pet no seu anúncio
                </Form.Label>
                <UploadImages data={this.onChangeImageUrl} />
              </Form.Group>
            </Form.Row>

          </ColForm>
        </Row>
        <Row className='form-btn' >
          <FormBtn
            variant="primary"
            onClick={this.savePost}
          >
            <span>Divulgar</span>
          </FormBtn>
        </Row>
      </Form >



    )
  }
}
export default FormBootstrap;