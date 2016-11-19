import React, { Component, PropTypes as PT } from 'react';
import { Button } from 'react-bootstrap';
import { signUpSetUpChooseUniversity } from '../redux/actions/user';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ChooseSchool extends Component {

  static propTypes = {
    handleSubmit: PT.func
  };

  selectSchool(school) {
    signUpSetUpChooseUniversity(school);
  };

  render() {
    return (
      <div>
        <h2 className="SignUpSetupPageTitle" key="loginFormTitle">
          Where Do You Go To School?
        </h2>
        <Button className="SignUpSetupChooseUniversityListItem" bsStyle="primary" type="submit" onClick={() => this.selectSchool('Purdue')}>Purdue</Button>
      </div>
    );
  }
}
