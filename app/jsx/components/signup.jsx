import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

export default class Signup extends Component {
  signup(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="Signup">
        <h2 style={{'textAlign': 'center'}}>
          Sign up
        </h2>
        <form onSubmit={(e)=>{e.preventDefault(); this.signup(e);}}>
          <FormGroup className="signupForm">
            <FormControl type="email" placeholder="email" />
            <FormControl type="password" placeholder="password" />
            <FormControl type="password" placeholder="verify password" />
            <FormControl type="text" placeholder="username" />
            <Button className="signupFormSubmitButton" bsStyle="primary" type="submit">Signup</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}
