import React, { Component, PropTypes as PT } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import ChooseCourse from './chooseCourse';
import ChooseLanguage from './chooseLanguage';
import ChooseSchool from './chooseSchool';

class SignUpSetUp extends Component {
  renderSignUpStage(signUpStage) {
    switch(signUpStage) {
      case 1:
        return <ChooseSchool />
      case 2:
        return <ChooseCourse />
      case 3:
        return <ChooseLanguage />
      default:
        return <ChooseSchool />
    }
  }
  render() {
    const { signUpStage } = this.props;
    return (
      <div>
        {
          this.renderSignUpStage(signUpStage)
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    signUpStage: state.user.signUpStage
  }
}

export default connect(mapStateToProps, null)(SignUpSetUp);
