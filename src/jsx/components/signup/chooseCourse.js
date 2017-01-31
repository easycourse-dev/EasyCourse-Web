import React, { Component } from 'react'
import { Button, FormGroup, FormControl, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import actions from '../../redux/actions/index'
import ChooseCourseList from './chooseCourseList'

class ChooseCourse extends Component {

  state = { searchText: '' }

  handleChange = e => {
    const { universityId } = this.props
    if (e.target.value.length === 0) {
      this.props.clearSkip()
      this.props.clearSearchText()
    }
    this.setState({ searchText: e.target.value })
    if (e.target.value.length >= 2) {
      this.props.getCourses(e.target.value, universityId)
    } else {
      return;
    }
  }

  onFinish = () => {
    const {
      selectedCourses,
      universityId,
      displayName
    } = this.props
    this.props.finishSignup(universityId, selectedCourses, displayName)
  }

  render() {
    const { selectedCourses } = this.props
    const { searchText } = this.state
    return (
      <div>
        <h2 className="PageTitle">
          Choose courses
        </h2>
        <div>
          <form>
            <FormGroup>
              <FormControl
                type="text"
                value={searchText}
                placeholder="e.g. CS 240"
                onChange={(e) => this.handleChange(e)}
              />
            </FormGroup>
          </form>
        </div>
        <div style={{ overflowY: 'scroll', height: 270}}>
          <ChooseCourseList />
        </div>
        <div>
          <Col lg={12} md={12} sm={12} style={{ display: 'table'}}>
            {
              selectedCourses.length < 1 ?
                <div style={{ display: 'table', margin: '0 auto', paddingTop: 10 }}>
                  <Button
                    className="NextPreviousButton"
                    onClick={() => this.props.changeSignupStage(1)}
                  >Back</Button>
                </div>
              :
                <div style={{ display: 'table', margin: '0 auto', paddingTop: 10 }}>
                  <Button
                    className="NextPreviousButton"
                    onClick={() => this.props.changeSignupStage(1)}
                  >Back</Button>
                  <Button
                    className="NextPreviousButton"
                    onClick={() => this.onFinish()}
                  >Finish</Button>
                </div>
            }
          </Col>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    availableCourses: state.courses.coursesBySchool,
    selectedCourses: state.courses.selectedCourses,
    universityId: state.university.selectedUniversity,
    searchText: state.courses.searchText,
    skip: state.courses.skip,
    displayName: state.user.current_user.displayName
  }),
  actions
)(ChooseCourse);
