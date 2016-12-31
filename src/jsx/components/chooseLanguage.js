import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import actions from '../redux/actions/index'
import ChooseLanguageList from './chooseLanguageList'

class ChooseLanguage extends Component {

  onChooseLanguages = () => {
    const { selectedLanguages } = this.props
    this.props.signUpSetUpChooseLanguages(selectedLanguages)
    this.onFinish()
  }

  onFinish = () => {
    const { languages, courses, selectedLanguages, universityId, displayName } = this.props
    setTimeout(this.props.finishSignup(languages, courses, universityId, selectedLanguages, displayName), 1500)
    console.log('Sign up finished')
  }

  render() {
    const { selectedCourses } = this.props
    return (
      <div>
        <h2 className="PageTitle" key="loginFormTitle">
          Speak Any Other Languages?
        </h2>
        <div style={{ overflowY: 'scroll', height: 300}}>
          <ChooseLanguageList />
        </div>
        <div>
          <Button
            bsStyle="warning"
            onClick={() => this.props.signUpSetUpChooseCourses(selectedCourses, 3)}
          >Previous</Button>
          <Button
            bsStyle="success"
            onClick={() => this.onChooseLanguages()}
          >Finish</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCourses: state.courses.selectedCourses,
  selectedLanguages: state.language.selectedLanguages,
  languages: state.user.languages,
  courses: state.user.courses,
  universityId: state.user.universityId,
  displayName: state.user.current_user.displayName
})

export default connect(
  mapStateToProps,
  actions
)(ChooseLanguage)
