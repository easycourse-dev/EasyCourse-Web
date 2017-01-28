import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import actions from './redux/actions/index'
import { Field, reduxForm } from 'redux-form'
import { Button, FormGroup, Modal } from 'react-bootstrap'
import Footer from './components/footer'
import NavBar from './components/navBar'


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
      validateTokenResponseError,
      validateTokenResponseSuccess
    } = this.props
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
                        <Button
                          className="FormSubmitButton LoginSubmitButton"
                          bsStyle="primary"
                          type="submit"
                        >Reset Password</Button>
                      </FormGroup>
                    </form>
                  </div>
                </Col>
              </Row>
            </div>
          </ReactCSSTransitionGroup>
          <Footer />
          <Modal show={this.state.showPasswordModal} onHide={() => this.hidePasswordModal()}>
            <Modal.Body>
              {
                response === 200 ?
                  <h4>Password successfully reset!</h4>
                :
                  <h4>Something went wrong when trying to reset your password</h4>
              }
            </Modal.Body>
            <Modal.Footer>
              {
                response === 200 ?
                  <Button onClick={() => this.goToHomePage()}>Go Home</Button>
                :
                  <Button onClick={() => this.hidePasswordModal()}>Close</Button>
              }
            </Modal.Footer>
          </Modal>
          <Modal show={this.state.showTokenModal} onHide={() => this.hideTokenModal()}>
            <Modal.Body>
              {
                validateTokenResponseSuccess.length > 1 ?
                  <div>
                    <h4>Token is valid</h4>
                  </div>
                :
                  <div>
                    <h4>Sorry your reset password token has expired</h4>
                    <h5>Please click the 'Send Verification Email' button for a new link</h5>
                  </div>
              }
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => this.hideTokenModal()}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
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
