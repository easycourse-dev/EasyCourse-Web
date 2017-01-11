import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import actions from '../redux/actions/index'
import ChooseLanguageList from './chooseLanguageList'

class ChooseLanguage extends Component {

  onFinish = () => {
    const {
      selectedLanguages,
      selectedCourses,
      universityId,
      displayName
    } = this.props
    this.props.finishSignup(universityId, selectedLanguages, selectedCourses, displayName)
  }

  render() {
    return (
      <div>
        <div>
          <h2 className="PageTitle" key="loginFormTitle">
            Speak Any Other Languages?
          </h2>
        </div>
        <div style={{ overflowY: 'scroll', height: 270 }}>
          <ChooseLanguageList />
        </div>
        <div>
          <Button
            className="NextPreviousButton"
            onClick={() => this.props.changeSignupStage(2)}
          >Previous</Button>
          <Button
            className="NextPreviousButton"
            onClick={() => this.onFinish()}
          >Finish</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCourses: state.courses.selectedCourses,
  selectedLanguages: state.language.selectedLanguages,
  universityId: state.user.universityId,
  displayName: state.user.current_user.displayName
})

export default connect(
  mapStateToProps,
  actions
)(ChooseLanguage)
