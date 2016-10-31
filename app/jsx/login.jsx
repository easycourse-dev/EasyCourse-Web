import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { login } from './redux/actions/user';

class Login extends Component {

  submit(values) {
    login(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Row>
        <Col lg={8} md={10} lgOffset={2} mdOffset={1} sm={12}>
          <div className="LoginPage">
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
        </Col>
      </Row>
    );
  }
}

export default reduxForm({
  form: 'login',
})(Login);
