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
          transitionName="SignInSwitch"
          transitionAppearTimeout={500}
          transitionAppear
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <div className="SignInFormBackground">
            <div className="container SignInFormWrapper">
              <Row className="SignInForm">
                <Col lg={4} lgOffset={4} md={6} mdOffset={3} sm={8} smOffset={2}>
                  {
                    this.state.showSignup ?
                    <Login />
                    :
                    <Signup />
                  }
                </Col>
              </Row>
            </div>
          </div>
          <Button bsStyle="link" onClick={() => this.setState({showSignup: !this.state.showSignup})} style={{marginTop: '-500px', color: 'white', }}>
            {
              this.state.showSignup ?
              'Signup instead'
              :
              'Login instead'
            }
          </Button>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
