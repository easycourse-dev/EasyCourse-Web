import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class ChooseCourse extends Component {
  render() {
    return (
      <div>
        <h2 className="PageTitle" key="loginFormTitle">
          Speak Any Other Languages?
        </h2>
        <Button bsStyle="primary">Spanish</Button>
        <Button
          bsStyle="warning"
        >Previous</Button>
        <Button
          bsStyle="success"
        >Next</Button>
      </div>
    );
  }
}
