import React, { Component } from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import actions from '../../../redux/actions/index'
import { connect } from 'react-redux'

class UserButton extends Component {

  onLanguagesClick = (value, viewName) => {
    this.props.toggleSettingsSidebar(value)
    this.props.updateSettingsView(viewName)
  }

  onCoursesAndRoomsClick = (value, viewName) => {
    this.props.toggleSettingsSidebar(value)
    this.props.updateSettingsView(viewName)
  }

  render() {
    const { displayName, settingsSidebarOpen } = this.props

    const UserPropertiesPopover = (
      <Popover id="popover-positioned-bottom">
        <div>
          <strong>{displayName}</strong>
          <hr />
          <ul style={{ listStyle: 'none' }}>
            <li
              className="UserPropertiesPopoverListItem"
              onClick={() => this.onLanguagesClick(!settingsSidebarOpen, 'language')}
            >Languages</li>
          </ul>
          <hr />
          <ul style={{ listStyle: 'none' }}>
            <li className="UserPropertiesPopoverListItem">University: Purdue University</li>
            <li
              className="UserPropertiesPopoverListItem"
              onClick={() => this.onCoursesAndRoomsClick(!settingsSidebarOpen, 'coursesAndRooms')}
            >Courses & Rooms</li>
          </ul>
          <hr />
          <ul style={{ listStyle: 'none' }}>
            <li className="UserPropertiesPopoverListItem"
              onClick={() => window.open("https://goo.gl/forms/Ny7oCjYQ9gCI6GrE2")}
            >Join Us</li>
            <li className="UserPropertiesPopoverListItem"
              onClick={() => window.open("http://www.easycourse.io/docs")}
            >Privacy & Terms</li>
            <li className="UserPropertiesPopoverListItem"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScbmQ5LsXsrpBDIr32iYdhP-VTwiAtejvUrUDyW8YbtTAL5Lg/viewform")}
            >Feedback</li>
          </ul>
        </div>
      </Popover>
    )

    return (
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={UserPropertiesPopover}>
          <div className="UserButton">
            <h4 style={{ textAlign: 'center'}}>Hi, {displayName}!</h4>
          </div>
        </OverlayTrigger>
    )
  }
}

export default connect(
  (state) => ({
    settingsSidebarOpen: state.settings.settingsSidebarOpen
  }),
  actions
)(UserButton)
