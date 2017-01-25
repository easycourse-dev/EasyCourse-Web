import React, { Component } from 'react'

export default class ChatHeader extends Component {
  render() {
    const { courseName, roomName } = this.props
    return (
      <div style={{ height: '50px', backgroundColor: '#494B6C'}}>
        <h4 style={{ display: 'inline', color: 'white'}}>{roomName}</h4>
      </div>
    )
  }
}
