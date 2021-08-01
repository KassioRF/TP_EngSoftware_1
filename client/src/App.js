import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Header from './components/Header'
import Footer from './components/Footer'
import Donate from './components/Donate'
import Adopt from './components/Adopt'
import PostPage from './components/PostPage'
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
          <Route exact path='/' component={Adopt} />
          <Route exact path='/donate' component={Donate} />
          <Route exact path='/post/:id' component={PostPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
