import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import actions from './redux/actions/index'
import { Field, reduxForm } from 'redux-form'
import { Button, FormGroup, Modal } from 'react-bootstrap'

const validate = values => {
  const errors = {}
  const { password, passwordConfirmation } = values
  if (!password) {
    errors.password = 'Password Required'
  }

  if (!passwordConfirmation) {
    errors.passwordConfirmation = 'Confirm Password Required'
  }

  if (password !== passwordConfirmation) {
    errors.passwordConfirmation = 'Passwords must match'
    errors.password = 'Passwords must match'
  }

  if (password && (password.length > 1 && password.length < 8)) {
    errors.password = 'Password must be 8-32 characters long'
  }

  if (passwordConfirmation && (passwordConfirmation.length > 1 && passwordConfirmation.length < 8)) {
    errors.passwordConfirmation = 'Password must be 8-32 characters long'
  }

  if (password && password.length > 32) {
    errors.password = 'Password must be 8-32 characters long'
  }

  if (passwordConfirmation && passwordConfirmation.length > 32) {
    errors.passwordConfirmation = 'Password must be 8-32 characters long'
  }
  return errors
}

const warn = values => {
  const warnings = {}
  return warnings
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
      token: '',
      showPasswordModal: false,
      showTokenModal: false
    }
  }

  componentWillMount() {
    const { location } = this.props
    let token = location.query.token
    this.setState({
      token
    })
    this.props.validateToken(token)
  }

  componentDidMount() {
    setTimeout(() => {
      const { validateTokenResponseError } = this.props
      if (validateTokenResponseError) {
        this.setState({
          showTokenModal: true
        })
      }
    }, 1000)
  }

  handleFormSubmit = (values) => {
    const { token } = this.state
    const { password, passwordConfirmation } = values
    this.props.resetPassword(password, passwordConfirmation, token)
    setTimeout(() => {
      this.setState({ showPasswordModal: true })
    }, 1500)
  }

  hidePasswordModal = () => {
    this.setState({ showPasswordModal: false })
  }

  hideTokenModal = () => {
    this.setState({ showTokenModal: false })
  }

  goToHomePage = () => {
    this.setState({ showPasswordModal: false })
    browserHistory.push('/')
  }

  render() {
    const {
      handleSubmit,
      response,
      validateTokenResponseError
    } = this.props
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
                <div className="SignInForm">
                  <h2 className="PageTitle" key="loginFormTitle">
                    Forgot Your Password?
                  </h2>
                  <form onSubmit={handleSubmit(this.handleFormSubmit)} key="forgotPasswordForm">
                    <FormGroup className="Form">
                      <Field
                        className="form-control"
                        name="password"
                        type="password"
                        component={validatedInput}
                        label="Password"
                      />
                      <Field
                        className="form-control"
                        name="passwordConfirmation"
                        component={validatedInput}
                        type="password"
                        label="Confirm Password"
                      />
                      {
                        validateTokenResponseError ?
                          <Button
                            className="FormSubmitButton LoginSubmitButton"
                            bsStyle="primary"
                            type="submit"
                            disabled
                          >Reset Password</Button>
                        :
                          <Button
                            className="FormSubmitButton LoginSubmitButton"
                            bsStyle="primary"
                            type="submit"
                          >Reset Password</Button>
                      }
                    </FormGroup>
                  </form>
                  <p className="SignInFooterText">
                    @2016 Colevate Inc.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </ReactCSSTransitionGroup>
        <Modal show={this.state.showPasswordModal} onHide={() => this.hidePasswordModal()}>
          <Modal.Header closeButton>
            {
              response === 200 ?
                <Modal.Title>Password successfully reset!</Modal.Title>
              :
                <Modal.Title>Password Error</Modal.Title>
            }

          </Modal.Header>
          <Modal.Body>
            {
              response === 200 ?
                <h5>Go ahead and give your new password a go</h5>
              :
                <h4>
                  Something went wrong when trying to reset your password.
                  Try again or request another reset password email.
                </h4>
            }
          </Modal.Body>
          <Modal.Footer>
            {
              response === 200 ?
                <Button onClick={() => this.goToHomePage()}>Go Home</Button>
              :
                ''
            }
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.showTokenModal} onHide={() => this.hideTokenModal()}>
          <Modal.Header closeButton>
            <Modal.Title>Password Reset Token Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div>
                <h5>
                  Sorry we won't be able to reset your password at this time.
                  Please request another email and reset your password.
                </h5>
              </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state.user.response,
  validateTokenResponseSuccess: state.user.validateTokenResponseSuccess,
  validateTokenResponseError: state.user.validateTokenResponseError
})

ForgotPassword = reduxForm({
  form: 'forgotPassword',
  validate,
  warn
})(ForgotPassword)

ForgotPassword = connect(mapStateToProps, actions)(ForgotPassword)

export default ForgotPassword
