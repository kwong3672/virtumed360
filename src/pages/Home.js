import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'init' };
  }

  render() {
    return (
      <div>
        <p>Home Page</p>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'home' });
  }
}

export default Home;
