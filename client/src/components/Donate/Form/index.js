import React, { Component, useState } from 'react'
//import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Col from 'react-bootstrap/Col'
//import Row from 'react-bootstrap/Row'

import UploadImages from './UploadTemplate'

import { Form_ as Form, Row_ as Row } from '../../styles'



class FormBootstrap extends Component {


  render() {
    return (
      <Form >
        <Row>
          <Col lg="6">
            <Row className="form-sub-title">
              <h4>Infomações de contato</h4>
            </Row>

            <Form.Row>
              <Form.Group as={Col} lg="8" >
                <Form.Label>Seu nome</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg="8" >
                <Form.Label>Telefone para contato</Form.Label>
                <Form.Control placeholder="Ex.: (00) 00000-0000" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg="8" controlId="formGridEmail">
                <Form.Label>e-mail</Form.Label>
                <Form.Control type="email" placeholder="e-mail@exemplo.com" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg="8" controlId="formGridAddress1">
                <Form.Label>Bairro</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg="8" controlId="formGridCity">
                <Form.Label>Cidade</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg="8" controlId="formGridState">
                <Form.Label>Estado</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">

                  <option>Choose...</option>
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
          </Col>

          <Col lg="6">
            <Row className="form-sub-title">
              <h4>Sobre o pet </h4>
            </Row>
            <Form.Row>
              <Form.Group as={Col} lg="8">
                <Form.Label>Titulo do anuncio</Form.Label>
                <Form.Control />
              </Form.Group>

            </Form.Row>


            <Form.Row>
              <Form.Group as={Col} lg="5">
                <Form.Label>tipo*</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>tipo*</option>
                  <option value="cachorro">cachorro</option>
                  <option value="gato">gato</option>
                  <option value="ouro">outro</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} lg="3">
                <Form.Label>idade</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg="8">
                <Form.Check inline label="macho" name="group1" type="radio" />
                <Form.Check inline label="fêmea" name="group1" type="radio" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg="8">
                <Form.Label>informações adicionais</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} lg="8">
                <Form.Label>Insira algumas fotos do pet</Form.Label>
                <UploadImages />
              </Form.Group>
            </Form.Row>

          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Divulgar
        </Button>
      </Form >



    )
  }
}
export default FormBootstrap