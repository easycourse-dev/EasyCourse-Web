import React, { Component } from 'react'
import Login from './components/login'
import Signup from './components/signup'
import SignUpSetup from './components/signupsetup'
import { Row, Col } from 'react-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import NavBar from './components/navBar'

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSignup: false
    }
  }

  render() {
    const { initialSignUpComplete } = this.props;
    return (
      <div>
        <NavBar />
        <div className="SignInBackground">
          <ReactCSSTransitionGroup
            transitionName={ {
              enter: 'FadeIn-enter',
              enterActive: 'FadeIn-enterActive',
              leave: 'FadeIn-leave',
              leaveActive: 'FadeIn-leaveActive',
              appear: 'FadeIn-appear',
              appearActive: 'FadeIn-appearActive'
            } }
            transitionEnterTimeout={500}
            transitionEnter
            transitionLeaveTimeout={500}
            transitionLeave
            transitionAppearTimeout={500}
            transitionAppear>
            <div className="container SignInFormWrapper" key="signinForm">
              <Row className="SignInFormRow">
                <Col lg={4} lgOffset={4} md={6} mdOffset={3} sm={8} smOffset={2}>
                  <div className="SignInForm">
                    {
                      initialSignUpComplete ?
                        <SignUpSetup/>
                      :
                        this.state.showSignup ? <Signup /> : <Login />
                    }
                    <div className="SignInSwitchButtonWrapper">
                      <a className="SignInSwitch btn btn-link" id="SignInSwitch" onClick={() => this.setState({showSignup: !this.state.showSignup})}>
                        {
                          this.state.showSignup ?
                          'Already have an account?'
                          :
                          "Don't have an account?"
                        }
                      </a>
                    </div>
                  </div>
                  <p className="SignInFooterText">
                    @2016 Colevate Inc.
                  </p>
                </Col>
              </Row>
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    initialSignUpComplete: state.user.initialSignUpComplete
  };
}

export default connect(mapStateToProps, null)(SignIn);
