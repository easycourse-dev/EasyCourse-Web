import React, { Component, PropTypes as PT } from 'react';
import { Button } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ChooseClass extends Component {
  render() {
    return (
      <div>
        <h2 className="PageTitle" key="loginFormTitle">
          What Classes Are You In?
        </h2>
      </div>
    );
  }
}
