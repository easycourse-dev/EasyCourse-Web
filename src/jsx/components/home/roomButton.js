import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { withRouter } from 'react-router'

class RoomButton extends Component {
  render() {
    const { name, key, course } = this.props
    return (
      <Button
        onClick={() => this.props.router.replace(`/home/course/${course}/room/${name}`)}
      >{name}</Button>
    )
  }
}

export default withRouter(RoomButton)
