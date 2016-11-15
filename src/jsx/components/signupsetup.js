import React, { Component, PropTypes as PT } from 'react';
import { Button } from 'react-bootstrap';
import { signUpSetUpChooseUniversity } from '../redux/actions/user';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class SignUpSetUp extends Component {

  static propTypes = {
    handleSubmit: PT.func
  };

  selectSchool(school) {
    signUpSetUpChooseUniversity(school);
  };

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName={ {
          enter: 'FadeIn-enter',
          enterActive: 'FadeIn-enterActive',
          leave: 'FadeIn-leave',
          leaveActive: 'FadeIn-leaveActive',
          appear: 'FadeIn-appear',
          appearActive: 'FadeIn-appearActive'
        } }
        transitionEnterTimeout={500}
        transitionEnter
        transitionLeaveTimeout={500}
        transitionLeave
        transitionAppearTimeout={500}
        transitionAppear>
        <h2 className="PageTitle" key="loginFormTitle">
          Choose Your School
        </h2>
        <Button bsStyle="primary" type="submit" onClick={() => this.selectSchool('Purdue')}>Purdue</Button>
      </ReactCSSTransitionGroup>
    );
  }
}
