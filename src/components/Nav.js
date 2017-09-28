import React from 'react';
import { NavLink, Link} from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <div>
        <NavLink to='home'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='services'>Services</NavLink>
      </div>
    );

   }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Nav;
