import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Relations from './pages/Relations';

import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route name="home" exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/meet-out-team" component={Team} />
          <Route path="/investor-relations" component={Relations} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
