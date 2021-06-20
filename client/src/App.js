import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Donate from './components/Donate'
import Adopt from './components/Adopt'
import ListAll from './components/ListAll'
import { FormContainer as Form_ } from './components/styles'

class FormContainer_ extends Component {
  render() {
    return (
      <Form_ fluid></Form_>
    )
  }
}


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <FormContainer_ />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/adopt' component={Adopt} />
          <Route exact path='/donate' component={Donate} />
          <Route exact path='/listall' component={ListAll} />

        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
