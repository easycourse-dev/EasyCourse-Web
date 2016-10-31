import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { signup } from '../redux/actions/user';

class Signup extends Component {

  submit(values) {
    signup(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <div className="Signup">
        <h2 style={{'textAlign': 'center'}}>
          Sign up
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
      </div>
    )
  }
}

export default reduxForm({
  form: 'signup',
})(Signup);
