import React from 'react'
import { Button } from 'react-bootstrap'
import { addSelectedCourse, removeSelectedCourse } from '../redux/actions/courses'

const ChooseCourseList = ({ availableCourses, selectedCourses, searchText }) => {

  const onAddCourse = (course) => {
    addSelectedCourse(course)
  }

  const onRemoveSelectedCourse = (course) => {
    removeSelectedCourse(course)
  }

  const renderButton = (course, flag) => {
    if (flag === 1) {
      return(
        <li key={course.originCourseId}>
          <Button
            className="SignupListItem"
            onClick={() => onAddCourse(course)}
          >{course.name}</Button>
        </li>
      )
    } else {
      return(
        <li key={course.originCourseId}>
          <Button
            className="SignupListItem"
            onClick={() => onRemoveSelectedCourse(course)}
          >{course.name}</Button>
        </li>
      )
    }
  }

  const renderCourses = (availableCourses, selectedCourses, searchText) => {
    if (searchText) {
      return(
        availableCourses.map(course => renderButton(course, 1))
      )
    } else {
      return(
        selectedCourses.map(course => renderButton(course, 0))
      )
    }
  }

  return(
    <ul style={{ listStyle: 'none'}}>
      { renderCourses(availableCourses, selectedCourses, searchText) }
    </ul>
  )
}

export default ChooseCourseList
