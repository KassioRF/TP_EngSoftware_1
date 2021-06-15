import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Donate from './components/Donate'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/donate' component={Donate} />

        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
