import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import actions from './redux/actions/index'
import { Button, FormGroup, FormControl } from 'react-bootstrap'

const jwtDecode = require('jwt-decode')

class ForgotPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  componentDidMount() {
    const { location } = this.props
    let token = location.query.token
    console.log('componentDidMount Token: ', token)
    this.setState({
      token
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    const { token, password, passwordConfirmation } = this.state
    console.log('Token: ', token)
    if (password.length < 6 || passwordConfirmation.length < 6) {
      alert('Password must be greater than 6 characters long')
      return
    } else if (password !== passwordConfirmation) {
      alert('Passwords must match')
      return
    }

    this.props.updatePassword(password, passwordConfirmation, token)
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  handlePasswordConfirmationChange = (e) => {
    this.setState({ passwordConfirmation: e.target.value })
  }

  render() {
    return (
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
                <h2 className="PageTitle" key="loginFormTitle">
                  Forgot Your Password?
                </h2>
                <form onSubmit={this.handleFormSubmit} key="forgotPasswordForm">
                  <FormGroup className="Form">
                    <FormControl
                      type="password"
                      value={this.state.password}
                      placeholder="New Password"
                      onChange={(e) => this.handlePasswordChange(e)}
                    />
                  </FormGroup>
                  <FormGroup className="Form">
                    <FormControl
                      type="password"
                      value={this.state.passwordConfirmation}
                      placeholder="Confirm New Password"
                      onChange={(e) => this.handlePasswordConfirmationChange(e)}
                    />
                  </FormGroup>
                  <Button
                    className="FormSubmitButton LoginSubmitButton"
                    bsStyle="primary"
                    type="submit"
                  >Update Password</Button>
                  {/*Your password has been updated or false*/}
                </form>
                <p className="SignInFooterText">
                  @2016 Colevate Inc.
                </p>
              </Col>
            </Row>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default connect(null, actions)(ForgotPassword)
