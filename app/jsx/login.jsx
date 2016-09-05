import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h2 style={{'textAlign': 'center'}}>
          Log in
        </h2>
        <form>
          <FormGroup className="loginForm">
            <FormControl type="email" placeholder="email" />
            <FormControl type="password" placeholder="password" />
            <Button className="loginFormSubmitButton" bsStyle="primary" type="submit">Login</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}
