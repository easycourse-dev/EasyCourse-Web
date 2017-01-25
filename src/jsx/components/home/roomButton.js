import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'

class RoomButton extends Component {
  render() {
    const { name, key, course } = this.props
    return (
      <Link to={`/main/chat/${course}/${name}`}>{name}</Link>
    )
  }
}

export default RoomButton
