import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
//import Form from 'react-bootstrap/Form'
let green = '#A8E000'
let purple = '#881B3C'




/********************** Basic Components *************************/
/** Header */
export const Nav_ = styled(Nav)`
  text-transform: uppercase;
  font-size: 14px;
  margin: 0 1rem;

`


export const Navbar_ = styled(Navbar)`

  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgb(127 137 161 / 40%);
  .navbar-collapse {
    flex-grow: 0 !important;
  }


`

/** Body general's */
export const BodyPage = styled.div`
    min-height: 70vh;
    padding: 10vh 0;
`
export const Title = styled.h1`
  text-align: center;

`

/** Footer */
export const Footer_ = styled.footer`

  color: rgba(0,0,0,.5);
  background-color: ${purple};
  padding: 7vh 0;
  margin-top: 10vh;
  width: 100%;
  bottom: 0;
`

/********************** General Components *************************/

/* Donate */


export const Container_ = styled(Container)`
  .form-container {
    background-image: radial-gradient(circle at 11% 62%, rgba(205, 205, 205,0.04) 0%, rgba(205, 205, 205,0.04) 50%,rgba(149, 149, 149,0.04) 50%, rgba(149, 149, 149,0.04) 100%),radial-gradient(circle at 78% 10%, rgba(49, 49, 49,0.04) 0%, rgba(49, 49, 49,0.04) 50%,rgba(254, 254, 254,0.04) 50%, rgba(254, 254, 254,0.04) 100%),radial-gradient(circle at 92% 43%, rgba(34, 34, 34,0.04) 0%, rgba(34, 34, 34,0.04) 50%,rgba(206, 206, 206,0.04) 50%, rgba(206, 206, 206,0.04) 100%),linear-gradient(329deg, rgb(241, 77, 33),rgb(218, 227, 61)) !important;
  }

`

export const Row_ = styled(Row)`

  .form-sub-title {
    justify-content: center;
  }

  .form-btn{
    justify-content: center;
  }


`
export const Form_ = styled(Form)`
  
  .form-row {
    justify-content: center;
  }

  

`

