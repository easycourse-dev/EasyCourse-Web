import React, { Component } from 'react'

export default class RoomHeader extends Component {
  render() {
    const { roomName } = this.props
    return (
      <div style={{ height: '50px', backgroundColor: '#494B6C'}}>
        <h4 style={{ display: 'inline', color: 'white'}}>{roomName}</h4>
      </div>
    )
  }
}
