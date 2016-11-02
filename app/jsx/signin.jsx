import React, { Component, PropTypes as PT } from 'react';
import { Login, Signup } from 'components';
import { Button, Jumbotron, Row, Col } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSignup: false
    };
  }

  render() {
    return (
      <div className="SignInBackground">
        <ReactCSSTransitionGroup
          transitionName="SignInFormSwitchAnimation"
          transitionAppearTimeout={500}
          transitionAppear
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <div className="container SignInFormWrapper">
            <Row className="SignInFormRow">
              <Col lg={4} lgOffset={4} md={6} mdOffset={3} sm={8} smOffset={2}>
                <div className="SignInForm">
                  {
                    this.state.showSignup ?
                    <Signup />
                    :
                    <Login />
                  }
                  <a className="SignInSwitch btn" bsStyle="link" onClick={() => this.setState({showSignup: !this.state.showSignup})}>
                    {
                      this.state.showSignup ?
                      'Already have an account?'
                      :
                      "I don't have an account"
                    }
                  </a>
                </div>
                <p className="SignInFooterText">
                  @2016 EasyCourse Inc.
                </p>
              </Col>
            </Row>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
