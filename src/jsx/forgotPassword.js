import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { actions } from './redux/actions/index'
import { Button, FormGroup } from 'react-bootstrap'

const jwtDecode = require('jwt-decode')

const validate = values => {
  const errors = {}

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (values.password && values.password.length < 6) {
    errors.password = 'Password must be longer than 6 characters'
  }

  if (values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Passwords must match'
  }

  if (values.displayName && values.displayName.length < 6) {
    errors.displayName = 'Display Name must be longer than 6 characters'
  }

  return errors;
}

const warn = values => {
  const warnings = {}
  if (values.password) {
    warnings.password = ''
  }

  return warnings;
}

const validatedInput = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <input
      style={{borderBottomColor: (touched && error) ? '#F44336' : '#2BBBAD'}}
      {...input}
      className="form-control"
      placeholder={label}
      type={type}
    />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)

class ForgotPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: ''
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

  handleFormSubmit = (values) => {
    const { token } = this.state
    console.log('Values: ', values)
    console.log('Token: ', token)
  }

  render() {
    const { handleSubmit, updatePassword } = this.props
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
                    <Field
                      className="form-control"
                      name="password"
                      component={validatedInput}
                      type="password"
                      label="New Password"
                    />
                    <Field
                      className="form-control"
                      name="passwordConfirmation"
                      component={validatedInput}
                      type="password"
                      label="Confirm New Password"
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

export default reduxForm({
  form: 'updatePassword',
  validate,
  warn
})(ForgotPassword)
