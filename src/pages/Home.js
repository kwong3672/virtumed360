import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import { Col, Grid, Jumbotron, Row, Thumbnail } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
// Theme changing theme in Navbar
// import 'bootstrap/dist/css/bootstrap-theme.css';
import './Home.css';
import BgImg from '../assets/earth-earth-at-night-night-lights-41949.jpeg';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'init' };
  }

  render() {
    const secStyling = {
      width: "100%",
      backgroundImage: `url(${BgImg})`
    };
    const frame = {width: "auto", height: '275px'};

    const title = `
            <h1 class="site-element" element-id="id1506832371188" element-type="freeText">
                <div style="text-align: center;"><span style="font-size:48px;"><span class="theme-text-color-0-0"><strong>THE INDEPENDENT MEDICAL</strong></span><span style="color:#3c8453;"> <strong>SYSTEM</strong></span></span></div>
            </h1>
            <h2 class="site-element" element-id="id1506832556394" element-type="freeText">
                <div style="text-align: center;"><span class="theme-text-color-1-1"></span><span style="color:#67c7b8;">CREAT JOBS | IMPROVE HEALTH | FIGHT POVERTY</span><span class="theme-text-color-1-1"><span class="theme-background-color-1-3"></span><span class="theme-background-color-1-3"></span><span class="theme-background-color-1-3"></span></span><br></div>
            </h2>
    `;
    const fighting = `
            <h1 class="site-element" element-id="id1507997294636" element-type="freeText">
                <div><strong style="background-color: initial; letter-spacing: 0px;"><span style="color:#67c7b8;">Fighting Disease in Developing Countries</span></strong><br></div>
            </h1>
    `;
    const unifying = `
            <h2 class="site-element" element-id="id1506832960844" element-type="freeText">
                <div><span style="font-size:20px;"><span class="theme-text-color-0-0">Unifying the world of health care through customization, </span></span><span class="theme-text-color-0-0"><span style="font-size:20px;">strategy</span></span><span style="font-size:20px;"><span class="theme-text-color-0-0">, and innovation</span></span><br></div>
            </h2>
            <div class="site-element" element-id="id1507997793761" element-type="image"><img src="https://storage.googleapis.com/wzukusers/user-26671783/images/5876d33626c1145JaPUt/458302975_d400.jpg" width="360" height="247"></div>
    `;
    const borders = `
            <h1 class="site-element" element-id="id1506832872442" element-type="freeText">
                <div><strong><span style="color:#67c7b8;">A HEALTHCARE:</span></strong></div>
                <div><strong><span style="color:#67c7b8;">WITHOUT BORDERS</span></strong></div>
            </h1>
            <h2 class="site-element" element-id="id1507997098030" element-type="freeText">
                <div><span style="font-size:20px;"><span class="theme-text-color-0-0"><span style="background-color: initial; letter-spacing: 0px;">Democratizing Healthcare Access</span></span></span><br></div>
                <div><span style="font-size:20px;"><span class="theme-text-color-0-0"><span style="background-color: initial; letter-spacing: 0px;">&#8203;  </span></span></span>
                    <div><span style="font-size:20px;"><span class="theme-text-color-0-0"><span style="background-color: initial; letter-spacing: 0px;">Bringing Healthcare Stakeholders Together Without Restrictions</span></span></span></div><span style="font-size:20px;"><span class="theme-text-color-0-0"><span style="background-color: initial; letter-spacing: 0px;">  </span>  <br></span></span><br>
                </div>
            </h2>
    `;
    const pics = [
       'https://storage.googleapis.com/wzukusers/user-26671783/images/586ffea891bdcKuSjVHw/iStock-172438113_d200.jpg',
       'https://storage.googleapis.com/wzukusers/user-26671783/images/587913afb8defb8I5V0o/iStock-542587276-1_d200.jpg',
       'https://storage.googleapis.com/wzukusers/user-26671783/images/59d075efce445FAKoHze/iStock-503898592_d200.jpg',
       'https://storage.googleapis.com/wzukusers/user-26671783/images/587a54f81618fezhGYId/iStock-612623232_d200.jpg'
    ];
    const texts = [
            `<h2 class="site-element" element-id="id1506834398234" element-type="freeText">
                <div style="text-align: center;">
                <span style="font-size:22px;"><strong>
                             ARTIFICIAL INTELLIGENCE
                </strong></span></div>
            </h2>`,
            `<h2 class="site-element" element-id="id1506834621168" element-type="freeText">
                <div style="text-align: center;">
                <span style="font-size:22px;"><strong>AUGMENTED REALITY</strong></span></div>
            </h2>`,
            `<h2 class="site-element" element-id="id1506834640164" element-type="freeText">
                <div style="text-align: center;">
                <span style="font-size:22px;"><strong>PROFESSIONAL SUPPORT</strong></span></div>
            </h2>`,
            `<h2 class="site-element" element-id="id1506872667287" element-type="freeText">
                <div style="text-align: center;">
                <span style="font-size:20px;"><strong>VIRTUAL MARKETPLACE</strong></span></div>
            </h2>` ];
    const indi = `
            <h2 class="site-element" element-id="id1506834850747" element-type="freeText">
                <div style="text-align: center;">
                <span style="font-size:30px;">
                <strong>FOR INDIVIDUALS, BY INDIVIDUALS</strong>
                </span>
                </div>
            </h2>
    `;
    const using = [`
            <div class="site-element" element-id="id1506835190812" element-type="image"><img src="https://storage.googleapis.com/wzukusers/user-26671783/images/58791183b0726svQh4h9/iStock-476143934_d400.jpg" width="395" height="200"></div>
            `,
            `<h3 class="site-element" element-id="id1506834957580" element-type="freeText">
                <div class="theme-text-style-headingS"><span style="font-size:26px;"><span class="theme-text-color-0-0">Using Customization, Strategy, and Innovation to Break Down Barriers to Quality Care</span></span><br><span style="font-size:26px;"><span class="theme-text-color-0-0"></span></span><br></div>
            </h3>`];
    const empower = `
            <h3 class="site-element" element-id="id1506835378327" element-type="freeText">
                <div style="text-align: center;"><span style="letter-spacing:5px;"><span class="theme-background-color-0-3"><span class="theme-text-color-0-0"><strong>  </strong></span></span></span>
                    <div><span style="letter-spacing:5px;"><span class="theme-background-color-0-3"><span class="theme-text-color-0-0"><strong>Empowering Independent Physicians, and Putting the Patient at the Center of a New Healthcare Marketplace</strong></span></span></span></div><span style="letter-spacing:5px;"><span class="theme-background-color-0-3"><span class="theme-text-color-0-0"><strong>  </strong></span></span></span><span class="theme-text-color-0-0"><strong><span class="theme-background-color-0-3"> </span></strong></span><span class="theme-background-color-0-2"></span><span class="theme-background-color-0-2"></span><span class="theme-background-color-0-2"></span><span class="theme-background-color-0-2"></span><span class="theme-background-color-0-2"></span><span class="theme-background-color-0-2"></span><span class="theme-background-color-0-2"></span><span class="theme-background-color-0-2"></span><span class="theme-background-color-0-3"></span>
                </div>
            </h3>
    `;

    return (
        <section className="site-element" style={secStyling}>
          <Grid>
            <Row className="show-grid">
              {ReactHtmlParser(title)}
            </Row>
            <Row>
              <Col xs={4} md={1}></Col><Col xs={4} md={5}>{ReactHtmlParser(fighting)}</Col>
              <Col xs={4} md={6}></Col>
            </Row>
            <Row>
              <Col md={1}></Col>
              <Col md={5}>{ReactHtmlParser(unifying)}</Col>
              <Col md={5}>{ReactHtmlParser(borders)}</Col>
              <Col md={1}></Col>
            </Row>
            <Row><p></p></Row>
            <Jumbotron>
            <Row>
              <Col md={3}>
                <Thumbnail src={pics[0]} style={frame} responsive>
                  {ReactHtmlParser(texts[0])}
                </Thumbnail>
              </Col>
              <Col md={3}>

                <Thumbnail src={pics[1]} style={frame} responsive>
                  {ReactHtmlParser(texts[1])}
                </Thumbnail>
              </Col>
              <Col md={3}>
                <Thumbnail src={pics[2]} style={frame} responsive>
                  {ReactHtmlParser(texts[2])}
                </Thumbnail>
              </Col>
              <Col md={3}>
                  <Thumbnail src={pics[3]} style={frame} responsive>
                  {ReactHtmlParser(texts[3])}
                </Thumbnail>
              </Col>
            </Row>
            <Row>
                <Col md={12}>{ReactHtmlParser(indi)}</Col>
            </Row>
            </Jumbotron>

            <Row>
              <Col md={1}></Col>
                <Col md={5}>{ReactHtmlParser(using[0])}</Col>
                <Col md={5}>{ReactHtmlParser(using[1])}</Col>
              <Col md={1}></Col>
            </Row>

            <Row>
                <Col md={12}>{ReactHtmlParser(empower)}</Col>
            </Row>
          </Grid>
        </section>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'home' });
  }
}

export default Home;
