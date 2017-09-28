import React from 'react';
import Nav from '../components/Nav';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'init' };
  }

  render() {
    return (
      <div>
        <Nav/>
        <p>{this.state.someKey}</p>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'home' });
  }
}

export default Home;
