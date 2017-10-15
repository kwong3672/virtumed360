import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Relations from './pages/Relations';
import Virtumed360 from './pages/Virtumed360';
import PointOfCare from './pages/PointOfCare';
import Virtucare from './pages/Virtucare';
import ProviderSupport from './pages/ProviderSupport';
import Facts from './pages/Facts';
import WhyVirtucare from './pages/WhyVirtucare';
import Team from './pages/Team';



import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route name="home" exact path="/" component={Home} />
          <Route path="/virtumed360" component={Virtumed360} />
          <Route path="/point_of_care" component={PointOfCare} />
          <Route path="/virtucare" component={Virtucare} />
          <Route path="/provider_support" component={ProviderSupport} />
          <Route path="/facts" component={Facts} />
          <Route path="/why_virtucare" component={WhyVirtucare} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/investor-relations" component={Relations} />
          <Route path="/Team" component={Team} />

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
