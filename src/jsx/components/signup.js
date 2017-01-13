import React, { Component } from 'react'
import { Button, FormGroup } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import actions from '../redux/actions/index'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const validate = values => {
  const { password, passwordConfirmation, displayName } = values
  const errors = {}

  if (password && password.length < 8) {
    errors.password = 'Password must be 8 to 32 characters long'
  }

  if (passwordConfirmation && passwordConfirmation.length < 8) {
    errors.password = 'Password must be 8 to 32 characters long'
  }

  if (password !== passwordConfirmation) {
    errors.passwordConfirmation = 'Passwords must match'
  }

  if (displayName && displayName.length < 6) {
    errors.displayName = 'Display Name must be longer than 6 characters'
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address'
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

class Signup extends Component {

  render() {
    const { handleSubmit, signup } = this.props

    return (
      <ReactCSSTransitionGroup
        transitionName={{
          enter: 'FadeIn-enter',
          enterActive: 'FadeIn-enterActive',
          leave: 'FadeIn-leave',
          leaveActive: 'FadeIn-leaveActive',
          appear: 'FadeIn-appear',
          appearActive: 'FadeIn-appearActive'
        }}
        transitionEnterTimeout={500}
        transitionEnter
        transitionLeaveTimeout={500}
        transitionLeave
        transitionAppearTimeout={500}
        transitionAppear>
        <h2 className="PageTitle" key="signupFormTitle">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(signup)} key="signupForm">
          <FormGroup className="Form">
            <Field
              name="email"
              component={validatedInput}
              type="email"
              label="Email"
            />
            <Field
              className="form-control"
              name="password"
              component={validatedInput}
              type="password"
              label="Password"
            />
            <Field
              className="form-control"
              name="passwordConfirmation"
              component={validatedInput}
              type="password"
              label="Confirm Password"
            />
            <Field
              className="form-control"
              name="displayName"
              component={validatedInput}
              type="text"
              label="Username"
            />
            <Button className="FormSubmitButton LoginSubmitButton" bsStyle="primary" type="submit">Signup</Button>
          </FormGroup>
        </form>
      </ReactCSSTransitionGroup>
    );
  }
}

Signup = connect(null, actions)(Signup)

export default reduxForm({
  form: 'signupForm',
  validate,
  warn
})(Signup)
