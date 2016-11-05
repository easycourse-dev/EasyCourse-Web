import React, { Component, PropTypes as PT } from 'react';
import { Button, FormGroup, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { signup } from '../redux/actions/user';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const validate = values => {
  const errors = {};

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.password && values.password.length < 6) {
    errors.password = 'Password must be longer than 6 characters';
  }

  if (values.password != values.passwordConfirmation) {
    errors.passwordConfirmation = 'Passwords must match'
  }

  if(values.displayName && values.displayName.length < 6) {
    errors.displayName = 'Display Name must be longer than 6 characters'
  }

  return errors;
}

const warn = values => {
  const warnings = {}
  if (values.password) {
    warnings.password = '';
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

  static propTypes = {
    handleSubmit: PT.func
  };

  submit(values) {
    signup(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
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
        <h2 className="PageTitle">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(this.submit)}>
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

export default reduxForm({
  form: 'signup',
  validate,
  warn
})(Signup);
