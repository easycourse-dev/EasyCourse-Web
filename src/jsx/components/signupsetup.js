import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChooseCourse from './chooseCourse';
import ChooseSchool from './chooseSchool';

class SignUpSetUp extends Component {

  componentDidMount() {
    document.getElementById("SignInSwitch").className += " hideElement"
  }

  renderSignUpStage(signUpStage) {
    switch(signUpStage) {
      case 1:
        return <ChooseSchool />
      case 2:
        return <ChooseCourse />
      default:
        return <ChooseSchool />
    }
  }
  render() {
    const { signUpStage } = this.props;
    return (
      <div>
        {this.renderSignUpStage(signUpStage)}
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
