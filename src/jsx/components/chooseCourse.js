import React, { Component } from 'react'
import { Button, FormGroup, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getCourses } from '../redux/actions/courses'
import { signUpSetUpChooseCourses, signUpSetUpChooseUniversity } from '../redux/actions/user'
import ChooseCourseList from './chooseCourseList'

class ChooseCourse extends Component {
  state = {
    searchText: '',
    coursesToShow: []
  }

  updateCourses = (universityID) => {
    if (this.state.searchText.length > 1) {
    }
  }

  renderCourses = (availableCourses, selectedCourses) => {
    if (this.state.searchText) {
      return(
        availableCourses.map(course => {
          return(
            <Button
              className="SignupListItem"
              onClick={() => this.onAddCourse(course)}
            >{course.name}</Button>
          )
        })
      )
    } else {
      return(
        selectedCourses.map(course => {
          return(
            <Button
              className="SignupListItem"
              onClick={() => this.onRemoveSelectedCourse(course)}
            >{course.name}</Button>
          )
        })
      )
    }
  }

  render() {
    const { availableCourses, selectedCourses, universityID } = this.props;

    return (
      <div>
        <h2 className="PageTitle" key="loginFormTitle">
          What Classes Are You In?
        </h2>
        <form>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.searchText}
              placeholder="Search For A Class"
              onChange={(event) => {
                this.setState({ searchText: event.target.value })
                getCourses(event.target.value, universityID)
              }}
            />
          </FormGroup>
        </form>
        <div style={{ overflow: 'scroll', height: 300}}>
          <ChooseCourseList
            availableCourses={availableCourses}
            selectedCourses={selectedCourses}
            searchText={this.state.searchText}
          />
        </div>
        <Button
          bsStyle="warning"
          onClick={() => signUpSetUpChooseUniversity(universityID, 1)}
        >Previous</Button>
        <Button
          bsStyle="success"
          onClick={() => signUpSetUpChooseCourses(selectedCourses, 3)}
        >Next</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  availableCourses: state.courses.coursesBySchool,
  selectedCourses: state.courses.selectedCourses,
  universityID: state.user.postInitialSignUpValues.school
})
export default connect(mapStateToProps)(ChooseCourse);
