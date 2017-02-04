import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import actions from '../../../redux/actions/index'
import { withRouter } from 'react-router'

import RoomButton from './roomButton'
import UserButton from './userButton'

class SideBarContent extends Component {

  renderRoom = (courseName, rooms) => {
    return rooms.map((room, i) => {
      if (room.name.includes(courseName)) {
        return (
          <li>
            <div className="text-center">
              <small
                onClick={() => this.props.router.replace(`/home/course/${courseName}`)}
                style={{ textAlign: 'center' }}
              >{courseName}</small>
            </div>
            <RoomButton key={room.name} room={room} courseName={courseName} />
          </li>
        )
      }
      return <li></li>
    })
  }

  renderRooms = (courses, rooms) => {
    return courses.map((course, i) => {
      return this.renderRoom(course.name, rooms)
    })
  }

  render() {
    const { courses, rooms, displayName, settingsSidebarOpen } = this.props
    if (!courses && !rooms) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <UserButton
          displayName={displayName}
        />
        <h4 style={{ textAlign: 'center'}}>Courses</h4>
        <ul style={{ listStyle: 'none'}}>
          {this.renderRooms(courses, rooms)}
        </ul>

        <h5 style={{ textAlign: 'center'}}>Groups</h5>
        <h5 style={{ textAlign: 'center'}}>Direct Messages</h5>
        <Button
          style={{ bottom: '5px', position: 'fixed'}}
          block
          onClick={() => this.props.logout()}
          >Log Out</Button>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    displayName: state.user.current_user.displayName,
    courses: state.user.current_user.joinedCourse,
    rooms: state.user.current_user.joinedRoom,
    settingsSidebarOpen: state.settings.settingsSidebarOpen
  }),
  actions
)(withRouter(SideBarContent))
