import React, { Component } from 'react'
import { Button, FormGroup, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import actions from '../redux/actions/index'
import ChooseCourseList from './chooseCourseList'

class ChooseCourse extends Component {
  state = { searchText: '' }

  renderCourses = (availableCourses, selectedCourses) => {
    const { searchText } = this.props
    if (searchText.length > 0) {
      return availableCourses.map(course => {
        return(
          <Button
            className="SignupListItem"
            onClick={() => this.props.addCourse(course)}
          >{course.name}</Button>
        )
      })
    } else {
      return selectedCourses.map(course => {
        return(
          <Button
            className="SignupListItem"
            onClick={() => this.props.removeSelectedCourse(course)}
          >{course.name}</Button>
        )
      })
    }
  }


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

  render() {
    const { selectedCourses } = this.props
    const { searchText } = this.state
    return (
      <div>
        <h2 className="PageTitle">
          What Classes Are You In?
        </h2>
        <div>
          <form>
            <FormGroup>
              <FormControl
                type="text"
                value={searchText}
                placeholder="Search For A Class"
                onChange={(e) => this.handleChange(e)}
              />
            </FormGroup>
          </form>
        </div>
        <div style={{ overflowY: 'scroll', height: 270}}>
          <ChooseCourseList />
        </div>
        {
          selectedCourses.length < 1 ?
            <div style={{ height: 100}}>
              <Button
                className="NextPreviousButton"
                onClick={() => this.props.changeSignupStage(1)}
              >Previous</Button>
            </div>
          :
            <div>
                <Button
                  className="NextPreviousButton"
                  onClick={() => this.props.changeSignupStage(1)}
                >Previous</Button>
                <Button
                  className="NextPreviousButton"
                  onClick={() => this.props.changeSignupStage(3)}
                >Next</Button>
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  availableCourses: state.courses.coursesBySchool,
  selectedCourses: state.courses.selectedCourses,
  universityId: state.university.selectedUniversity,
  searchText: state.courses.searchText,
  skip: state.courses.skip
})

export default connect(
  mapStateToProps,
  actions
)(ChooseCourse);
