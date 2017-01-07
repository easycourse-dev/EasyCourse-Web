import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { actions } from './redux/actions/index'
import { Button, FormGroup } from 'react-bootstrap'

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
    let token = jwtDecode(location.query.token)
    console.log('Decomposed token: ', token)
    this.setState({
      token
    })
  }

  handleFormSubmit = () => {
    const { token, password, passwordConfirmation } = this.state
    console.log('handleSubmit Token: ', token)
    console.log('handleSubmit Password: ', password)
    console.log('handleSubmit Password Confirmation: ', passwordConfirmation)
  }
  
  handlePasswordChange = (password) => {
    this.setState({ passsword })
  }
  
  handlePasswordConfirmationChange = (passwordConfirmation) => {
    this.setState({ passswordConfirmation })
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
                <form onSubmit={() => handleSubmit(this.handleFormSubmit)} key="forgotPasswordForm">
                  <FormGroup className="Form">
                    <FormControl
                      type="text"
                      value={this.state.password}
                      placeholder="New Password"
                      onChange={(password) => this.handlePasswordChange(password)}
                    /> 
                    <FormControl
                      type="text"
                      value={this.state.passwordConfirmation}
                      placeholder="Confirm New Password"
                      onChange={(passwordConfirmation) => this.handlePasswordConfirmationChange(passwordConfirmation)}
                    /> 
                    <Button className="FormSubmitButton LoginSubmitButton" bsStyle="primary" type="submit">Update Password</Button>
                  </FormGroup>
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

ForgotPassword = connect(null, actions)(ForgotPassword)
