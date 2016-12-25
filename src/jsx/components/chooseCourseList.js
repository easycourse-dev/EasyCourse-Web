import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import actions from '../redux/actions/index'

class ChooseCourseList extends Component {

  onAddCourse = (course) => {
    this.props.addSelectedCourse(course)
  }

  onRemoveSelectedCourse = (course) => {
    this.props.removeSelectedCourse(course)
  }
  
  loadMore = () => {
    const { searchText, skip, universityID } = this.props
    let newSkip = skip + 10
    this.props.loadMoreCourses(searchText, universityID, newSkip)
  }


  renderCourses = () => {
    const {availableCourses, selectedCourses, searchText} = this.props
    if (searchText.length >= 2) {
      return availableCourses.map(course => {
        if (selectedCourses.includes(course)) {
          return (
            <li key={course.originCourseId}>
              <Button
                className="SignupListItem"
                onClick={() => this.onRemoveSelectedCourse(course)}
              >
                <i className="fa fa-times" aria-hidden="true"></i>
                {course.name}
              </Button>
            </li>
          )
        } else {
          return (
            <li key={course.originCourseId}>
              <Button
                className="SignupListItem"
                onClick={() => this.onAddCourse(course)}
              >
                <i className="fa fa-check" aria-hidden="true"></i>
                {course.name}
              </Button>
            </li>
          )
        }
      })
    } else {
      return selectedCourses.map(course => {
        return (
          <li key={course.originCourseId}>
            <Button
              className="SignupListItem"
              onClick={() => this.onRemoveSelectedCourse(course)}
            >
              {course.name}
              <i className="fa fa-times" aria-hidden="true"></i>
            </Button>
          </li>
        )
      })
    }
  }

  render() {
    const { searchText } = this.props
    return(
      <ul style={{ listStyle: 'none'}}>
        {this.renderCourses()}
        {
          searchText ?
          <li>
            <Button
              className="SignupListItem"
              onClick={() => this.loadMore()}
            >Load More</Button>
          </li>
          :
          <li></li> 
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  availableCourses: state.courses.coursesBySchool,
  selectedCourses: state.courses.selectedCourses,
  universityID: state.user.postInitialSignUpValues.school,
  searchText: state.courses.searchText,
  skip: state.courses.skip
})

export default connect(
  mapStateToProps,
  actions
)(ChooseCourseList)
