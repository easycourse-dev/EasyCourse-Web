import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { PublicSection, Login, Signup } from 'components';

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
              <a className="StoreLinks" href="http://www.apple.com" target="_blank">
                <div className="AppStore" />
              </a>
              <a className="StoreLinks" href="http://play.google.com" target="_blank">
                <div className="GooglePlay" />
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

        <PublicSection
          PicOnLeft
          title="TEXTS"
          subtitle="Free messaging with your classmates"
          desc="Chat with all of your classmates for homework problems, group formings, and even funny jokes."
          img="TextsImage" />
        <PublicSection
          title="CLASSES"
          subtitle="Easily find your courses"
          desc="Search all the courses in your university and join the chat rooms for those courses instantly."
          img="ClassesImage" />
        <PublicSection
          PicOnLeft
          title="LANGUAGES"
          subtitle="Chat in your language"
          desc="Feel more comforatble expressing your ideas with students speaking your language."
          img="LanguageImage" />
      </Row>
    );
  }
}
