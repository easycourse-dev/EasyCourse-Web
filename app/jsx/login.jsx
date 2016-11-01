import React, { Component, PropTypes as PT } from 'react';
import { Button, FormGroup, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { login } from './redux/actions/user';

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
      <div className="LoginPageBackground">
        <div className="container LoginPageWrapper">
          <Row className="LoginPage">
            <Col lg={4} lgOffset={4} md={6} mdOffset={3} sm={8} smOffset={2}>
                <h2 className="PageTitle">
                  Log In
                </h2>
                <form onSubmit={handleSubmit(this.submit)}>
                  <FormGroup className="loginForm">
                    <Field className="form-control" name="email" component="input" type="text" placeholder="Email"/>
                    <Field className="form-control" name="password" component="input" type="password" placeholder="Password"/>
                    <Button className="loginFormSubmitButton" bsStyle="primary" type="submit">Login</Button>
                  </FormGroup>
                </form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login',
})(Login);
