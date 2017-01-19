import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class RoomButton extends Component {
  render() {
    const { name, key } = this.props
    return (
      <Button
        block
        key={key}
      >{name}</Button>
    )
  }
}

export default RoomButton
