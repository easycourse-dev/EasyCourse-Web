import React, { Component, PropTypes as PT } from 'react';
import { Button, FormGroup, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { login } from '../redux/actions/user';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
}

const warn = values => {
  const warnings = {}
  if (values.password && (values.password.length > 1 && values.password.lenght < 6)) {
    warnings.password = 'Password must be longer than 6 characters';
  }

  return warnings;
}

const validatedInput = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <input
        style={{borderBottomColor: error ? '#F44336' : '#2BBBAD'}} 
        {...input}
        className="form-control"
        placeholder={label}
        type={type}
       />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)



class Login extends Component {

  static propTypes = {
    handleSubmit: PT.func
  };

  submit(values) {
    login(values);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2 className="PageTitle">
          Log In
        </h2>
        <form onSubmit={handleSubmit(this.submit)}>
          <FormGroup className="loginForm">
            <Field
              name="email"
              type="email"
              component={validatedInput}
              label="Email"
            />
            <Field
              name="password"
              component={validatedInput}
              type="password"
              label="Password"
            />
            <Button className="loginFormSubmitButton" bsStyle="primary" type="submit">Login</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login',
  validate,
  warn
})(Login);
