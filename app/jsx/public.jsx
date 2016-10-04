import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { PublicSection, Footer, Login, Signup } from './components';

export default class Public extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSigningUp: false
    };
  }

  render() {
    return (
      <Row className="Public">
        {/* Top banner with background image */}
        <div className="Banner">
          <div className="container">
            <Col className="SloganWrapper" lg={4} lgOffset={2} md={5} mdOffset={1} sm={12}>
              <h1 className="Slogan">The best way to learn together!</h1>
              <a href="http://www.apple.com" target="_blank">
                <div className="AppStore" />
              </a>
            </Col>
            <Col lg={4} md={5} sm={12}>
              <div className="PublicPhonesWrapper">
                <div className="PublicPhones2" />
                <div className="PublicPhones1" />
              </div>
            </Col>
          </div>
        </div>

        <PublicSection />
        <PublicSection />
        <PublicSection />

        <Footer />

      {/* Login/Signup forms */}
        {/* <Col sm={12} md={4} mdOffset={4} lg={4} lgOffset={4}>
          <div className="publicFormWrapper">
            {this.state.isSigningUp ?
              <Signup />
              :
              <Login />
            }
          </div>
          <div className="publicFormSwitches">
            {this.state.isSigningUp ?
              <Button bsStyle="link" onClick={()=> {this.setState({isSigningUp: false})}}>back to login</Button>
              :
              <Button bsStyle="link" onClick={()=> {this.setState({isSigningUp: true})}}>Sign up here</Button>
            }
          </div>
        </Col> */}
      </Row>
    );
  }
}
