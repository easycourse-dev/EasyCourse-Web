import React, { Component, PropTypes as PT } from 'react';
import { Button } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ChooseCourse extends Component {
  render() {
    return (
      <div>
        <h2 className="PageTitle" key="loginFormTitle">
          Speak Any Other Languages?
        </h2>
        <Button bsStyle="primary">Spanish</Button>
      </div>
    );
  }
}
