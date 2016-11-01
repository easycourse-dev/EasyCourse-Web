import React, { Component, PropTypes as PT } from 'react';
import { Button, FormGroup, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { signup } from './redux/actions/user';

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
      <div className="SignupPageBackground">
        <div className="container LoginPageWrapper">
          <Row className="SignupPage">
            <Col lg={4} lgOffset={4} md={6} mdOffset={3} sm={8} smOffset={2}>
                <h2 className="PageTitle">
                  Sign Up
                </h2>
                <form onSubmit={handleSubmit(this.submit)}>
                <FormGroup className="signupForm">
                  <Field className="form-control" name="email" component="input" type="text" placeholder="Email"/>
                  <Field className="form-control" name="password" component="input" type="password" placeholder="Password"/>
                  <Field className="form-control" name="passwordConfirmation" component="input" type="password" placeholder="Confirm Password"/>
                  <Field className="form-control" name="displayName" component="input" type="text" placeholder="Username"/>
                  <Button className="signupFormSubmitButton" bsStyle="primary" type="submit">Signup</Button>
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
  form: 'signup',
})(Signup);
