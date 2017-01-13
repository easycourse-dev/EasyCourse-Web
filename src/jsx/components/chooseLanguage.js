import React, { Component } from 'react'
import { Button, Col } from 'react-bootstrap'
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
            Choose Language / Region
          </h2>
        </div>
        <div style={{ overflowY: 'scroll', height: 270 }}>
          <ChooseLanguageList />
        </div>
        <Col lg={12} md={12} sm={12} style={{ display: 'table'}}>
          <div style={{ display: 'table', margin: '0 auto', paddingTop: 15}}>
            <Button
              className="NextPreviousButton"
              onClick={() => this.props.changeSignupStage(2)}
            >Back</Button>
            <Button
              className="NextPreviousButton"
              onClick={() => this.onFinish()}
            >Finish</Button>
          </div>
        </Col>
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
