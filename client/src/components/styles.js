import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

import FormBootstrap from './Donate/Form'
//import Form from 'react-bootstrap/Form'
let yellow = 'yellow'
let black = '#262626'
let whiteText = '#f5f6fa'
let footerText = '#bfbfbf'



/********************** Basic Components *************************/
/** Header */
export const Nav_ = styled(Nav)`
  color:${whiteText};
  text-transform: uppercase;
  font-size: 14px;
  margin: 0 1rem;
  
  a {
    color: ${whiteText}!important;
    transition: 0.2s;
    margin: 0 1rem !important;
    padding: 0 1rem !important;
  }

  a:hover {
    font-weight: 600 !important;
    color: ${yellow} !important;
    transition: 0.2s;
  }

`


export const Navbar_ = styled(Navbar)`

  background-color: ${black};
  box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%);
  .navbar-collapse {
    flex-grow: 0 !important;
  }


`

/** Body general's */
export const BodyPage = styled.div`
    min-height: 85vh;
    /*padding: 10vh 0;*/
`
export const Title = styled.h1`

  color: ${whiteText};
  letter-spacing: 1px;
  background-color: ${black};
  text-align: center;
  padding: 4vh;
  margin: 5rem 3rem;


  border-radius: 0.8rem;
  box-shadow: 0 0px 5px 1px rgb(100 100 100);
  

`

/** Footer */
export const Footer_ = styled.footer`
  position: absolute;
  color: ${footerText};
  background-color: ${black};
  padding: 1.5vh 1.5vh;
  padding-top: 3vh;
  width: 100%;

  p {
    opacity: 0.7;
  }

`
export const FooterTitle = styled.h1`
  color: ${whiteText};
  text-align: center;
  padding: 5vh;
  margin: 0rem 5rem;

`

/********************** General Components *************************/

/* Donate */


export const FormContainer = styled(Container)`
  
  background-image: url(${process.env.PUBLIC_URL + 'img/img_fundo.jpg'});
  position: fixed;
  top: -3vh;
  height: 145vh;
  z-index: -1;
  opacity: 0.8;

`

export const FormBootstrap_ = styled(FormBootstrap)`
  opacity: 1 !important;
`

export const Row_ = styled(Row)`

  .form-sub-title {
    justify-content: center;
  }
  h4 {
    color: ${whiteText};
  }

`
export const Form_ = styled(Form)`
  .row {
    justify-content: space-evenly;
  }
  padding-bottom: 12rem;
  .form-row {
    justify-content: center;
  }
  .form-btn {
    justify-content: center;
    margin-top: 10vh;
  }
  .btn-primary:hover, .btn-primary:hover  {
    
    color: ${whiteText};
    font-weight: 600;
    width: 40%;
    background-color: ${black} !important;
    border: 1px solid ${black};
  }
  .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
    ${'' /* color: ${yellow}; */}
    background-color: ${black} !important;
    border-color: #005cbf;
    box-shadow: 0 0 0 0.2rem rgb(255 204 0 / 50%)
  }
    .btn-primary.focus, .btn-primary:focus {
    color: ${yellow};
    background-color: ${black};
    border-color: ${yellow};
    box-shadow: 0 0 0 0.2rem rgb(255 204 0 / 50%);
  }
`

export const ColForm = styled(Col)`
  color: ${whiteText};
  padding: 3rem 0;
  background-color: ${black};
    
  
  /*border: 1px solid tomato;*/
  border-radius: 0.8rem;
  box-shadow: 0 0px 5px 1px rgb(100 100 100);
`


export const FormBtn = styled(Button)`
  
  font-size: 22px;
  letter-spacing: 1px;
  width: 35%;
  background-color: ${black};
  border: 1px solid ${black};
  border-radius: 5rem;
  padding: 1.1rem 0;
  transition: .2s;
  box-shadow: 0 0px 5px 1px rgb(100 100 100);

  
`


/* ---------- TESTES ---------- */


export const ListElements = styled(ColForm)`
  padding-left: 15%;
  margin-bottom: 5rem;
  
`


/*Seção adote um pet */

export const CardAdopt = styled(Card)`
  
  /*
  max-height: 80vh;
  min-height: 95vh;
  */
  border-radius: 0.8rem;
  box-shadow: 0 0px 5px 1px rgb(100 100 100);

  .card-img-top {
    
  }
  .row{
    justify-content: center;
  }



  .col-md-5 {
    text-align: -webkit-center;
  }

  .Card.Text{
    padding-right: 2rem;

  }
  .Card.Body {
    min-height: 47vh;
  }

  background-color: ${black};
  .card-title {
    color: ${whiteText};
  }

  .card-text {
    color: ${whiteText};

  }
  .post-info-resume {
    padding-top: 1vh;
    min-height: 11vh;
  }

  .btn-primary {
    background-color: ${yellow};
    color: black;
    border: 4pt ${black};
    justify-content: center;
    ${'' /* margin-top: 3rem; */}
    font-weight: 500;

    transition: .1s;
  }

  .btn-primary:hover {
    transform: scale(1.03);
    transition: .1s;
  }
  
`

export const RowAdopt = styled(Row)`
  
  margin-bottom: 3vh;

`


/*------Seção Post Page-------- */
export const ImagePost = styled(Image)`
    width: 100%;
    margin-top: 5rem;
    background-color: ${black};  
    border-radius: 0.8rem;
    box-shadow: 0 0px 5px 1px rgb(100 100 100);
`


export const InfoPost = styled(ColForm)`

  background-color: ${black};
  color: ${whiteText};
  margin-top: 5rem;
  
  padding-left: 3%;
  padding-right: 3%;

  /*
  margin-bottom: 5rem;
  */
  
  h1 { 
    color: ${whiteText};
    text-align:center;
    margin-bottom: 2.7rem;
  }
  h4 {
    color: ${whiteText};
    margin-bottom: 2.7rem;
  }
  .row{
    justify-content: center;
  }
  .list-group-flush > .list-group-item {
    color: ${whiteText};
    background-color: ${black};
    
  }
  .btn-primary {
    background-color: ${yellow};
    color: black;
    border: 4pt ${black};
    justify-content: center;
    margin-top: 3rem;
    font-weight: 500;

    transition: .1s;
  }

  .btn-primary:hover {
    transform: scale(1.03);
    transition: .1s;
  }
  
  .info-element {
    margin-bottom: 5rem;
  }

  `







