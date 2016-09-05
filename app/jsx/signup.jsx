import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

export default class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <h2 style={{'textAlign': 'center'}}>
          Sign up
        </h2>
        <form>
          <FormGroup className="signupForm">
            <FormControl type="email" placeholder="email" />
            <FormControl type="password" placeholder="password" />
            <FormControl type="text" placeholder="university" />
            <Button className="signupFormSubmitButton" bsStyle="primary" type="submit">Signup</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}
