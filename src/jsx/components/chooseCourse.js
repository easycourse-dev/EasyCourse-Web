import React, { Component, PropTypes as PT } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ChooseCourse extends Component {
  render() {
    return (
      <div>
        <h2 className="PageTitle" key="loginFormTitle">
          What Classes Are You In?
        </h2>
        <form>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Search For A Class"
            />
          </FormGroup>
        </form>
      </div>
    );
  }
}
