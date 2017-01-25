import React, { Component } from 'react'
import { Accordion, Panel } from 'react-bootstrap'
import { connect } from 'react-redux'
import RoomButton from './roomButton'

class SideBarContent extends Component {

  renderRooms = (courseName, rooms) => {
    return rooms.map((room, i) => {
      if (room.name.includes(courseName)) {
        return <RoomButton key={i} name={room.name} course={courseName}></RoomButton>
      }
    })
  }

  renderCourses = (courses, rooms) => {
    return courses.map((course, i) => {
      return (
        <Panel header={course.name} eventKey={i} key={i}>
          <h5 style={{textAlign: 'center'}}>Rooms</h5>
          {this.renderRooms(course.name, rooms)}
        </Panel>
      )
    })
  }

  render() {
    const { courses, rooms, displayName } = this.props
    if (!courses && !rooms) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h5 style={{ textAlign: 'center'}}>Hi, {displayName}!</h5>
        <h5 style={{ textAlign: 'center'}}>Courses</h5>
        <Accordion>
          {this.renderCourses(courses, rooms)}
        </Accordion>
        <h5 style={{ textAlign: 'center'}}>Groups</h5>
        <h5 style={{ textAlign: 'center'}}>Direct Messages</h5>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    displayName: state.user.current_user.displayName,
    courses: state.user.current_user.joinedCourse,
    rooms: state.user.current_user.joinedRoom
  })
)(SideBarContent)
