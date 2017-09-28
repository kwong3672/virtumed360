import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route name='home' path='/' component={Home}/>
            <Route name='about' exact path='/about' />
            <Route path='/services' />
            <Route path='/meet-out-team' />
            <Route path='/investor-relations' />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
