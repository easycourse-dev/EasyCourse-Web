import React, { Component, PropTypes as PT } from 'react';
import { Button, FormGroup, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { login } from '../redux/actions/user';

class Login extends Component {

  static propTypes = {
    handleSubmit: PT.func
  };

  submit(values) {
    login(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2 className="PageTitle">
          Log In
        </h2>
        <form onSubmit={handleSubmit(this.submit)}>
          <FormGroup className="Form">
            <Field className="form-control" name="email" component="input" type="text" placeholder="Email"/>
            <Field className="form-control" name="password" component="input" type="password" placeholder="Password"/>
            <Button className="FormSubmitButton" bsStyle="primary" type="submit">Login</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login',
})(Login);
