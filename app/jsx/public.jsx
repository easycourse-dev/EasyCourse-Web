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
              <h1 className="Slogan">EasyCourse</h1>
              <h3 className="SubSlogan">Connect students</h3>
              <h3 className="SubSlogan">Boost learning efficiency</h3>
              <h4 className="SubSlogan">Available in AppStore, Google Play and Web soon.</h4>
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
          title="CLASSES"
          subtitle="Joining all the course group"
          desc="Search all the courses in your university and join the chat rooms for the courses you enrolled instantly."
          img="ClassesImage" />
        <PublicSection
          title="TEXTS"
          subtitle="Messaging with your classmates"
          desc="Chat with all of your classmates for homework problems, group formings, and even funny jokes."
          img="TextsImage" />
        <PublicSection
          PicOnLeft
          title="LANGUAGES"
          subtitle="Chat in your language"
          desc="Feel more comforatble expressing your ideas with students speaking your language."
          img="LanguageImage" />

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
