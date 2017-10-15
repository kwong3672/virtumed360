import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Grid, Row} from 'react-bootstrap';
import './Footer.css';

class Footer extends React.Component {

  render() {
    return (

      <Row md={12} className="footer" style={styles.footer}>
        <Col md={4} className="text-center" style={styles.copyright}>Copyright © All Rights Reserved</Col>
        <Col md={4} className="text-center" style={styles.contact}>Telephone: (925) 230-9484</Col>
        <Col md={4} className="text-center">
          <div style={styles.socialMedia}><a href="https://www.facebook.com"><i className="fa fa-facebook"/></a></div>
          <div style={styles.socialMedia}><a href="https://plus.google.com"><i className="fa fa-google-plus"/></a></div>
          <div style={styles.socialMedia}><a href="https://www.twitter.com"><i className="fa fa-twitter"/></a></div>
        </Col>
      </Row>
    )
  }

}

export default Footer;


const styles={
  footer: {
    backgroundColor: 'rgba(102, 102, 102, 1)',
    border: '2px inset rgba(64, 58, 53, 1)',
    color: 'rgba(255, 255, 255, 1)',
  },
  copyright: {
    fontSize: '14px',
    padding: '10px 0 0 0',
  },
  contact: {
    fontSize: '28px',
  },
  socialMedia: {
    alignItems: 'center',
    backgroundColor: 'rgba(102, 102, 102, 1)',
    border: '1px solid rgba(255, 255, 255, 1)',
    borderRadius: '25px',
    display: 'inline-flex',
    fontSize: '14px',
    height: '25px',
    justifyContent: 'center',
    margin: '8px',
    width: '25px',

  },
}

