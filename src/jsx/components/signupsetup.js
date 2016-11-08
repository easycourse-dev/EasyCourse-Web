import React, { Component, PropTypes as PT } from 'react';
import { Button, FormGroup } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signUpSetUp } from '../redux/actions/user';
import { getUniversities } from '../redux/actions/universities';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SignUpSetUp extends Component {

  static propTypes = {
    handleSubmit: PT.func
  };

  submit(values) {
    signUpSetUp(values);
  };

  componentWillMount() {
    getUniversities();
  }

  render() {
    const { handleSubmit, universities } = this.props;
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
        <form onSubmit={handleSubmit(this.submit)} key="signUpSetUpForm">
          <FormGroup className="Form">
            <Field className="form-control" name="university" component="select">
              <option></option>
              {
                universities.map(university => {
                  return <option>{university.name}</option>
                })
              }
            </Field>
            <Button className="FormSubmitButton LoginSubmitButton" bsStyle="primary" type="submit">Add School</Button>
          </FormGroup>
        </form>
      </ReactCSSTransitionGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    universities: state.universities.universities
  };
}

SignUpSetUp = reduxForm({
  form: 'signUpSetUp',
})(SignUpSetUp)

SignUpSetup = connect(null, mapStateToProps);

export default SignUpSetup;
