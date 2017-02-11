import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/actions/index'
import Waypoint from 'react-waypoint'
import ItemCheckbox from '../itemCheckbox'
const truncate = require('truncate')

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
              <div
                className="SignupListItem"
                onClick={() => this.onRemoveSelectedCourse(course)}
              >
                <p>{course.name}</p>
                <small>{truncate(course.title, 40)}</small>
                <ItemCheckbox />
              </div>
            </li>
          )
        } else {
          return (
            <li key={course.originCourseId}>
              <div
                className="SignupListItem"
                onClick={() => this.onAddCourse(course)}
              >
                <p>{course.name}</p>
                <small>{truncate(course.title, 40)}</small>
              </div>
            </li>
          )
        }
      })
    } else {
      return selectedCourses.map(course => {
        return (
          <li key={course.originCourseId}>
            <div
              className="SignupListItem"
              onClick={() => this.onRemoveSelectedCourse(course)}
            >
              <p>{course.name}</p>
              <small>{truncate(course.title, 40)}</small>
							<ItemCheckbox />
            </div>
          </li>
        )
      })
    }
  }

  handleOnEnter = () => {
    this.loadMore()
  }

  handleOnLeave = () => {
    console.log('onLeave')
  }

  render() {
    const { searchText } = this.props
    return(
      <ul style={{ listStyle: 'none'}}>
        {this.renderCourses()}
        {
          searchText ?
          <div>
            <Waypoint
              topOffset="200px"
              onEnter={() => this.handleOnEnter()}
              onLeave={() => this.handleOnLeave()}
            />
            <p style={{color: 'white', textAlign: 'center'}}>Loading More...</p>
          </div>
          :
          <li></li>
        }
      </ul>
    )
  }
}

export default connect(
  (state) => ({
    availableCourses: state.courses.coursesBySchool,
    selectedCourses: state.courses.selectedCourses,
    universityId: state.university.selectedUniversity,
    searchText: state.courses.searchText,
    skip: state.courses.skip
  }),
  actions
)(ChooseCourseList)
