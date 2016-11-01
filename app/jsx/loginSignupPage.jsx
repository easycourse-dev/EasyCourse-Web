import React, { Component, PropTypes as PT } from 'react';
import { Login, Signup } from 'components';
import { Button } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class LoginSignupPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSignup: false
    };
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="LoginSignupPageBackground">
        <ReactCSSTransitionGroup
          transitionName="LoginSignupPageSwitch"
          transitionAppearTimeout={500}
          transitionAppear={true}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {
            this.state.showSignup ?
            <Login />
            :
            <Signup />
          }
          <Button bsStyle="link" onClick={() => this.setState({showSignup: !this.state.showSignup})} style={{marginTop: '-500px', color: 'white', }}>
            {
              this.state.showSignup ?
              'Signup instead'
              :
              'Login instead'
            }
          </Button>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
