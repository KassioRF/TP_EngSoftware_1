import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import FormBootstrap from './Donate/Form'
//import Form from 'react-bootstrap/Form'
let yellow = 'yellow'
let black = '#262626'
let witheText = '#f5f6fa'


/********************** Basic Components *************************/
/** Header */
export const Nav_ = styled(Nav)`
  color:${witheText};
  text-transform: uppercase;
  font-size: 14px;
  margin: 0 1rem;
  
  a {
    color: ${witheText}!important;
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
    min-height: 70vh;
    /*padding: 10vh 0;*/
`
export const Title = styled.h1`

  color: ${witheText};
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

  background-color: ${black};
  padding: 7vh 0;
  /*margin-top: 10vh;*/
  width: 100%;
  bottom: 0;
`
export const FooterTitle = styled.h1`
  color: ${witheText};
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
    color: ${witheText};
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
    
    color: ${witheText};
    font-weight: 600;
    width: 40%;
    background-color: ${black} !important;
    border: 1px solid ${black};


  }
`

export const ColForm = styled(Col)`
  color: ${witheText};
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


