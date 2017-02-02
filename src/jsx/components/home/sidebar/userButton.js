import React, { Component } from 'react'
import { Popover, OverlayTrigger } from 'react-bootstrap'

class UserButton extends Component {

  render() {
    const { displayName } = this.props

    const UserPropertiesPopover = (
      <Popover id="popover-positioned-bottom">
        <div>
          <strong>{displayName}</strong>
          <hr />
          <ul style={{ listStyle: 'none' }}>
            <li className="UserPropertiesPopoverListItem">Languages</li>
          </ul>
          <hr />
          <ul style={{ listStyle: 'none' }}>
            <li className="UserPropertiesPopoverListItem">University</li>
            <li className="UserPropertiesPopoverListItem">Courses & Rooms</li>
          </ul>
          <hr />
          <ul style={{ listStyle: 'none' }}>
            <li className="UserPropertiesPopoverListItem"
              onClick={() => window.open("https://goo.gl/forms/Ny7oCjYQ9gCI6GrE2")}
            >Join Us</li>
            <li className="UserPropertiesPopoverListItem"
              onClick={() => window.open("http://www.easycourse.io/docs")}
            >Privacy & Terms</li>
            <li className="UserPropertiesPopoverListItem">Feedback</li>
          </ul>
        </div>
      </Popover>
    )

    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={UserPropertiesPopover}>
          <div className="UserButton">
            <h4 style={{ textAlign: 'center'}}>Hi, {displayName}!</h4>
          </div>
        </OverlayTrigger>
    )
  }
}

export default UserButton
