import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  getCourses,
  addSelectedCourse,
  removeSelectedCourse
} from '../redux/actions/courses';

class ChooseCourse extends Component {
  state = {
    searchText: '',
    coursesToShow: []
  }

  updateCourses = (universityID) => {
    getCourses(this.state.searchText, universityID)
  }

  onAddCourse = (course) => {
    addSelectedCourse(course)
  }

  onRemoveSelectedCourse = (course) => {
    removeSelectedCourse(course)
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
                this.updateCourses(universityID)
              }}
            />
          </FormGroup>
        </form>
        <ul style={{ listStyle: 'none' }}>
          {
            this.renderCourses(availableCourses, selectedCourses)
          }
        </ul>
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
