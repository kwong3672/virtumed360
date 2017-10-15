import React from 'react';
import { Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';

import './Header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = { activePage: 1 };
  }

  handleSelect(selectedKey) {
    this.setState({activePage: selectedKey})
  }

  render() {
    return (
      <div style={styles.container}>
        <Navbar inverse collapseOnSelect style={styles.innerContainer}>
          <Navbar.Header>
            <Navbar.Brand style={styles.brand}>Virtumed360</Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav bsStyle="pills" pullRight stacked>
              <IndexLinkContainer to="/"><NavItem eventKey={1}>Home</NavItem></IndexLinkContainer>        
              <IndexLinkContainer to="/virtumed360"><NavItem eventKey={2}>Virtumed360</NavItem></IndexLinkContainer>
              <IndexLinkContainer to="/point_of_care"><NavItem eventKey={3}>Point of care</NavItem></IndexLinkContainer>
              <IndexLinkContainer to="/virtucare"><NavItem eventKey={4} >Virtucare</NavItem></IndexLinkContainer>
              <IndexLinkContainer to="/provider_support"><NavItem eventKey={5}>Provider Support</NavItem></IndexLinkContainer>
              <IndexLinkContainer to="/facts"><NavItem eventKey={6}>Facts</NavItem></IndexLinkContainer>
              <IndexLinkContainer to="/why_virtucare"><NavItem eventKey={7}>Why Virtucare</NavItem></IndexLinkContainer>
              <NavDropdown eventKey={8} title="More" id="nav-dropdown">
                <IndexLinkContainer to="/team"><MenuItem eventKey={8.1}>Meet Our team</MenuItem></IndexLinkContainer>
                <IndexLinkContainer to="/about"><MenuItem eventKey={8.2}>About</MenuItem></IndexLinkContainer>
                <IndexLinkContainer to="#"><MenuItem eventKey={8.3} disabled>Blog</MenuItem></IndexLinkContainer>
                <IndexLinkContainer to="#"><MenuItem eventKey={8.4} disabled>Investor Relations</MenuItem></IndexLinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Header;

const styles = {
  container: {
    border: '2px inset rgba(31, 144, 105, 1)',
    height: '70px',
  },
  innerContainer: {
    backgroundColor: 'rgba(102, 102, 102, 1)',
    border: '2px inset rgba(64, 58, 53, 1)',
    borderRadius: 0,
    color: 'rgba(255, 255, 255, 1)',
    padding: '3px 0',
  },
  brand: {
    backgroundColor: 'rgba(31, 144, 105, 1)',
    border: '2px inset rgba(101, 88, 88, 1)',
    color: 'rgba(255, 255, 255, 1)',
    font: '20px Geostar Fill',
    margin: '3px 0',
  }
}

