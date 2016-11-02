import React, { Component, PropTypes as PT } from 'react';
import { Button, FormGroup, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { signup } from '../redux/actions/user';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Signup extends Component {

  static propTypes = {
    handleSubmit: PT.func
  };

  submit(values) {
    signup(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <ReactCSSTransitionGroup
      transitionName={ {
        enter: 'SignInFormSwitchAnimation-enter',
        enterActive: 'SignInFormSwitchAnimation-enterActive',
        leave: 'SignInFormSwitchAnimation-leave',
        leaveActive: 'SignInFormSwitchAnimation-leaveActive',
        appear: 'SignInFormSwitchAnimation-appear',
        appearActive: 'SignInFormSwitchAnimation-appearActive'
      } }
      transitionEnterTimeout={500}
      transitionEnter
      transitionLeaveTimeout={500}
      transitionLeave
      transitionAppearTimeout={500}
      transitionAppear>
        <h2 className="PageTitle">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(this.submit)}>
          <FormGroup className="Form">
            <Field className="form-control" name="email" component="input" type="text" placeholder="Email"/>
            <Field className="form-control" name="password" component="input" type="password" placeholder="Password"/>
            <Field className="form-control" name="passwordConfirmation" component="input" type="password" placeholder="Confirm Password"/>
            <Field className="form-control" name="displayName" component="input" type="text" placeholder="Username"/>
            <Button className="FormSubmitButton" bsStyle="primary" type="submit">Signup</Button>
          </FormGroup>
        </form>
      </ReactCSSTransitionGroup>
    );
  }
}

export default reduxForm({
  form: 'signup',
})(Signup);
