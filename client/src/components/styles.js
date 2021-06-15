import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'

import Nav from 'react-bootstrap/Nav'

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
