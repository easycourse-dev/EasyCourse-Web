import React, { Component, PropTypes as PT } from 'react';
import { Button, FormGroup, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { login } from '../redux/actions/user';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
    <input
      style={{borderBottomColor: (touched && error)? '#F44336' : '#2BBBAD'}}
      {...input}
      className="form-control"
      placeholder={label}
      type={type}
     />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
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
          Log In
        </h2>
        <form onSubmit={handleSubmit(this.submit)}>
          <FormGroup className="Form">
            <Field
              className="form-control"
              name="email"
              type="email"
              component={validatedInput}
              label="Email"
            />
            <Field
              className="form-control"
              name="password"
              component={validatedInput}
              type="password"
              label="Password"
            />
            <Button className="FormSubmitButton LoginSubmitButton" bsStyle="primary" type="submit">Login</Button>
          </FormGroup>
        </form>
      </ReactCSSTransitionGroup>
    );
  }
}

export default reduxForm({
  form: 'login',
  validate,
  warn
})(Login);
