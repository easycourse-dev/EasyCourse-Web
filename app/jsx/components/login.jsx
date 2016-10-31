import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import {Field, reduxForm } from 'redux-form';
import { login } from '../redux/actions/user';

class Login extends Component {

  submit(values) {
    login(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2 style={{'textAlign': 'center'}}>
          Log in
        </h2>
        <form onSubmit={handleSubmit(this.submit)}>
          <FormGroup className="loginForm">
            <Field className="form-control" name="email" component="input" type="text" placeholder="Email"/>
            <Field className="form-control" name="password" component="input" type="password" placeholder="Password"/>
            <Button className="loginFormSubmitButton" bsStyle="primary" type="submit">Login</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login',
})(Login);
