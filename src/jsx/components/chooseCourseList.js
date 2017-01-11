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
    const { searchText, skip, universityId } = this.props
    let newSkip = skip + 10
    this.props.loadMoreCourses(searchText, universityId, newSkip)
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
                <i className="fa fa-check" aria-hidden="true"></i>
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
              <i className="fa fa-check" aria-hidden="true"></i>
              {course.name}
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
              className="SignupLoadMore"
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
  universityId: state.university.selectedUniversity,
  searchText: state.courses.searchText,
  skip: state.courses.skip
})

export default connect(
  mapStateToProps,
  actions
)(ChooseCourseList)
